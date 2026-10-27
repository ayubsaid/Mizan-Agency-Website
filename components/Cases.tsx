const cases = [
  {
    tag: "Retail",
    title: "[CLIENT NAME]: from notebook orders to an online store",
    challenge: "Orders came through phone and messengers and were often lost.",
    solution: "Online store, WhatsApp ordering and CRM connected in one flow.",
  },
  {
    tag: "Restaurant",
    title: "[CLIENT NAME]: delivery without phone chaos",
    challenge: "Staff spent hours taking delivery orders by phone.",
    solution: "Online menu with ordering, routed directly to the kitchen.",
  },
  {
    tag: "Services",
    title: "[CLIENT NAME]: fewer missed appointments",
    challenge: "Clients forgot bookings and the schedule was kept on paper.",
    solution: "Online booking with automatic reminders and a client base.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-sand">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">Business cases</p>
            <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Real problems, solved
            </h2>
          </div>
          <a href="#contact" className="font-bold text-brand underline hover:text-ink">
            Have a similar challenge? Let’s talk →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.tag} className="flex flex-col gap-[18px] rounded-[20px] bg-white p-6 md:p-8">
              <div className="flex h-[170px] items-center justify-center rounded-[14px] bg-[#E4E9E3] text-sm font-semibold text-[#5F6C66]">
                [PROJECT SCREENSHOT]
              </div>
              <span className="self-start rounded-full bg-brand-soft px-3 py-1.5 text-[13px] font-bold text-brand">
                {item.tag}
              </span>
              <h3 className="text-[22px] font-bold leading-[1.25]">{item.title}</h3>
              <div className="flex flex-col gap-2.5 text-[15px] leading-[1.55]">
                <p>
                  <strong>Challenge:</strong> <span className="text-muted">{item.challenge}</span>
                </p>
                <p>
                  <strong>Solution:</strong> <span className="text-muted">{item.solution}</span>
                </p>
                <p>
                  <strong>Result:</strong> <span className="text-muted">[ADD MEASURED RESULT]</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
