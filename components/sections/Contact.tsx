"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
      alert("Thank you for your message! I'll get back to you soon.")
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 bg-[#e8ebf2] text-[#0A1028]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Horizontal Layout: Title + Form on Left, Whitespace on Right */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Section Title + Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-[520px]"
            >
              {/* Section Header */}
              <div className="mb-12">
                <h2 className="text-5xl sm:text-6xl font-semibold text-[#0A1028] mb-2">Contact Us</h2>
                <div className="h-px w-24 bg-[#0A1028]/30"></div>
              </div>

              {/* Contact Form - Left Aligned */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two Column: First Name | Last Name */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#0A1028] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#0A1028]/20 focus:outline-none focus:border-[#0A1028] text-[#0A1028] placeholder:text-[#0A1028]/40"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#0A1028] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#0A1028]/20 focus:outline-none focus:border-[#0A1028] text-[#0A1028] placeholder:text-[#0A1028]/40"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0A1028] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#0A1028]/20 focus:outline-none focus:border-[#0A1028] text-[#0A1028] placeholder:text-[#0A1028]/40"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0A1028] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#0A1028]/20 focus:outline-none focus:border-[#0A1028] text-[#0A1028] placeholder:text-[#0A1028]/40"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0A1028] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-[#0A1028]/20 focus:outline-none focus:border-[#0A1028] text-[#0A1028] placeholder:text-[#0A1028]/40 resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#87CEEB] text-[#0A1028] rounded-full font-semibold text-lg hover:bg-[#7BB8D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mt-6"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Column: Empty whitespace */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
