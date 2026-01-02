import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getUrl, ogImage } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Affiliate Program",
  description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
  openGraph: {
    title: "Affiliate Program | PodLab",
    description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
    url: getUrl("/affiliate"),
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "PodLab - Broadcasting Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Program | PodLab",
    description: "Earn 20% commission by referring founders to PodLab. Simple program with recurring revenue.",
    images: [ogImage],
    creator: "@podlab",
  },
}

export default function AffiliateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
