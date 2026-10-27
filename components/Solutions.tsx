const services = [
  {
    title: "Websites & online stores",
    text: "Fast, mobile-first websites and e-commerce stores with online payment, delivery and an admin panel you can run yourself.",
    icon: "M3 4h18v12H3zM8 20h8M12 16v4",
  },
  {
    title: "CRM & sales automation",
    text: "One place for every lead and customer. Calls, messages and orders tracked automatically, so no request gets lost.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Chatbots & WhatsApp automation",
    text: "Chatbots on your website and WhatsApp that take orders, book appointments, answer common questions and send notifications to your team and customers.",
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    title: "Business process automation",
    text: "We remove manual work: documents, invoices, reports and approvals that run on their own instead of in spreadsheets.",
    icon: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  },
  {
    title: "Analytics & dashboards",
    text: "See sales, stock, staff performance and cash flow on one live dashboard instead of collecting numbers by hand.",
    icon: "M3 3v18h18M7 15l4-4 3 3 5-6",
  },
  {
    title: "AI assistants",
    text: "AI that answers customers, drafts replies, sorts requests and helps your team find information faster.",
    icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z",
  },
];

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">Solutions</p>
            <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Everything your business needs to work digitally
            </h2>
          </div>
          <p className="max-w-[420px] text-[17px] leading-[1.6] text-muted">
            Pick one service or let us build the whole system. Every solution is set up for your processes, not a
            template.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-white p-[30px]"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-brand-soft">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2D5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={service.icon} />
                </svg>
              </div>
              <h3 className="text-[21px] font-bold tracking-[-0.01em]">{service.title}</h3>
              <p className="leading-[1.6] text-muted">{service.text}</p>
              <a href="#contact" className="mt-auto text-[15px] font-bold text-brand underline hover:text-ink">
                Discuss this solution →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
