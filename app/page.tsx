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
