import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            #0a0a0a
          `,
        }}
      />

      <div className="max-w-[900px] mx-auto px-6 pt-20 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6">
          Transforming Enterprises Through Strategic AI Innovation
        </h1>
        <p className="text-lg sm:text-xl md:text-[22px] text-[#a0a0a0] mb-12 max-w-[700px] mx-auto leading-relaxed">
          In partnership with Silicon Foundry, a Kearney company, we help
          organizations navigate the complexities of AI-driven transformation.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-all hover:-translate-y-0.5"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
