import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function Chiropractors() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "Do chiropractors need a medical director?",
      answer: "While chiropractors operate independently within their scope of practice, a medical director can expand service offerings and ensure compliance when providing complementary medical services."
    },
    {
      question: "What services can a chiropractic clinic offer with a medical director?",
      answer: "With proper medical oversight, chiropractic clinics can offer additional services like physical therapy, rehabilitation services, pain management, and integrated wellness programs."
    },
    {
      question: "How does medical direction benefit a chiropractic practice?",
      answer: "Medical directors help expand service offerings, ensure regulatory compliance, facilitate insurance billing, and enable comprehensive patient care through medical integration."
    },
    {
      question: "What qualifications should a medical director for a chiropractic clinic have?",
      answer: "Medical directors should be licensed physicians with experience in physical medicine, rehabilitation, or pain management, and understand integrated healthcare approaches."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for Chiropractors" 
        subtitle="Expand Your Practice with Medical Oversight"
        backgroundImage="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Expand Your Chiropractic Practice</h2>
              <p className="text-gray-700 mb-6">
                Looking to grow your chiropractic practice by offering more to your patients? EliteUSMD can help you legally expand your services with proper medical director oversight.
              </p>
              <p className="text-gray-700 mb-6">
                If you're interested in introducing allergy testing, neurological assessments, or other diagnostic procedures, our team provides the structure and compliance support to make it happen.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-secondary">With EliteUSMD, Chiropractors Can:</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <span className="text-primary-dark">Offer expanded testing services</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <span className="text-primary-dark">Bill insurance appropriately and compliantly</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <span className="text-primary-dark">Enhance patient care while increasing practice revenue</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <p className="text-primary-dark mb-6">
              Our experienced team will walk you through every step of the setup process—ensuring full compliance with state regulations and payer requirements.
            </p>
            <p className="text-primary-dark">
              Ready to take your practice to the next level? Let's talk about how we can support your growth and help you unlock new revenue streams.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Expanded Services We Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Diagnostic Testing",
                  description: "Expand your diagnostic capabilities with advanced testing services"
                },
                {
                  title: "Medical Integration",
                  description: "Seamlessly integrate medical services into your practice"
                },
                {
                  title: "Insurance Billing",
                  description: "Maximize revenue through compliant insurance billing"
                },
                {
                  title: "Treatment Protocols",
                  description: "Implement comprehensive treatment protocols"
                },
                {
                  title: "Compliance Management",
                  description: "Ensure ongoing regulatory compliance"
                },
                {
                  title: "Practice Growth",
                  description: "Strategic support for practice expansion"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2 text-primary-dark">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
