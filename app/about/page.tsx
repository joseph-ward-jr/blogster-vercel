import Image from "next/image"
import { Zap, Heart, Users, Target } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import SectionContainer from "@/components/layout/SectionContainer"
import HeroSection from "@/components/sections/HeroSection"
import SectionHeading from "@/components/ui/SectionHeading"
import IconBox from "@/components/ui/IconBox"
import CTASection from "@/components/ui/CTASection"

export default function AboutPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Our Mission: <span class='text-[#FF6F61]'>Empowering</span> Content Creators"
        description="At Blogster, we're dedicated to making high-quality content creation accessible to everyone through the power of AI."
        primaryButtonText="Join Our Team"
        primaryButtonHref="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
        imageSrc="/placeholder.svg?height=450&width=450"
        imageAlt="Blogster Team"
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#1A365D] mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Blogster was founded in 2021 by a team of content creators and AI specialists who recognized a
                significant gap in the market: while AI was revolutionizing many industries, content creation remained
                largely untouched by these advancements.
              </p>
              <p>
                Our founders experienced firsthand the challenges of consistently producing high-quality content while
                managing all the other aspects of running a business. They envisioned a platform that would harness the
                power of AI to make content creation more efficient without sacrificing quality.
              </p>
              <p>
                After months of development and testing, Blogster was born – a platform designed to empower creators of
                all sizes to produce exceptional content with unprecedented efficiency.
              </p>
              <p>
                Today, Blogster serves thousands of customers worldwide, from solo entrepreneurs to enterprise marketing
                teams, all united by the goal of creating better content in less time.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gray-50 p-6 shadow-sm">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50 rounded-3xl">
        <SectionHeading title="Our Values" description="These core principles guide everything we do at Blogster." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <IconBox
            icon={<Zap className="h-8 w-8 text-[#FF6F61]" />}
            title="Innovation"
            description="We constantly push the boundaries of what's possible with AI and content creation."
          />
          <IconBox
            icon={<Heart className="h-8 w-8 text-[#FF6F61]" />}
            title="Quality"
            description="We're committed to helping our users create content that stands out for its excellence."
          />
          <IconBox
            icon={<Users className="h-8 w-8 text-[#FF6F61]" />}
            title="Accessibility"
            description="We believe powerful content tools should be accessible to creators of all sizes."
          />
          <IconBox
            icon={<Target className="h-8 w-8 text-[#FF6F61]" />}
            title="Customer Focus"
            description="We build our product based on real user needs and feedback."
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading title="Meet Our Team" description="The passionate people behind Blogster." />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 1"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">Alex Johnson</h3>
            <p className="text-[#FF6F61] font-medium">CEO & Co-Founder</p>
            <p className="text-gray-600 mt-2">
              Former content marketer with a passion for AI and making content creation more accessible.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 2"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">Sophia Chen</h3>
            <p className="text-[#FF6F61] font-medium">CTO & Co-Founder</p>
            <p className="text-gray-600 mt-2">
              AI specialist with a background in natural language processing and machine learning.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 3"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">Marcus Williams</h3>
            <p className="text-[#FF6F61] font-medium">Head of Product</p>
            <p className="text-gray-600 mt-2">
              Product leader focused on creating intuitive user experiences that solve real problems.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 4"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">Olivia Martinez</h3>
            <p className="text-[#FF6F61] font-medium">Head of Marketing</p>
            <p className="text-gray-600 mt-2">Marketing strategist with experience in SaaS and content marketing.</p>
          </div>

          {/* Team Member 5 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 5"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">James Kim</h3>
            <p className="text-[#FF6F61] font-medium">Lead Engineer</p>
            <p className="text-gray-600 mt-2">
              Full-stack developer with a focus on building scalable and reliable systems.
            </p>
          </div>

          {/* Team Member 6 */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 6"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D]">Emma Thompson</h3>
            <p className="text-[#FF6F61] font-medium">Customer Success</p>
            <p className="text-gray-600 mt-2">Dedicated to ensuring customers get the most value from Blogster.</p>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Join Us on Our Mission"
        description="We're always looking for talented individuals to join our team."
        primaryButtonText="View Open Positions"
        primaryButtonHref="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
        darkBackground
      />
    </PageLayout>
  )
}

