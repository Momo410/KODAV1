import type { Metadata } from "next"
import type { ReactNode } from "react"

const ogImage = "/og-image.png"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
  openGraph: {
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
    url: "https://podlab.com/contact",
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
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
    images: [ogImage],
    creator: "@podlab",
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
