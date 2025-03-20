import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { constructMetadata } from "@/components/seo/Metadata"
import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/sections/HeroSection"
import FeatureCard from "@/components/ui/FeatureCard"
import FeatureSection from "@/components/sections/FeatureSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import TestimonialCard from "@/components/ui/TestimonialCard"
import CTASection from "@/components/ui/CTASection"
import SectionContainer from "@/components/layout/SectionContainer"
import SectionHeading from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Zap, Users, BarChart3, CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const metadata: Metadata = constructMetadata({
  title: "AI-Powered Content Creation Platform",
  description: "Transform your content strategy with Blogster's AI-powered tools for better blog content creation.",
  keywords: ["content creation", "AI writing", "blog platform", "content strategy"],
})

export default function HomePage() {
  return (
    <PageLayout className="pb-0">
      {/* Hero Section with Value Proposition */}
      <HeroSection
        title="Start your <span class='font-bold'>journey</span> with <span class='font-bold'>Blogster</span>"
        description="Create, publish, and grow your audience with AI-powered tools designed for modern content creators. Write better content in half the time with our advanced AI technology."
        primaryButtonText="Start Writing Free"
        primaryButtonHref="/signup"
        secondaryButtonText="See How It Works"
        secondaryButtonHref="/features"
      />

      {/* Features Section */}
      <SectionContainer className="py-20">
        <SectionHeading
          title="Features that <span class='gradient-text'>revolutionize</span> content creation"
          description="Our platform combines powerful AI with intuitive design to help you create better content faster."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="AI-Powered Writing"
            description="Generate high-quality blog posts tailored to your audience in minutes, not hours."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Audience Targeting"
            description="Create detailed audience personas to target your content effectively to different segments."
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8" />}
            title="Analytics Dashboard"
            description="Track your content performance with comprehensive analytics and real-time metrics."
          />
        </div>

        <div className="mt-16">
          <FeatureSection
            title="Write better content in half the time"
            description="Our AI understands your brand voice and creates content that resonates with your readers. No more staring at a blank page or spending hours on research."
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="AI Content Generation Interface"
          >
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Generate full blog posts in minutes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Customize tone and style to match your brand</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Overcome writer's block with AI assistance</span>
              </li>
            </ul>
            <GradientButton size="lg">Try AI Writer</GradientButton>
          </FeatureSection>
        </div>
      </SectionContainer>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <SectionContainer>
          <SectionHeading
            title="Loved by content creators worldwide"
            description="Join thousands of bloggers, marketers, and businesses who trust Blogster for their content needs."
          />

          <TestimonialsSection title="" columns={3} className="mt-12">
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
          </TestimonialsSection>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary-light">
              Read More Success Stories
            </Button>
          </div>
        </SectionContainer>
      </div>

      {/* Portfolio Section */}
      <SectionContainer className="py-20">
        <SectionHeading
          title="See what you can create with Blogster"
          description="Browse through examples of content created using our platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Example 1 */}
          <Card className="overflow-hidden border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video relative">
              <Image src="/placeholder.svg?height=200&width=400" alt="Blog example" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-gray-800">Tech Industry Insights</h3>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600">
                An in-depth analysis of emerging tech trends created with our AI research assistant.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-secondary hover:underline">
                View Example
              </Link>
            </CardFooter>
          </Card>

          {/* Example 2 */}
          <Card className="overflow-hidden border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video relative">
              <Image src="/placeholder.svg?height=200&width=400" alt="Blog example" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-gray-800">Lifestyle Blog Series</h3>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600">A collection of engaging lifestyle articles targeting millennial readers.</p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-secondary hover:underline">
                View Example
              </Link>
            </CardFooter>
          </Card>

          {/* Example 3 */}
          <Card className="overflow-hidden border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video relative">
              <Image src="/placeholder.svg?height=200&width=400" alt="Blog example" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-gray-800">E-commerce Product Descriptions</h3>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600">Compelling product descriptions that convert browsers into buyers.</p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-secondary hover:underline">
                View Example
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <GradientButton>Browse Content Gallery</GradientButton>
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-20">
        <SectionContainer>
          <SectionHeading
            title="Simple, transparent pricing"
            description="Choose the plan that works best for your content needs."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Basic Plan */}
            <Card className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Basic</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-800">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Perfect for individuals and small blogs.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>10 AI-generated posts/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>1 user account</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary-horizontal text-white hover:opacity-90 rounded-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-secondary rounded-3xl shadow-md hover:shadow-lg transition-all relative">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-xl rounded-tr-3xl">
                Popular
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Pro</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-800">$79</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Ideal for growing businesses and content teams.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>30 AI-generated posts/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>5 user accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary-horizontal text-white hover:opacity-90 rounded-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-800">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-2">For large teams and organizations.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Unlimited AI-generated posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Custom analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary-horizontal text-white hover:opacity-90 rounded-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <Link href="/pricing" className="text-secondary hover:underline">
              View full pricing details →
            </Link>
          </div>
        </SectionContainer>
      </div>

      {/* Final Call to Action */}
      <CTASection
        title="Ready to transform your content strategy?"
        description="Join thousands of content creators who are already using Blogster to streamline their content creation process."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/contact"
        darkBackground
        className="py-20"
      />
    </PageLayout>
  )
}

