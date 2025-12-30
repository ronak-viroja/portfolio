"use client"

export function SectionDivider() {
  const text = "Enterprise Backend Systems • Microservices Architecture • Cloud Infrastructure • Automation & DevOps • Generative AI Innovation"
  const separator = "\t\t"
  const repeatedText = Array(1).fill(text).join(separator)

  return (
    <div className="py-3 bg-[#0A1028] text-white overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
        <span className="text-sm font-light tracking-wider text-white/80 mr-16">
          {repeatedText}
        </span>
      </div>
    </div>
  )
}
