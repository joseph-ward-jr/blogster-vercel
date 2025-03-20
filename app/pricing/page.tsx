import { CheckCircle, X } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import SectionContainer from "@/components/layout/SectionContainer"
import HeroSection from "@/components/sections/HeroSection"
import FAQSection from "@/components/sections/FAQSection"
import FAQItem from "@/components/ui/FAQItem"
import CTASection from "@/components/ui/CTASection"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Simple, Transparent <span class='text-[#FF6F61]'>Pricing</span>"
        description="Choose the plan that works best for your content needs. All plans include our core AI-powered content creation tools."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="#pricing-plans"
        secondaryButtonText="Contact Sales"
        secondaryButtonHref="/contact"
        imageSrc="/placeholder.svg?height=450&width=450"
        imageAlt="Pricing Plans"
      />

      <SectionContainer id="pricing-plans" className="py-16 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A365D]">
              Flexible Subscription Plans
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No hidden fees. No long-term commitments. Cancel anytime.
            </p>
          </div>

          <div className="inline-flex items-center rounded-full border border-gray-200 p-1 mt-8">
            <Button variant="ghost" className="rounded-full px-4 py-2 text-sm font-medium bg-white text-[#1A365D]">
              Monthly
            </Button>
            <Button className="rounded-full px-4 py-2 text-sm font-medium bg-[#1A365D] text-white">
              Annual (Save 20%)
            </Button>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Individual Plan */}
          <Card className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-[#1A365D]">Individual</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#1A365D]">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <CardDescription>Perfect for solo creators and small businesses.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>10 AI-generated blog posts/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>1 audience persona</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>Content calendar</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#1A365D] hover:bg-[#1A365D]/90 rounded-full h-12">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Business Plan */}
          <Card className="border border-[#FF6F61] relative rounded-3xl shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-4 py-2 text-xs font-medium rounded-bl-3xl rounded-tr-3xl">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-[#1A365D]">Business</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#1A365D]">$79</span>
                <span className="text-gray-500">/month</span>
              </div>
              <CardDescription>Ideal for growing businesses and marketing teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>30 AI-generated blog posts/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>3 audience personas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Content calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Team collaboration (up to 5 users)</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="h-5 w-5" />
                  <span>API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#FF6F61] hover:bg-[#FF6F61]/90 rounded-full h-12">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-[#1A365D]">Enterprise</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#1A365D]">$199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <CardDescription>For large teams and organizations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Unlimited AI-generated blog posts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Unlimited audience personas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Custom analytics dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Content calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>Team collaboration (unlimited users)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
                  <span>API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#1A365D] hover:bg-[#1A365D]/90 rounded-full h-12">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#1A365D] mb-4">Enterprise Solutions</h2>
            <p className="text-gray-600 mb-6">
              Need a custom solution for your organization? Our enterprise plans offer tailored features, dedicated
              support, and flexible pricing to meet your specific needs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1A365D]">Custom AI Training</h3>
                  <p className="text-gray-600">
                    Train our AI on your existing content to match your brand voice perfectly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1A365D]">Advanced Integrations</h3>
                  <p className="text-gray-600">Connect Blogster with your existing tools and workflows.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1A365D]">Dedicated Support</h3>
                  <p className="text-gray-600">Get priority support and a dedicated account manager.</p>
                </div>
              </li>
            </ul>
            <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full px-8">Contact Sales</Button>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-medium">Custom content volume</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-medium">Custom user roles & permissions</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-medium">Advanced security features</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-medium">Custom analytics & reporting</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-medium">Service level agreement (SLA)</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Custom onboarding & training</span>
                <CheckCircle className="h-5 w-5 text-[#FF6F61]" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <FAQSection title="Pricing FAQs">
        <FAQItem
          question="Can I change plans at any time?"
          answer="Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
          isOpen={true}
        />
        <FAQItem
          question="Is there a free trial available?"
          answer="Yes! We offer a 14-day free trial on all plans. No credit card required to start your trial."
        />
        <FAQItem
          question="What happens if I exceed my monthly content limit?"
          answer="If you reach your monthly content generation limit, you can either upgrade to a higher plan or wait until your next billing cycle when your limits reset. We'll notify you when you're approaching your limit."
        />
        <FAQItem
          question="Do you offer discounts for non-profits or educational institutions?"
          answer="Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information."
        />
        <FAQItem
          question="Can I cancel my subscription at any time?"
          answer="Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to Blogster until the end of your current billing period."
        />
      </FAQSection>

      <CTASection
        title="Ready to Transform Your Content Strategy?"
        description="Start your 14-day free trial today. No credit card required."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/signup"
        secondaryButtonText="Contact Sales"
        secondaryButtonHref="/contact"
        darkBackground
      />
    </PageLayout>
  )
}

