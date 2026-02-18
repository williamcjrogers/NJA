import type { Metadata } from "next";

const SITE_NAME = "Nicolas James Environmental";
const SITE_URL = "https://nicolasjames.co.uk";
const DEFAULT_DESCRIPTION =
  "Specialist environmental services for critical infrastructure. Vegetation management, arboriculture, and grounds maintenance for utilities, local authorities, and infrastructure contractors.";

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = path === "" ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
    },
    alternates: {
      canonical: url,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
