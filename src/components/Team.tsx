import Image from "next/image";

const advisors = [
  {
    name: "[Advisor Name]",
    title: "Former CTO, Fortune 500 Tech Company",
    bio: "Enterprise technology and digital infrastructure specialist.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "[Advisor Name]",
    title: "Managing Partner, Global VC Firm",
    bio: "Deep expertise in enterprise software investments across APAC.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "[Advisor Name]",
    title: "Professor of AI, Leading University",
    bio: "Published researcher in machine learning and AI ethics.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "[Advisor Name]",
    title: "Former CEO, Regional Conglomerate",
    bio: "Extensive corporate leadership experience in Southeast Asia.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">
          Leadership
        </h2>

        {/* CEO Card */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 md:p-12 mt-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
              alt="CEO headshot placeholder"
              width={180}
              height={180}
              className="rounded-full object-cover w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-[28px] font-semibold mb-2">
              [CEO Name]
            </h3>
            <p className="text-base font-medium text-[#3b82f6] mb-5">
              Chief Executive Officer
            </p>
            <p className="text-base text-[#a0a0a0] leading-relaxed mb-5">
              A seasoned executive with over two decades of experience in
              management consulting and corporate strategy across Asia-Pacific
              markets. Previously held leadership positions at multinational
              consulting firms and Fortune 500 companies, specializing in
              digital transformation and enterprise technology adoption.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a0a0a] text-[#a0a0a0] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Advisors */}
        <h3 className="text-2xl font-medium text-[#a0a0a0] mt-20 mb-10">
          Advisors
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 text-center"
            >
              <Image
                src={advisor.image}
                alt={`${advisor.name} headshot placeholder`}
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px] mx-auto mb-5"
              />
              <h4 className="text-lg font-semibold mb-2">{advisor.name}</h4>
              <p className="text-[13px] font-medium text-[#3b82f6] mb-3">
                {advisor.title}
              </p>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                {advisor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
