import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Target, BarChart3, Check } from "lucide-react"
import { getUrl } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Ad Creation",
  description:
    "Direct response video ads built to stop the scroll and drive action. Strategy, scripting, filming, and editing included.",
  openGraph: {
    title: "Ad Creation | PodLab",
    description:
      "Direct response video ads built to stop the scroll and drive action. Strategy, scripting, filming, and editing included.",
    url: getUrl("/ads"),
    images: [{ url: getUrl("/opengraph-image.png"), width: 1200, height: 630, alt: "PodLab Ads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creation | PodLab",
    description:
      "Direct response video ads built to stop the scroll and drive action. Strategy, scripting, filming, and editing included.",
    images: [getUrl("/opengraph-image.png")],
    creator: "@podlab",
  },
}

const adTypes = [
  { title: "Ad Type 1", description: "Description for Ad Type 1", icon: ArrowRight },
  { title: "Ad Type 2", description: "Description for Ad Type 2", icon: Target },
  { title: "Ad Type 3", description: "Description for Ad Type 3", icon: BarChart3 },
]

const packages = [
  {
    name: "Package 1",
    price: "$100",
    description: "Description for Package 1",
    includes: ["Item 1", "Item 2"],
    popular: false,
  },
  {
    name: "Package 2",
    price: "$200",
    description: "Description for Package 2",
    includes: ["Item 1", "Item 2", "Item 3"],
    popular: true,
  },
  {
    name: "Package 3",
    price: "$300",
    description: "Description for Package 3",
    includes: ["Item 1", "Item 2", "Item 3", "Item 4"],
    popular: false,
  },
]

const process = [
  { step: "1", title: "Step 1", description: "Description for Step 1" },
  { step: "2", title: "Step 2", description: "Description for Step 2" },
  { step: "3", title: "Step 3", description: "Description for Step 3" },
  { step: "4", title: "Step 4", description: "Description for Step 4" },
  { step: "5", title: "Step 5", description: "Description for Step 5" },
]

export default function AdsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">Ad Creation</p>
            <h1 className="h1 text-foreground">
              Video ads that <span className="text-primary">actually convert.</span>
            </h1>
            <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
              Direct response video ads built to stop the scroll and drive action. We handle creative strategy,
              scripting, filming, and editing—you get ads that make money.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/podlablv/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Your Ads Made
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="h2 text-foreground">Bad creative is bleeding your ad budget dry</h2>
              <p className="mt-6 subheading text-muted-foreground">
                You can have the best targeting in the world, but if your creative doesn't stop the scroll, you're just
                burning money. Most founders either run the same tired ad until it dies, or waste time creating content
                that never converts.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">The Solution</p>
              <h2 className="h2 text-foreground">A constant stream of winning creatives</h2>
              <p className="mt-6 subheading text-muted-foreground">
                We produce high-volume, high-quality video ads designed for testing. Multiple hooks, multiple angles,
                multiple formats—so you always have fresh creative to scale what's working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What We Deliver</p>
            <h2 className="h2 text-foreground">Ads built to perform, not just look pretty</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {adTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="h2 text-foreground">From strategy to scale</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative p-6 bg-background rounded-xl border border-border">
                <span className="text-4xl font-bold text-primary">{step.step}</span>
                <h3 className="h3 text-foreground mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Packages</p>
            <h2 className="h2 text-foreground">Choose your creative volume</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-8 bg-card rounded-2xl border ${pkg.popular ? "border-2 border-primary relative" : "border-border"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="h3 text-foreground">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mt-4">{pkg.description}</p>

                <ul className="mt-6 space-y-3">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full mt-8 text-center block ${pkg.popular ? "btn-primary" : "btn-secondary"}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-foreground text-balance">Ready to stop wasting ad spend on bad creative?</h2>
          <p className="mt-6 subheading text-muted-foreground max-w-2xl mx-auto">
            Let's build ads that actually make you money. Book a creative strategy call.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Book Creative Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
