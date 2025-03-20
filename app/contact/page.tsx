import { Mail, Phone, MapPin } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import SectionContainer from "@/components/layout/SectionContainer"
import HeroSection from "@/components/sections/HeroSection"
import SectionHeading from "@/components/ui/SectionHeading"
import ContactForm from "@/components/forms/ContactForm"
import FAQItem from "@/components/ui/FAQItem"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Get in <span class='text-[#FF6F61]'>Touch</span>"
        description="Have questions about Blogster? We're here to help. Reach out to our team using the form below."
        primaryButtonText="Contact Sales"
        primaryButtonHref="#contact-form"
        secondaryButtonText="View FAQs"
        secondaryButtonHref="#faqs"
        imageSrc="/placeholder.svg?height=450&width=450"
        imageAlt="Contact Us"
      />

      <SectionContainer id="contact-form">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Contact Information"
              description="We'd love to hear from you. Here's how you can reach us."
              centered={false}
            />
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6F61]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#FF6F61]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Email Us</h3>
                  <p className="text-gray-600">support@blogster.com</p>
                  <p className="text-gray-600">sales@blogster.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6F61]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#FF6F61]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6F61]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#FF6F61]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Visit Us</h3>
                  <p className="text-gray-600">123 Tech Lane</p>
                  <p className="text-gray-600">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you as soon as possible."
              centered={false}
            />
            <ContactForm className="mt-8" />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="faqs" className="bg-gray-50 rounded-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about Blogster."
        />
        <div className="max-w-3xl mx-auto mt-12">
          <FAQItem
            question="What is Blogster and how does it work?"
            answer="Blogster is an AI-powered content creation platform that helps businesses and creators produce high-quality blog content efficiently. Our platform uses advanced AI to generate content tailored to your specific audience and brand voice."
            isOpen={true}
          />
          <FAQItem
            question="How does the AI content generation work?"
            answer="Our AI analyzes your inputs, audience personas, and content goals to generate relevant, engaging content. You can then edit and refine this content to match your exact needs. The AI learns from your edits over time to better match your style."
          />
          <FAQItem
            question="Can I try Blogster before subscribing?"
            answer="Yes! We offer a 14-day free trial that gives you full access to all features. No credit card required to start your trial."
          />
          <FAQItem
            question="What payment methods do you accept?"
            answer="We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For enterprise plans, we can also arrange alternative payment methods."
          />
          <FAQItem
            question="How do I cancel my subscription?"
            answer="You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to Blogster until the end of your current billing period."
          />
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full border-[#1A365D] text-[#1A365D]" asChild>
            <a href="/faq">View All FAQs</a>
          </Button>
        </div>
      </SectionContainer>
    </PageLayout>
  )
}

