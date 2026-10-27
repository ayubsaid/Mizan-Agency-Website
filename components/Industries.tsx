"use client";

import { useState } from "react";

const industries = [
  {
    name: "Retail & e-commerce",
    headline: "Sell online and offline from one system",
    text: "Connect your shop, website and marketplaces so orders, stock and payments stay in sync.",
    points: [
      "Online store with payments and delivery",
      "Stock synced between shop, website and warehouse",
      "Customer base and loyalty in a CRM",
      "Daily sales report sent to your phone",
    ],
  },
  {
    name: "Restaurants & cafés",
    headline: "Take more orders with less chaos",
    text: "Online menu, delivery orders and table bookings that go straight to the kitchen and the till.",
    points: [
      "Online menu and ordering via website or WhatsApp",
      "Delivery orders routed to the kitchen automatically",
      "Table booking bot",
      "Sales and product reports by day and branch",
    ],
  },
  {
    name: "Service businesses",
    headline: "Bookings, clients and payments on autopilot",
    text: "For salons, education centres, agencies and other service companies.",
    points: [
      "Online booking with reminders",
      "Client history and repeat-visit tracking",
      "Online payment and invoices",
      "Staff schedule and workload overview",
    ],
  },
  {
    name: "Clinics",
    headline: "A smoother journey for every patient",
    text: "Appointments, reminders and patient communication in one connected flow.",
    points: [
      "Appointment booking via website and WhatsApp",
      "Automatic reminders to reduce no-shows",
      "Patient records in a secure, UK GDPR-compliant CRM",
      "Reports on doctors, services and revenue",
    ],
  },
  {
    name: "Logistics & distribution",
    headline: "Know where every order is",
    text: "Tools that connect your warehouse, drivers, dealers and accounting.",
    points: [
      "Order intake from dealers and partners",
      "Delivery status tracking for customers",
      "Warehouse and stock automation",
      "Integration with Xero, QuickBooks or Sage",
    ],
  },
];

export default function Industries() {
  // Index of the tab that is currently selected.
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="industries" className="bg-sand">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-16 md:py-24">
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">Built for your industry</p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Solutions shaped around how your business works
          </h2>
        </div>

        <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2.5">
          {industries.map((industry, i) => {
            const selected = i === active;
            return (
              <button
                key={industry.name}
                type="button"
                role="tab"
                id={`industry-tab-${i}`}
                aria-selected={selected}
                aria-controls="industry-panel"
                onClick={() => setActive(i)}
                className={`min-h-[46px] cursor-pointer rounded-full border-[1.5px] px-5 py-3 text-[15px] font-semibold ${
                  selected ? "border-ink bg-ink text-white" : "border-stone bg-white text-ink hover:border-ink"
                }`}
              >
                {industry.name}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="industry-panel"
          aria-labelledby={`industry-tab-${active}`}
          className="flex flex-col gap-10 rounded-[22px] bg-white p-6 md:p-11 lg:flex-row"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <h3 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[30px]">
              {current.headline}
            </h3>
            <p className="text-[17px] leading-[1.6] text-muted">{current.text}</p>
            <a
              href="#contact"
              className="mt-2 self-start rounded-xl bg-brand px-[22px] py-3.5 text-[15px] font-bold text-white hover:bg-ink"
            >
              Get a plan for my business
            </a>
          </div>
          <ul className="flex min-w-0 flex-1 flex-col gap-3">
            {current.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3.5 rounded-[14px] border border-line-soft px-[18px] py-4 leading-[1.5]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5A3D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-px flex-none">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
