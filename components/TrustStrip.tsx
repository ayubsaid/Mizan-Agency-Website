// Swap these placeholders for real client logos when you have permission to show them.
const clients = ["[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]"];

export default function TrustStrip() {
  return (
    <section aria-label="Clients" className="border-b border-line-soft">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-10 gap-y-5 px-6 py-8">
        <span className="text-sm font-semibold text-muted">Businesses that trust us</span>
        <div className="flex flex-wrap gap-x-9 gap-y-3.5 text-[15px] font-bold text-[#7A8681]">
          {clients.map((client, i) => (
            <span key={i}>{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
