import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SystemSection } from "@/components/home/system-section"
import { WhyPodlabSection } from "@/components/home/why-podlab-section"
import { FeaturedVideoSection } from "@/components/home/featured-video-section"
import { SocialProofSection } from "@/components/home/social-proof-section"
import { DifferenceSection } from "@/components/home/difference-section"
import { FounderStorySection } from "@/components/home/founder-story-section"
import { FinalCTASection } from "@/components/home/final-cta-section"
import type { Metadata } from "next"

const ogImage = "/og-image.png"

export const metadata: Metadata = {
  title: {
    absolute: "PodLab | Record Once. Sell Forever.",
  },
  description:
    "Premium podcast and video production studio in Las Vegas. Transform your expertise into evergreen content that builds trust and drives sales 24/7.",
  openGraph: {
    title: "PodLab | Record Once. Sell Forever.",
    description:
      "Premium podcast and video production studio in Las Vegas. Transform your expertise into evergreen content that builds trust and drives sales 24/7.",
    url: "https://podlab.com",
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
    title: "PodLab | Record Once. Sell Forever.",
    description:
      "Premium podcast and video production studio in Las Vegas. Transform your expertise into evergreen content that builds trust and drives sales 24/7.",
    images: [ogImage],
    creator: "@podlab",
  },
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <WhyPodlabSection />
      <FeaturedVideoSection />
      <SocialProofSection />
      <DifferenceSection />
      <FounderStorySection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
