const bars = ["38%", "52%", "46%", "64%", "72%", "88%"];

const events = [
  { text: "New order from WhatsApp", target: "→ CRM", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  {
    text: "Online payment received",
    target: "→ Accounting",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    text: "Stock updated on website",
    target: "→ Warehouse",
    icon: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="bg-sand">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-6 pt-14 pb-16 md:pt-[88px] md:pb-24 lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-col gap-[26px] lg:flex-[1_1_520px]">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">
            Technology partner for UK small &amp; medium businesses
          </p>
          <h1 className="text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
            Run your whole business in balance — online, automated, connected.
          </h1>
          <p className="max-w-[560px] text-[1.2rem] leading-[1.6] text-muted">
            Mizan Group builds the websites, CRM systems, chatbots and integrations that let UK small and medium
            businesses sell more and spend less time on routine work.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-brand px-[26px] py-[17px] font-bold text-white hover:bg-ink">
              Tell us about your business
            </a>
            <a
              href="#solutions"
              className="rounded-xl border-[1.5px] border-ink bg-white px-6 py-[15.5px] font-bold hover:text-brand"
            >
              Explore solutions
            </a>
          </div>
          <p className="text-sm text-muted">Free first consultation · Reply within one working day</p>
        </div>

        {/* Illustrative "system panel" — decorative, not real data */}
        <div className="min-w-0 lg:flex-[1_1_420px]">
          <div className="rounded-[20px] border border-line bg-white p-[22px] shadow-[0_24px_60px_rgba(13,27,22,0.08)]">
            <div className="mb-[18px] flex items-center justify-between">
              <span className="text-[15px] font-bold">Your business, one dashboard</span>
              <span className="rounded-full bg-brand-soft px-2.5 py-[5px] text-xs font-semibold text-brand">Live</span>
            </div>
            <div className="flex h-[120px] items-end gap-2.5 border-b border-line-soft px-1 pb-2.5" aria-hidden="true">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand" : "bg-stone"}`}
                  style={{ height }}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {events.map((event) => (
                <div key={event.text} className="flex items-center gap-3 rounded-xl bg-[#F6F7F4] px-3.5 py-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-none">
                    {event.icon}
                  </svg>
                  <span className="flex-1">{event.text}</span>
                  <span className="text-muted">{event.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
