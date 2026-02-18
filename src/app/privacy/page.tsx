import Hero from "@/components/sections/Hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Nicolas James Environmental website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Hero subtitle="Legal" title="Privacy Policy" size="sm" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 prose prose-lg prose-brand">
          <p><strong>Last updated:</strong> February 2026</p>

          <h2>Who We Are</h2>
          <p>
            Nicolas James Environmental is a specialist environmental services contractor operating across the United Kingdom. This privacy policy explains how we collect, use, and protect your personal data when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following information through our website:</p>
          <ul>
            <li>Name, company, email address, and phone number when you submit a contact form</li>
            <li>Information you provide in enquiry messages</li>
            <li>Technical data including IP address, browser type, and pages visited (through analytics)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested information</li>
            <li>Manage and improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
          </p>

          <h2>Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website uses essential cookies required for the site to function. We may also use analytics cookies with your consent to help us understand how visitors use the site. You can manage your cookie preferences at any time.
          </p>

          <h2>Contact</h2>
          <p>
            For any questions about this privacy policy or your personal data, please contact us at info@nicolasjames.co.uk.
          </p>
        </div>
      </section>
    </>
  );
}
