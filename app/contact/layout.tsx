import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
  openGraph: {
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",
    url: getUrl("/contact"),

  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | PodLab",
    description: "Get in touch with PodLab about studio time, editing, ads, or the Growth System.",

    creator: "@podlab",
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
