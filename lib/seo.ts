import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
}): Metadata {
  const shareImage = image || site.shareImage;
  const absoluteTitle = `${title} | Eastward`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle,
      description,
      url: path,
      type: "website",
      siteName: site.name,
      images: [{ url: shareImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [shareImage],
    },
  };
}
