import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import RelatedArticles from '../../components/RelatedArticles';
import FAQSection from '../../components/FAQSection';

export default function MedicalDirectorRole() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-52 md:pt-32 pb-16">
      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-24">
            <h3 className="text-base md:text-lg font-semibold mb-4">Contents</h3>
            <nav className="space-y-2 text-sm md:text-base">
              <a href="#overview" className="block text-gray-600 hover:text-primary-dark">Overview</a>
              <a href="#daily-tasks" className="block text-gray-600 hover:text-primary-dark">Daily Tasks</a>
              <a href="#industry-variations" className="block text-gray-600 hover:text-primary-dark">Industry Variations</a>
              <a href="#compliance" className="block text-gray-600 hover:text-primary-dark">Compliance and Legal</a>
              <a href="#support" className="block text-gray-600 hover:text-primary-dark">EliteUSMD Support</a>
              <a href="#faqs" className="block text-gray-600 hover:text-primary-dark">FAQs</a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-9">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Understanding Medical Director Responsibilities: What You Need to Know</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>Published 03/14/2024</span>
              <span>•</span>
              <span>Written by EliteUSMD Team</span>
            </div>
          </div>

          {/* Overview Section */}
          <div id="overview" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Overview: Key Responsibilities of a Medical Director</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                A medical director plays a crucial role in healthcare facilities, serving as the critical link between clinical staff and administrative leadership. Their primary responsibility is to ensure that all medical practices within the facility are not only safe and effective but also fully compliant with state and federal healthcare regulations. Learn more about <Link to="/services/medical-oversight" className="text-primary-dark hover:text-primary underline">medical oversight requirements</Link>.
              </p>
              <p>
                In a medical spa setting, the role of a medical director extends beyond traditional medical oversight. They are often involved in developing treatment protocols for aesthetic and wellness services, such as injectables, laser therapies, and advanced skincare procedures. By collaborating closely with licensed aestheticians, nurse practitioners, and administrative staff, they help create a seamless experience for clients. Explore our <Link to="/services/training" className="text-primary-dark hover:text-primary underline">training services</Link>.
              </p>
              <p>
                In addition to clinical responsibilities, medical directors play a strategic role in shaping the direction of the healthcare facility. They contribute to strategic planning by assessing clinical programs, identifying areas for improvement, and supporting the introduction of new services or treatments. Learn about our <Link to="/services/device-consultations" className="text-primary-dark hover:text-primary underline">device consultation services</Link>.
              </p>
            </div>
          </div>

          {/* Daily Tasks Section */}
          <div id="daily-tasks" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Daily Tasks: From Compliance to Staff Management</h2>
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>The daily tasks of a medical director can vary widely depending on the setting but generally include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensuring Compliance: Staying updated with state and federal healthcare regulations</li>
                  <li>Staff Management: Overseeing clinical staff and providing training</li>
                  <li>Clinical Oversight: Reviewing treatment plans and monitoring care quality</li>
                  <li>Operational Management: Collaborating with administrative teams</li>
                  <li>Patient Safety and Quality Assurance: Implementing quality control measures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Variations Section */}
          <div id="industry-variations" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Industry Variations: Medspas vs. Clinical Settings</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                While the core responsibilities remain consistent, there are notable differences between working in a <Link to="/clinic-types/medical-spas" className="text-primary-dark hover:text-primary underline">medical spa</Link> versus a traditional clinical setting:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">In Medical Spas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Focus on aesthetic procedures</li>
                    <li>Collaboration with aestheticians</li>
                    <li>Marketing and business strategy</li>
                    <li>Non-invasive treatment oversight</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">In Clinical Settings</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Focus on medical treatments</li>
                    <li>Clinical staff management</li>
                    <li>Research and policy development</li>
                    <li>Stricter regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div id="compliance" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Compliance and Legal Obligations</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                A critical aspect of a medical director's role is ensuring compliance with healthcare laws and regulations. This includes maintaining proper documentation, adhering to state-specific requirements, and implementing safety protocols. Learn more about compliance requirements for <Link to="/services/medical-director/np" className="text-primary-dark hover:text-primary underline">nurse practitioners</Link> and <Link to="/services/medical-director/pa" className="text-primary-dark hover:text-primary underline">physician assistants</Link>.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Compliance Areas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Licensure and certification management</li>
                  <li>HIPAA compliance and patient privacy</li>
                  <li>Documentation and reporting requirements</li>
                  <li>Risk management protocols</li>
                  <li>Emergency response procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div id="support" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">How EliteUSMD Can Support Medical Directors</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                At EliteUSMD, we understand the complexities of being a medical director. Our tailored services offer support in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Compliance training and updates</li>
                <li>Staff management strategies</li>
                <li>Operational consulting</li>
                <li>Educational resources</li>
                <li>Networking opportunities</li>
                <li>Career coaching</li>
              </ul>
              <div className="bg-accent-sage p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4">Ready to Excel in Your Role?</h3>
                <p className="mb-4">
                  Take advantage of our comprehensive support services and navigate your responsibilities with confidence.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div id="faqs" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
            <FAQSection />
          </div>

          {/* Related Articles */}
          <RelatedArticles currentArticleId="medical-director-role" />
        </main>
      </div>
    </div>
  );
}
