import React, { useState } from 'react';
import { MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '919168718833';

// Set by the deployed Google Apps Script web app (see GOOGLE_SHEETS_SETUP.md).
// When unset, the form still works end-to-end for WhatsApp — it just skips
// the sheet row, so this is never a reason to block submission.
const SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;

const destinations = [
  'India',
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'New Zealand',
  'Other / Not sure yet',
];

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  course: '',
  destination: '',
  message: '',
};

const buildWhatsAppMessage = (d) => {
  const lines = [
    'Hi Kasat Group, I would like to send an admission enquiry.',
    '',
    `*Name:* ${d.fullName}`,
    `*Phone:* ${d.phone}`,
  ];
  if (d.email) lines.push(`*Email:* ${d.email}`);
  if (d.course) lines.push(`*Course of Interest:* ${d.course}`);
  if (d.destination) lines.push(`*Preferred Destination:* ${d.destination}`);
  if (d.message) lines.push(`*Message:* ${d.message}`);
  return lines.join('\n');
};

const inputClass =
  'w-full rounded-xl border border-[#F1D3E5] bg-[#FFFCFA] px-4 py-3 text-[#202033] placeholder:text-[#9B96A3] focus:outline-none focus:ring-2 focus:ring-[#880650]/25 focus:border-[#880650] transition-colors';

const labelClass = 'block text-sm font-bold text-[#202033] mb-1.5';

export const AdmissionEnquiryForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | redirecting | done

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your name.';
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim() || digits.length < 7) next.phone = 'Please enter a valid phone number.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'That email address looks incomplete.';
    }
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // Log the enquiry to Google Sheets. Fire-and-forget: Apps Script web
    // apps don't send CORS headers, so this request is sent `no-cors` and
    // the response is opaque — we can't confirm it landed, but we also
    // never let a sheet hiccup block the WhatsApp handoff, which is the
    // part the visitor actually cares about.
    if (SHEET_WEBHOOK_URL) {
      try {
        fetch(SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        }).catch(() => {});
      } catch {
        // Ignore — see note above.
      }
    }

    setStatus('redirecting');
    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setStatus('done');
    setTimeout(() => {
      setForm(initialForm);
      setStatus('idle');
    }, 2500);
  };

  const isBusy = status === 'submitting' || status === 'redirecting';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#202033] mb-2">
          Send an Admission Enquiry
        </h3>
        <p className="text-sm sm:text-base text-[#4A4A5A] leading-relaxed">
          Fill out the form below. On submit, we'll open WhatsApp with your enquiry details
          pre-filled so you can send it straight to our counsellors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="enq-name">
            Full Name <span className="text-[#880650]">*</span>
          </label>
          <input
            id="enq-name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            className={inputClass}
            value={form.fullName}
            onChange={update('fullName')}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <p className="mt-1 text-xs font-semibold text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="enq-phone">
            Phone Number <span className="text-[#880650]">*</span>
          </label>
          <input
            id="enq-phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            className={inputClass}
            value={form.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs font-semibold text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="enq-email">
            Email Address
          </label>
          <input
            id="enq-email"
            type="email"
            placeholder="e.g. rahul@example.com"
            className={inputClass}
            value={form.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="enq-course">
            Course of Interest
          </label>
          <input
            id="enq-course"
            type="text"
            placeholder="e.g. MBBS, B.Tech CSE, MBA, BPTH"
            className={inputClass}
            value={form.course}
            onChange={update('course')}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-destination">
          Preferred Study Destination
        </label>
        <select
          id="enq-destination"
          className={`${inputClass} appearance-none bg-no-repeat bg-[right_1rem_center]`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23880650' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          }}
          value={form.destination}
          onChange={update('destination')}
        >
          <option value="">Select destination</option>
          {destinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-message">
          Your Message / Query
        </label>
        <textarea
          id="enq-message"
          rows={4}
          placeholder="Tell us about your entrance score, preferred state or university, budget, or specific query..."
          className={`${inputClass} resize-y`}
          value={form.message}
          onChange={update('message')}
        />
      </div>

      <button
        type="submit"
        disabled={isBusy}
        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-card hover:shadow-card-hover disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'done' ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            <span>Opened in WhatsApp</span>
          </>
        ) : isBusy ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Preparing your message...</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span>Send Enquiry via WhatsApp</span>
          </>
        )}
      </button>
    </form>
  );
};
