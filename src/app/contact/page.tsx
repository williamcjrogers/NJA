import Hero from "@/components/sections/Hero";
import { createMetadata } from "@/lib/metadata";
import { Phone, Mail, Clock } from "lucide-react";
import navigation from "@/data/navigation.json";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Contact Nicolas James Environmental for planned maintenance programmes, tender enquiries, or 24/7 emergency response. Get in touch with our team today.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Whether you need a planned maintenance programme, want to discuss a tender, or require emergency response — we're ready to help."
        size="md"
      />

      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-fluid-2xl font-bold text-brand-charcoal mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="enquiry-type" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiry-type"
                    name="enquiry-type"
                    className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="planned">Planned Maintenance Programme</option>
                    <option value="tender">Tender / PQQ Enquiry</option>
                    <option value="reactive">Reactive / Emergency Works</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-grey bg-white text-brand-charcoal focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-teal text-white text-base font-semibold rounded-lg hover:bg-brand-teal-light transition-colors min-h-[44px]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-fluid-2xl font-bold text-brand-charcoal mb-6">
                Contact Details
              </h2>

              {/* Emergency */}
              <div className="bg-brand-amber rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-2">24/7 Emergency Response</h3>
                <p className="text-white/80 text-sm mb-4">
                  For fallen trees, blocked watercourses, damaged fencing, and access clearance.
                </p>
                <a
                  href={navigation.emergency.href}
                  className="inline-flex items-center gap-2 text-white font-bold text-lg"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {navigation.emergency.phone}
                </a>
              </div>

              {/* General Contact */}
              <div className="bg-white rounded-xl p-6 border border-brand-grey space-y-6">
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold text-brand-charcoal">Phone</h3>
                    <a href={`tel:${navigation.contact.phone.replace(/\s/g, "")}`} className="text-brand-charcoal-light hover:text-brand-teal transition-colors">
                      {navigation.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold text-brand-charcoal">Email</h3>
                    <a href={`mailto:${navigation.contact.email}`} className="text-brand-charcoal-light hover:text-brand-teal transition-colors">
                      {navigation.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold text-brand-charcoal">Office Hours</h3>
                    <p className="text-brand-charcoal-light">Monday - Friday: 07:00 - 17:00</p>
                    <p className="text-brand-charcoal-light">Emergency response: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
