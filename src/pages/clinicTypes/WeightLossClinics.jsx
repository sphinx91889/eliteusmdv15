import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function WeightLossClinics() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "What role does a medical director play in a weight loss clinic?",
      answer: "A medical director oversees all medical aspects of the weight loss program, including treatment protocols, medication management, and patient safety guidelines. They ensure all services are provided within appropriate medical standards."
    },
    {
      question: "Can a weight loss clinic prescribe medications without a medical director?",
      answer: "No, weight loss clinics typically need a medical director to prescribe and oversee weight loss medications. This ensures proper medical supervision and patient safety."
    },
    {
      question: "What qualifications are required for a weight loss clinic medical director?",
      answer: "Medical directors should be licensed physicians (MD/DO) with experience in weight management and understanding of metabolic health, nutrition, and weight loss medications."
    },
    {
      question: "How often should the medical director review patient charts?",
      answer: "Chart review frequency varies by state requirements and clinic needs, but typically occurs regularly to ensure proper patient care and protocol adherence."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for Weight Loss Clinics" 
        subtitle="Expert Medical Oversight for Weight Management Programs"
        backgroundImage="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Weight Management Expertise</h2>
              <p className="text-gray-700 mb-6">
                Our medical directors bring extensive experience in weight management and metabolic health, ensuring your clinic provides safe and effective weight loss solutions. They oversee medication protocols, treatment plans, and patient safety measures.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Comprehensive Program Support</h2>
              <p className="text-gray-700 mb-6">
                Get expert guidance on developing and maintaining effective weight loss programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering optimal patient outcomes.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Our Services Include</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Medical Weight Loss",
                  description: "Oversight of prescription medication programs and medical weight loss protocols"
                },
                {
                  title: "Nutritional Guidance",
                  description: "Development and supervision of medical nutrition therapy programs"
                },
                {
                  title: "Metabolic Testing",
                  description: "Medical supervision for metabolic rate testing and analysis"
                },
                {
                  title: "Body Composition",
                  description: "Oversight of body composition analysis and tracking"
                },
                {
                  title: "Treatment Planning",
                  description: "Development of individualized weight management protocols"
                },
                {
                  title: "Program Compliance",
                  description: "Ensuring adherence to medical and regulatory standards"
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
