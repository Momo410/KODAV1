"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { MapPin, Mail, Clock, CheckCircle } from "lucide-react"

const services = [
  "Studio Time",
  "Unlimited Editing",
  "Ad Creation",
  "AssetsLab",
  "BrandLab",
  "SiteLab",
  "VideoSalesLab",
  "ExpansionLab",
  "Full Package",
  "Not Sure Yet",
]

const budgets = ["$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+", "Let's Discuss"]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h1 className="h1 text-foreground text-balance max-w-3xl mx-auto">
            Let's build your <span className="text-primary">content empire</span>
          </h1>
          <p className="mt-6 body-text text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours. No spam, no pressure—just a real
            conversation about your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="p-12 bg-background rounded-2xl border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="h3 text-foreground mb-4">Message Received</h3>
                  <p className="body-text text-muted-foreground max-w-md mx-auto">
                    Thanks for reaching out. We'll review your info and get back to you within 24 hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-background rounded-2xl border border-border space-y-8">
                  <div>
                    <h3 className="h3 text-foreground mb-6">Tell us about yourself</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="h3 text-foreground mb-6">Tell us about your business</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="https://yoursite.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget.toLowerCase().replace(/\s+/g, "-")}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals *</Label>
                    <Textarea
                      id="message"
                      placeholder="What are you looking to achieve? What's your biggest challenge right now with content?"
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral">How did you hear about us?</Label>
                    <Input id="referral" placeholder="Referral, social media, search, etc." />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Submit Inquiry
                  </button>

                  <p className="caption text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from PodLab. We respect your privacy
                    and will never spam you.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="p-8 bg-background rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Studio Location</p>
                      <p className="text-sm text-muted-foreground">Las Vegas, NV</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@podlablv.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      1
                    </span>
                    <p className="text-sm text-muted-foreground">
                      We review your submission and research your business
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      2
                    </span>
                    <p className="text-sm text-muted-foreground">We reach out to schedule a 30-minute discovery call</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      3
                    </span>
                    <p className="text-sm text-muted-foreground">
                      On the call, we map out your goals and recommend a path forward
                    </p>
                  </li>
                </ol>
              </div>

              <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-sm text-foreground font-medium mb-2">Limited Availability</p>
                <p className="text-sm text-muted-foreground">
                  We only take on a handful of new clients each month to ensure quality. If there's a waitlist, we'll
                  let you know upfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
