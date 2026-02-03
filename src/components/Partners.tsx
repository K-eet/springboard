export default function Partners() {
  return (
    <section id="partners" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">
          Strategic Partners
        </h2>
        <p className="text-lg text-[#a0a0a0] max-w-[700px] leading-relaxed mb-16">
          Our partnership with Silicon Foundry connects Southeast Asian
          enterprises to a global network of innovation expertise and emerging
          technology leaders.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Silicon Foundry - Featured */}
          <div className="bg-[#1a1a1a] border border-[#3b82f6]/30 rounded-xl p-8 md:p-10 flex flex-col items-center justify-center min-h-[140px] text-center">
            <span className="text-lg font-semibold">Silicon Foundry</span>
            <span className="text-xs text-[#a0a0a0] mt-1">
              A Kearney Company
            </span>
          </div>

          {/* Placeholder partners */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 md:p-10 flex items-center justify-center min-h-[140px]"
            >
              <span className="text-sm text-[#a0a0a0] opacity-50">
                Partner Logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
