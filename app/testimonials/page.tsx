import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import SectionContainer from "@/components/layout/SectionContainer"
import HeroSection from "@/components/sections/HeroSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import TestimonialCard from "@/components/ui/TestimonialCard"
import SectionHeading from "@/components/ui/SectionHeading"
import CTASection from "@/components/ui/CTASection"

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <HeroSection
        title="What Our <span class='text-[#FF6F61]'>Customers</span> Say"
        description="Join hundreds of content creators and businesses who have transformed their content strategy with Blogster."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="See Pricing"
        secondaryButtonHref="/pricing"
        imageSrc="/placeholder.svg?height=450&width=450"
        imageAlt="Happy Customers"
      />

      <TestimonialsSection
        title="Featured Testimonials"
        description="Hear from our satisfied customers about how Blogster has transformed their content strategy."
      >
        <TestimonialCard
          quote="Blogster has revolutionized our content strategy. We've seen a 40% increase in engagement since implementing their AI tools."
          name="Sarah Johnson"
          role="Marketing Director"
          rating={5}
        />
        <TestimonialCard
          quote="As a solo entrepreneur, Blogster has been a game-changer. I can now produce professional content in a fraction of the time."
          name="Michael Chen"
          role="Solo Entrepreneur"
          rating={5}
        />
        <TestimonialCard
          quote="The persona management feature has transformed how we target content. Our conversion rates have improved by 25% in just two months."
          name="Emily Rodriguez"
          role="Content Team Lead"
          rating={5}
        />
        <TestimonialCard
          quote="I was skeptical about AI-generated content, but Blogster changed my mind. The quality is exceptional, and it saves me hours each week."
          name="David Kim"
          role="Freelance Writer"
          rating={5}
        />
        <TestimonialCard
          quote="Our small marketing team can now produce twice the content with the same resources. Blogster has been a tremendous asset."
          name="Jessica Patel"
          role="Marketing Manager"
          rating={5}
        />
        <TestimonialCard
          quote="The analytics dashboard gives us insights we never had before. We're making more informed content decisions now."
          name="Robert Wilson"
          role="Digital Strategist"
          rating={5}
        />
      </TestimonialsSection>

      <SectionContainer className="bg-gray-50 rounded-3xl">
        <SectionHeading
          title="Case Study: TechNova"
          description="See how TechNova increased their blog traffic by 150% in just three months with Blogster."
        />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="TechNova Case Study"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1A365D]">The Challenge</h3>
            <p className="text-gray-600">
              TechNova, a growing SaaS company, was struggling to maintain a consistent blog schedule and create content
              that resonated with their technical audience.
            </p>
            <h3 className="text-2xl font-bold text-[#1A365D]">The Solution</h3>
            <p className="text-gray-600">
              Using Blogster's AI content generation and audience persona tools, TechNova created a targeted content
              strategy that addressed their audience's specific pain points.
            </p>
            <h3 className="text-2xl font-bold text-[#1A365D]">The Results</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 150% increase in blog traffic</li>
              <li>• 45% improvement in time-on-page</li>
              <li>• 32% increase in lead generation</li>
              <li>• 4x faster content production</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading title="Trusted by Companies of All Sizes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 1" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 2" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 3" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 4" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 5" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 6" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 7" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image src="/placeholder.svg?height=80&width=160" alt="Company Logo 8" width={160} height={80} />
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Join Our Success Stories"
        description="Transform your content strategy with Blogster and see the results for yourself."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="Contact Sales"
        secondaryButtonHref="/contact"
        darkBackground
      />
    </PageLayout>
  )
}

