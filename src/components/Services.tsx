const services = [
  {
    title: "Consulting",
    description:
      "We partner with enterprise leadership teams to develop comprehensive AI strategies aligned with business objectives. From readiness assessments to implementation roadmaps, our consultants bring frameworks proven across Fortune 500 engagements to help you navigate transformation with confidence. We focus on sustainable value creation, not technology for its own sake.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14L24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 44V24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 14L24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ventures",
    description:
      "Through our ventures arm, we identify and invest in early-stage companies building transformative AI solutions for enterprise markets. Our portfolio companies gain access to corporate partners, go-to-market support, and the strategic guidance needed to scale. For our enterprise clients, this means early access to emerging technologies and potential strategic partnerships.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 12V24L32 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 md:p-12 transition-all hover:border-[#3b82f6]/30 hover:-translate-y-1"
            >
              <div className="text-[#3b82f6] mb-6">{service.icon}</div>
              <h3 className="text-2xl md:text-[28px] font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-base text-[#a0a0a0] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
