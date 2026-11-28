# Connecting the Admission Enquiry form to Google Sheets

The enquiry form on the website (Contact section) does two things on submit:

1. Opens WhatsApp with a pre-filled message to your counsellors.
2. Sends the same details to a Google Sheet, so every enquiry is logged even
   if the visitor doesn't actually hit "Send" in WhatsApp.

Step 2 needs a small, free Google Apps Script "web app" that sits in front of
a Google Sheet you own. Nothing here needs a paid plan, and it takes about
5 minutes to set up. You only need to do this once.

## 1. Create the sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new,
   blank spreadsheet.
2. Name it something like **"KGoC Admission Enquiries"**.
3. In row 1, add these column headers, in this order:

   `Timestamp | Full Name | Phone | Email | Course of Interest | Preferred Destination | Message`

## 2. Add the Apps Script

1. In the sheet, go to **Extensions → Apps Script**.
2. Delete whatever's in the editor and paste this in:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.submittedAt || new Date().toISOString(),
       data.fullName || '',
       data.phone || '',
       data.email || '',
       data.course || '',
       data.destination || '',
       data.message || '',
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ status: 'ok' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click the disk icon (or Ctrl/Cmd+S) to save. Give the project a name if asked,
   e.g. "KGoC Enquiry Logger".

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description:** anything, e.g. "Enquiry form logger"
   - **Execute as:** **Me** (your Google account)
   - **Who has access:** **Anyone** — this has to be "Anyone" (not "Anyone
     with a Google account") because the website visitor isn't signed into
     Google when the form submits. The web app only runs the `doPost`
     function above — it can't read or expose anything else in your account.
4. Click **Deploy**. Google will ask you to authorize the script the first
   time — click through the "unverified app" warning (this is your own
   script, running under your own account, so this is expected) and
   approve it.
5. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Wire the URL into the website

1. In the project, create a file named `.env` in the root (next to
   `package.json`) if it doesn't already exist. A `.env.example` is
   included in the repo as a template.
2. Add this line, with the URL from step 3:

   ```
   VITE_GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

3. Rebuild and redeploy the site (`npm run build`, then your usual deploy
   step) so the new environment variable is baked into the build.

That's it — every form submission from then on appends a row to the sheet,
in addition to opening WhatsApp.

## Notes

- If you ever need to change where enquiries get sent (e.g. after
  recreating the sheet), just redeploy the Apps Script project
  (**Deploy → Manage deployments → Edit → New version**) or create a new
  deployment and update `VITE_GOOGLE_SHEET_WEBHOOK_URL` to match.
- The website can't read back a confirmation from the script (Apps Script
  web apps don't support the cross-origin check browsers require for that),
  so the form doesn't show "saved to sheet" — it just silently logs it in the
  background while WhatsApp opens. You can always open the sheet to confirm
  an enquiry made it through.
- If `VITE_GOOGLE_SHEET_WEBHOOK_URL` is never set, the form still works
  perfectly for WhatsApp — it just has nowhere to log to, so that step is
  skipped.
