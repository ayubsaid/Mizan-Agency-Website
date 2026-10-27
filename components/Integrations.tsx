const integrations = [
  { name: "Online payments", text: "Stripe, Square, PayPal and GoCardless on your website" },
  { name: "Accounting", text: "Orders and payments flow into Xero, QuickBooks or Sage" },
  { name: "WhatsApp & email", text: "Chatbots, notifications and customer conversations" },
  { name: "Marketplaces", text: "Products and orders synced with Amazon, eBay, Etsy and Shopify" },
  { name: "Google & Microsoft 365", text: "Sheets, Excel, calendars and drives connected to your CRM" },
  { name: "Delivery & SMS", text: "Royal Mail, DPD, Evri and SMS notifications" },
];

export default function Integrations() {
  return (
    <section id="integrations">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-6 py-16 md:py-24 lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-col gap-[18px] lg:flex-[1_1_420px]">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand">Integrations</p>
          <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Your tools, finally talking to each other
          </h2>
          <p className="text-[17px] leading-[1.6] text-muted">
            We connect the systems you already use so data moves on its own: an order on the website appears in the
            CRM, the payment lands in accounting, and stock updates everywhere.
          </p>
        </div>

        <div className="grid min-w-0 gap-3.5 sm:grid-cols-2 lg:flex-[1_1_520px]">
          {integrations.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5 rounded-2xl border border-line px-[22px] py-5">
              <span className="text-[17px] font-bold">{item.name}</span>
              <span className="text-sm leading-[1.5] text-muted">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
