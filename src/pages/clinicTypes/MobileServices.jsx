import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function MobileServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "What oversight does a medical director provide for mobile medical services?",
      answer: "Medical directors ensure quality care delivery in mobile settings, establish protocols for remote services, and maintain compliance with healthcare regulations across service areas."
    },
    {
      question: "How does medical direction work in telehealth?",
      answer: "Medical directors help establish telemedicine protocols, oversee virtual care delivery, ensure HIPAA compliance, and maintain quality standards in remote healthcare delivery."
    },
    {
      question: "What qualifications are needed for mobile/telehealth medical directors?",
      answer: "Medical directors should be licensed physicians with experience in mobile healthcare and telemedicine, understanding of remote care delivery, and knowledge of digital health regulations."
    },
    {
      question: "How are quality standards maintained in mobile and telehealth services?",
      answer: "Through regular protocol reviews, ongoing staff training, quality assurance programs, and continuous monitoring of patient outcomes."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for Mobile & Telehealth Services" 
        subtitle="Expert Medical Oversight for Remote Healthcare Delivery"
        backgroundImage="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Mobile Healthcare Excellence</h2>
              <p className="text-gray-700 mb-6">
                Our medical directors bring extensive experience in mobile healthcare and telehealth services, ensuring your remote healthcare delivery meets the highest standards of patient care while maintaining compliance with healthcare regulations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Telehealth Support</h2>
              <p className="text-gray-700 mb-6">
                Get expert guidance on developing and maintaining effective mobile medical services and telehealth programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering optimal patient outcomes.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Our Mobile & Telehealth Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Mobile Clinics",
                  description: "Medical oversight for mobile healthcare delivery units"
                },
                {
                  title: "Telehealth Services",
                  description: "Direction of virtual healthcare programs and protocols"
                },
                {
                  title: "Remote Monitoring",
                  description: "Oversight of remote patient monitoring systems"
                },
                {
                  title: "Digital Health",
                  description: "Management of digital health platforms and tools"
                },
                {
                  title: "Mobile Diagnostics",
                  description: "Supervision of mobile diagnostic services"
                },
                {
                  title: "Virtual Care",
                  description: "Development of virtual care delivery protocols"
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
