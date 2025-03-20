import type { Metadata } from "next"
import { constructMetadata } from "@/components/seo/Metadata"
import { Zap, Users, BarChart3, Layout, CheckCircle } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesGrid from "@/components/sections/FeaturesGrid"
import FeatureSection from "@/components/sections/FeatureSection"
import FeatureCard from "@/components/ui/FeatureCard"
import CTASection from "@/components/ui/CTASection"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = constructMetadata({
  title: "Features - AI Content Creation Tools",
  description:
    "Discover Blogster's powerful features including AI content generation, audience personas, and analytics.",
  keywords: ["AI content generation", "audience personas", "content analytics", "blog features"],
})

export default function FeaturesPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Powerful Features to <span class='text-[#FF6F61]'>Transform</span> Your Content Strategy"
        description="Discover how Blogster's AI-powered tools help you create better content in less time."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="See Pricing"
        secondaryButtonHref="/pricing"
      />

      <FeaturesGrid
        title="What Sets Us Apart"
        description="Our platform combines powerful AI with intuitive design to revolutionize your content creation process."
      >
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-[#FF6F61]" />}
          title="AI-Powered Content"
          description="Our advanced AI algorithms help you craft compelling blog posts tailored to your specific audience."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-[#FF6F61]" />}
          title="Persona Management"
          description="Create detailed audience personas to target your content effectively to different segments."
        />
        <FeatureCard
          icon={<BarChart3 className="h-8 w-8 text-[#FF6F61]" />}
          title="Data-Driven Insights"
          description="Track your content performance with comprehensive analytics and real-time metrics."
        />
        <FeatureCard
          icon={<Layout className="h-8 w-8 text-[#FF6F61]" />}
          title="Intuitive Interface"
          description="Our modern, user-friendly platform makes content creation accessible to everyone."
        />
      </FeaturesGrid>

      <FeatureSection
        title="AI-Powered Content Creation"
        description="Generate high-quality blog posts tailored to your audience in minutes, not hours. Our advanced AI understands your brand voice and creates content that resonates with your readers."
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="AI Content Generation Interface"
      >
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Faster content creation</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Consistent quality</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Overcome writer's block</span>
          </li>
        </ul>
        <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full">Learn More</Button>
      </FeatureSection>

      <FeatureSection
        title="Know Your Audience Inside Out"
        description="Create detailed audience personas to target your content effectively. Understand your readers' needs, pain points, and preferences to create content that converts."
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="Audience Persona Management"
        reversed
      >
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Better targeting</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Increased engagement</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Higher conversion rates</span>
          </li>
        </ul>
        <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full">Learn More</Button>
      </FeatureSection>

      <FeatureSection
        title="Plan and Schedule with Ease"
        description="Organize your content strategy with our intuitive calendar interface. Plan your content in advance, schedule posts, and maintain a consistent publishing cadence."
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="Content Calendar Interface"
      >
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Consistent publishing</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Better planning</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Team coordination</span>
          </li>
        </ul>
        <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full">Learn More</Button>
      </FeatureSection>

      <FeatureSection
        title="Data-Driven Content Strategy"
        description="Track performance metrics to understand what resonates with your audience. Make informed decisions about your content strategy based on real data."
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="Analytics Dashboard"
        reversed
      >
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Performance insights</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>Content optimization</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
            <span>ROI tracking</span>
          </li>
        </ul>
        <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full">Learn More</Button>
      </FeatureSection>

      <CTASection
        title="Ready to Transform Your Content Strategy?"
        description="Join thousands of content creators who are already using Blogster to streamline their content creation process."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="See Pricing"
        secondaryButtonHref="/pricing"
        darkBackground
      />
    </PageLayout>
  )
}

