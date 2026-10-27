const steps = [
  { n: "01", title: "Free consultation", text: "We learn how your business works today and where time and money are lost." },
  { n: "02", title: "Proposal & estimate", text: "You get a clear plan: what we build, timeline and fixed price." },
  { n: "03", title: "Build & integrate", text: "We build, connect your systems and train your team." },
  { n: "04", title: "Launch & support", text: "We launch, monitor and keep improving as your business grows." },
];

export default function Process() {
  return (
    <section id="process">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 py-16 md:py-24">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">How we work</p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            From first call to a working system
          </h2>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col gap-2.5 border-t-[3px] border-ink pt-[22px]">
              <span className="text-[15px] font-extrabold text-brand">{step.n}</span>
              <span className="text-[21px] font-bold">{step.title}</span>
              <span className="leading-[1.6] text-muted">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
