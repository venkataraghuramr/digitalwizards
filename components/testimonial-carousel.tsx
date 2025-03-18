"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "/placeholder.svg?height=200&width=200&text=SJ",
    quote:
      "Digital Wizards transformed our online presence completely. Their strategic approach to digital marketing helped us increase our leads by 150% in just three months.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, GrowthStartup",
    image: "/placeholder.svg?height=200&width=200&text=MC",
    quote:
      "Working with Digital Wizards has been a game-changer for our business. Their team is incredibly knowledgeable, responsive, and dedicated to our success.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "E-commerce Manager, StyleBoutique",
    image: "/placeholder.svg?height=200&width=200&text=ER",
    quote:
      "Our e-commerce sales have doubled since we started working with Digital Wizards. Their expertise in SEO and paid advertising has been invaluable to our growth.",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "COO, Enterprise Solutions",
    image: "/placeholder.svg?height=200&width=200&text=DT",
    quote:
      "Digital Wizards provides strategic insights that have helped us stay ahead of our competition. Their data-driven approach delivers real, measurable results.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 bg-background">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                    <p className="text-lg md:text-xl italic mb-4">{testimonial.quote}</p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted"}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg md:-translate-x-full"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg md:translate-x-full"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

