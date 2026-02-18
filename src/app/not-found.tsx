import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-brand-amber mb-4">
          404
        </p>
        <h1 className="text-fluid-4xl font-bold text-brand-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-charcoal-light max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Back to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
