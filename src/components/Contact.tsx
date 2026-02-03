"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}. Your message has been received. We'll be in touch soon.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">
          Let&apos;s Talk
        </h2>
        <p className="text-lg text-[#a0a0a0] leading-relaxed mb-12">
          Ready to explore how AI can transform your organization? We&apos;d
          welcome the opportunity to discuss your strategic priorities.
        </p>

        <form onSubmit={handleSubmit} className="text-left mb-12">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#a0a0a0] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-4 text-base bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#a0a0a0] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-4 text-base bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#a0a0a0] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-4 text-base bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-y min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 text-base font-medium bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-all hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-[#2a2a2a] pt-8">
          <p className="text-sm text-[#a0a0a0] mb-2">Kuala Lumpur, Malaysia</p>
          <a
            href="mailto:hello@springboard.my"
            className="text-lg font-medium text-[#3b82f6] hover:underline"
          >
            hello@springboard.my
          </a>
        </div>
      </div>
    </section>
  );
}
