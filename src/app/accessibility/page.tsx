import Hero from "@/components/sections/Hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for the Nicolas James Environmental website. Built to WCAG 2.2 AA standards.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <Hero subtitle="Legal" title="Accessibility Statement" size="sm" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 prose prose-lg prose-brand">
          <p><strong>Last updated:</strong> February 2026</p>

          <h2>Our Commitment</h2>
          <p>
            Nicolas James Environmental is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2>Conformance Status</h2>
          <p>
            This website has been built to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities.
          </p>

          <h2>Measures Taken</h2>
          <p>We have taken the following measures to ensure accessibility:</p>
          <ul>
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Keyboard navigation support across all interactive elements</li>
            <li>Visible focus indicators on all focusable elements</li>
            <li>Colour contrast ratios meeting WCAG 2.2 AA requirements (minimum 4.5:1 for normal text)</li>
            <li>Touch targets of minimum 44x44 pixels</li>
            <li>Text resizable to 200% without content loss</li>
            <li>Meaningful alternative text on all images</li>
            <li>Skip-to-content link for keyboard users</li>
            <li>Reduced motion support for users who prefer minimal animation</li>
            <li>Responsive design that works across all screen sizes</li>
          </ul>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. If you encounter any accessibility barriers, please contact us at info@nicolasjames.co.uk and we will work to address the issue promptly.
          </p>

          <h2>Technical Specifications</h2>
          <p>
            This website relies on the following technologies for conformance with WCAG 2.2 AA: HTML, CSS, JavaScript, and WAI-ARIA.
          </p>
        </div>
      </section>
    </>
  );
}
