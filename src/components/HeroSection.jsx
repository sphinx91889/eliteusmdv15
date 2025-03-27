import React from 'react'
import { Link } from 'react-router-dom'
import VideoBackground from './VideoBackground'
import TypewriterText from './TypewriterText'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <VideoBackground />
      <div className="absolute bottom-24 left-0 z-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-[600px]">
            <div className="backdrop-blur-md bg-black/30 p-8 rounded-xl border border-white/10 shadow-2xl">
              <TypewriterText 
                text="Nationwide Medical Director & Compliance Services for Med Spas, Weight Loss Clinics, Telehealth & More" 
                speed={50} 
              />
              <p className="text-xl text-white/90 mb-8">
                Expert medical oversight and compliance support for healthcare practices across the United States. From aesthetic clinics to mobile health services, we connect you with qualified medical directors.
              </p>
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg inline-block transition-colors"
              >
                Find Your Medical Director
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
