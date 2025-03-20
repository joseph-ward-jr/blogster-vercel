import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/sections/HeroSection"
import FAQSection from "@/components/sections/FAQSection"
import FAQItem from "@/components/ui/FAQItem"
import CTASection from "@/components/ui/CTASection"

export default function FAQPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Frequently Asked <span class='text-[#FF6F61]'>Questions</span>"
        description="Find answers to common questions about Blogster. Can't find what you're looking for? Contact our support team."
        primaryButtonText="Contact Support"
        primaryButtonHref="/contact"
        imageSrc="/placeholder.svg?height=450&width=450"
        imageAlt="FAQ"
      />

      <FAQSection title="Getting Started">
        <FAQItem
          question="What is Blogster and how does it work?"
          answer="Blogster is an AI-powered content creation platform that helps businesses and creators produce high-quality blog content efficiently. Our platform uses advanced AI to generate content tailored to your specific audience and brand voice."
          isOpen={true}
        />
        <FAQItem
          question="How do I sign up for Blogster?"
          answer="Signing up is easy! Just click the 'Sign Up' button in the top right corner of our website, enter your email address and create a password. You can then choose your subscription plan or start with a free trial."
        />
        <FAQItem
          question="Can I try Blogster before subscribing?"
          answer="Yes! We offer a 14-day free trial that gives you full access to all features. No credit card required to start your trial."
        />
        <FAQItem
          question="Do I need technical knowledge to use Blogster?"
          answer="Not at all. Blogster is designed to be user-friendly and intuitive. If you can use a word processor, you can use Blogster. We also provide comprehensive documentation and support to help you get started."
        />
      </FAQSection>

      <FAQSection title="Features & Functionality">
        <FAQItem
          question="How does the AI content generation work?"
          answer="Our AI analyzes your inputs, audience personas, and content goals to generate relevant, engaging content. You can then edit and refine this content to match your exact needs. The AI learns from your edits over time to better match your style."
        />
        <FAQItem
          question="Can I customize the AI-generated content?"
          answer="While our AI creates high-quality initial drafts, you have full control to edit, refine, and customize the content to match your exact requirements and brand voice."
        />
        <FAQItem
          question="What types of content can Blogster help me create?"
          answer="Blogster can help you create various types of blog content, including how-to guides, listicles, thought leadership articles, product reviews, industry news analysis, and more. Our platform is versatile and can adapt to different content styles and topics."
        />
        <FAQItem
          question="How do audience personas work in Blogster?"
          answer="Audience personas help you target your content to specific reader segments. In Blogster, you can create detailed personas with demographics, interests, pain points, and goals. The AI then uses these personas to tailor content that resonates with your target audience."
        />
      </FAQSection>

      <FAQSection title="Pricing & Billing">
        <FAQItem
          question="What are your subscription plans and pricing?"
          answer="We offer three main plans: Individual ($29/month), Business ($79/month), and Enterprise ($199/month). Each plan offers different features and content generation limits. You can view detailed plan information on our Pricing page."
        />
        <FAQItem
          question="What payment methods do you accept?"
          answer="We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For enterprise plans, we can also arrange alternative payment methods."
        />
        <FAQItem
          question="Can I change my subscription plan later?"
          answer="Yes, you can upgrade or downgrade your subscription at any time from your account settings. Changes to your plan will take effect at the start of your next billing cycle."
        />
        <FAQItem
          question="How do I cancel my subscription?"
          answer="You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to Blogster until the end of your current billing period."
        />
      </FAQSection>

      <FAQSection title="Account Management">
        <FAQItem
          question="Can multiple team members use the same account?"
          answer="Yes, our Business and Enterprise plans support multiple team members with different permission levels. You can add team members from your account settings."
        />
        <FAQItem
          question="How do I reset my password?"
          answer="You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password."
        />
        <FAQItem
          question="Is my data secure with Blogster?"
          answer="Yes, we take data security very seriously. We use industry-standard encryption and security practices to protect your data. You can read more about our security measures in our Privacy Policy."
        />
        <FAQItem
          question="Can I export my content from Blogster?"
          answer="Yes, you can export your content in various formats, including HTML, Markdown, and plain text. This makes it easy to use your content on your website or other platforms."
        />
      </FAQSection>

      <CTASection
        title="Still Have Questions?"
        description="Our support team is here to help. Reach out to us and we'll get back to you as soon as possible."
        primaryButtonText="Contact Support"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        darkBackground
      />
    </PageLayout>
  )
}

