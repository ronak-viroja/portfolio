"use client"

export function BottomMarquee() {
  const text = "Enterprise Backend Systems • Microservices Architecture • Cloud Infrastructure • Automation & DevOps • Generative AI Innovation"
  const separator = "\t\t"
  const repeatedText = Array(1).fill(text).join(separator)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-3 bg-[#0A1028] text-white overflow-hidden border-t border-white/10">
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

