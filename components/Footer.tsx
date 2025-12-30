import { Linkedin, MapPin, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-[#0A1028] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Left: Location */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Bangalore, India</span>
              </div>
            </div>

            {/* Center: Connect Section */}
            <div className="space-y-4 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Let's Connect</h4>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#87CEEB] text-[#0A1028] rounded-full font-semibold hover:bg-[#7BB8D4] transition-colors group"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Quick Links */}
            <div className="space-y-4 md:ml-auto">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                <a href="/#about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="/#experience" className="text-white/80 hover:text-white transition-colors text-sm">
                  Experience
                </a>
                <a href="/#education" className="text-white/80 hover:text-white transition-colors text-sm">
                  Education
                </a>
                <a href="/#achievements" className="text-white/80 hover:text-white transition-colors text-sm">
                  Achievements
                </a>
                <a href="/#contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
