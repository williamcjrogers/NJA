/* Accreditation trust bar – greyscale SVG logo marks for instant visual recognition.
   Corporate accreditations (CHAS, Constructionline, SafeContractor) are rendered as
   recognisable brand-shapes. Staff qualifications shown as clean shield badges. */

function CHASLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="CHAS Accredited">
      {/* CHAS shield shape */}
      <rect x="2" y="4" width="40" height="40" rx="4" fill="#444" />
      <path d="M22 12 L22 36" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 24 L30 24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 18 C14 14 22 10 22 10 C22 10 30 14 30 18" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="50" y="22" fill="#444" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">CHAS</text>
      <text x="50" y="35" fill="#888" fontSize="7.5" fontFamily="system-ui, sans-serif">Accredited</text>
    </svg>
  );
}

function ConstructionlineLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Constructionline Registered">
      {/* Constructionline tick-in-circle mark */}
      <circle cx="22" cy="24" r="18" fill="#444" />
      <path d="M13 24 L19 30 L31 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="48" y="20" fill="#444" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Constructionline</text>
      <text x="48" y="33" fill="#888" fontSize="7.5" fontFamily="system-ui, sans-serif">Registered</text>
    </svg>
  );
}

function SafeContractorLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SafeContractor Approved">
      {/* SafeContractor shield with tick */}
      <path d="M22 4 L38 10 L38 28 C38 36 22 44 22 44 C22 44 6 36 6 28 L6 10 Z" fill="#444" />
      <path d="M14 22 L19 27 L30 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="46" y="20" fill="#444" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SafeContractor</text>
      <text x="46" y="33" fill="#888" fontSize="7.5" fontFamily="system-ui, sans-serif">Approved</text>
    </svg>
  );
}

function CSCSLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="CSCS Certified">
      {/* CSCS card shape */}
      <rect x="4" y="10" width="34" height="28" rx="3" fill="#555" />
      <rect x="8" y="14" width="10" height="10" rx="1.5" fill="#888" />
      <rect x="21" y="15" width="13" height="2" rx="1" fill="#999" />
      <rect x="21" y="20" width="10" height="2" rx="1" fill="#999" />
      <rect x="8" y="28" width="26" height="2" rx="1" fill="#777" />
      <rect x="8" y="33" width="18" height="2" rx="1" fill="#999" />
      <text x="44" y="22" fill="#444" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">CSCS</text>
      <text x="44" y="35" fill="#888" fontSize="7.5" fontFamily="system-ui, sans-serif">Certified</text>
    </svg>
  );
}

function QualificationBadge({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-center gap-2.5 group" title={detail}>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-300 group-hover:from-gray-300 group-hover:to-gray-400 transition-colors">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 Z" />
        </svg>
      </div>
      <span className="text-sm font-semibold text-gray-600 tracking-wide">{label}</span>
    </div>
  );
}

export default function AccreditationBar() {
  return (
    <section
      className="relative bg-white py-10 md:py-12"
      aria-label="Accreditations and Qualifications"
      data-reveal="fade-up"
    >
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Label */}
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-8">
          Accredited &amp; Certified
        </p>

        {/* Primary accreditation logos – the ones procurement managers look for */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 mb-8">
          <CHASLogo className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <ConstructionlineLogo className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <SafeContractorLogo className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <CSCSLogo className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-200 mx-auto mb-6" aria-hidden="true" />

        {/* Staff qualifications row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
          <QualificationBadge label="SMSTS" detail="Site Management Safety Training Scheme" />
          <QualificationBadge label="SSSTS" detail="Site Supervisor Safety Training Scheme" />
          <QualificationBadge label="NRSWA" detail="New Roads and Street Works Act" />
          <QualificationBadge label="Chapter 8" detail="Chapter 8 Traffic Management" />
          <QualificationBadge label="PA1/PA6" detail="Pesticide Application Certificates" />
          <QualificationBadge label="First Aid" detail="First Aid at Work Certification" />
          <QualificationBadge label="Plant Tickets" detail="CPCS / NPORS Plant Operations" />
          <QualificationBadge label="Water Safety" detail="Working Safely in Water Level 2" />
          <QualificationBadge label="Chainsaw &amp; Tree Work" detail="NPTC Chainsaw & Tree Work Certifications" />
        </div>
      </div>
    </section>
  );
}
