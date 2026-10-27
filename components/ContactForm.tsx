"use client";

import { useState, type FormEvent } from "react";

const needOptions = [
  "Website",
  "Online store",
  "CRM",
  "Chatbot / WhatsApp",
  "Automation",
  "Integrations",
  "AI assistant",
  "Not sure yet",
];

const fieldClass =
  "min-h-12 rounded-[10px] border-[1.5px] border-stone bg-white p-3.5 text-base font-normal focus:border-brand focus:outline-none";
const labelClass = "flex flex-col gap-2 text-sm font-semibold";

export default function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  function toggleNeed(need: string) {
    setNeeds(needs.includes(need) ? needs.filter((n) => n !== need) : [...needs, need]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI only for now — email sending will be connected here later.
    setSent(true);
  }

  function reset() {
    setNeeds([]);
    setSent(false);
  }

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-6 py-16 md:py-24 lg:flex-row">
        <div className="flex min-w-0 flex-col gap-5 lg:flex-[1_1_380px]">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#A9CDB3]">Start a project</p>
          <h2 className="text-[clamp(2.2rem,3.8vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            Tell us about your business. We’ll suggest the right solution.
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#C4CEC9]">
            Fill in a few details and our team will contact you within one working day with ideas and an estimated
            budget. The first consultation is free.
          </p>
          <div className="mt-3 flex flex-col gap-3">
            <span>
              <strong>Phone:</strong> <span className="text-[#C4CEC9]">[+44 20 XXXX XXXX]</span>
            </span>
            <span>
              <strong>WhatsApp:</strong> <span className="text-[#C4CEC9]">[+44 7XXX XXXXXX]</span>
            </span>
            <span>
              <strong>Email:</strong> <span className="text-[#C4CEC9]">[hello@mizangroup.co.uk]</span>
            </span>
            <span>
              <strong>Office:</strong> <span className="text-[#C4CEC9]">[UK ADDRESS]</span>
            </span>
          </div>
        </div>

        <div className="min-w-0 rounded-[22px] bg-white p-6 text-ink md:p-9 lg:flex-[1_1_520px]">
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-10" role="status">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand-soft">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2D5A3D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-[28px] font-extrabold">Thank you — request received</h3>
              <p className="leading-[1.6] text-muted">Our team will contact you within one working day.</p>
              <button
                type="button"
                onClick={reset}
                className="min-h-[46px] cursor-pointer rounded-xl border-[1.5px] border-ink bg-white px-5 py-3 text-[15px] font-bold hover:text-brand"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  Your name *
                  <input type="text" name="name" required autoComplete="name" placeholder="Full name" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Phone *
                  <input type="tel" name="phone" required autoComplete="tel" placeholder="+44" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Company name *
                  <input type="text" name="company" required autoComplete="organization" placeholder="Your business" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Industry
                  <select name="industry" className={fieldClass}>
                    <option>Retail &amp; e-commerce</option>
                    <option>Restaurant / café</option>
                    <option>Services</option>
                    <option>Clinic / healthcare</option>
                    <option>Logistics &amp; distribution</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className={labelClass}>
                  Team size
                  <select name="teamSize" className={fieldClass}>
                    <option>1–10 people</option>
                    <option>11–50 people</option>
                    <option>51–200 people</option>
                    <option>200+ people</option>
                  </select>
                </label>
                <label className={labelClass}>
                  Budget (optional)
                  <select name="budget" className={fieldClass}>
                    <option>Not sure yet</option>
                    <option>[£ RANGE 1]</option>
                    <option>[£ RANGE 2]</option>
                    <option>[£ RANGE 3]</option>
                  </select>
                </label>
              </div>

              <fieldset className="flex flex-col gap-2.5">
                <legend className="mb-2.5 text-sm font-semibold">What do you need? (choose any)</legend>
                <div className="flex flex-wrap gap-2">
                  {needOptions.map((need) => {
                    const picked = needs.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        aria-pressed={picked}
                        onClick={() => toggleNeed(need)}
                        className={`min-h-11 cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-sm font-semibold ${
                          picked ? "border-brand bg-brand text-white" : "border-stone bg-white text-ink hover:border-ink"
                        }`}
                      >
                        {picked && "✓ "}
                        {need}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className={labelClass}>
                Tell us briefly about your business and the problem
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What do you sell, how do you work today, what takes too much time?"
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="min-h-14 cursor-pointer rounded-xl bg-brand p-[18px] text-[17px] font-bold text-white hover:bg-ink"
              >
                Send request
              </button>
              <p className="text-[13px] leading-[1.5] text-[#5F6C66]">
                By sending this form you agree that Mizan Group may contact you about your request. We handle your data
                in line with UK GDPR. [LINK TO PRIVACY POLICY]
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
