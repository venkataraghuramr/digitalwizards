import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactForm from "@/components/contact-form"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/90 via-primary to-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="inline-block px-4 py-1.5 text-xs font-medium bg-white/10 rounded-full backdrop-blur-sm">
                Digital Marketing Excellence
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Digital Presence with Digital Wizards
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                We craft digital experiences that captivate, convert, and create lasting impressions. Your vision, our
                expertise.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Digital Marketing Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Trusted by Industry Leaders</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                We've helped businesses of all sizes achieve their digital marketing goals.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="relative h-16 w-32 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={`/placeholder.svg?height=64&width=128&text=Client+${i}`}
                    alt={`Client ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Solutions That Drive Results</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive suite of digital marketing services tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Digital Strategy",
                description:
                  "Comprehensive digital strategies that align with your business goals and target audience.",
                icon: "🧠",
              },
              {
                title: "Web Development",
                description: "Custom websites that are visually stunning, responsive, and optimized for conversions.",
                icon: "💻",
              },
              {
                title: "SEO & Content",
                description:
                  "Data-driven SEO and content strategies that improve visibility and drive organic traffic.",
                icon: "📈",
              },
              {
                title: "Social Media",
                description: "Strategic social media management that builds brand awareness and engages your audience.",
                icon: "📱",
              },
              {
                title: "Paid Advertising",
                description: "Targeted paid advertising campaigns that maximize ROI and drive qualified leads.",
                icon: "🎯",
              },
              {
                title: "Analytics & Insights",
                description: "Comprehensive analytics and reporting that provide actionable insights for growth.",
                icon: "📊",
              },
            ].map((service, i) => (
              <Card key={i} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How We Create Digital Magic
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our proven process ensures we deliver exceptional results that exceed expectations.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Discovery & Strategy",
                    description:
                      "We start by understanding your business, goals, and target audience to develop a tailored strategy.",
                  },
                  {
                    title: "Design & Development",
                    description:
                      "Our creative team designs and develops digital solutions that align with your brand and objectives.",
                  },
                  {
                    title: "Implementation & Launch",
                    description:
                      "We implement the strategy, launch your digital assets, and ensure everything runs smoothly.",
                  },
                  {
                    title: "Analysis & Optimization",
                    description: "We continuously analyze performance and optimize for better results and ROI.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our Process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Case Studies</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how we've helped businesses like yours achieve remarkable results.
              </p>
            </div>
          </div>
          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="saas">SaaS</TabsTrigger>
              <TabsTrigger value="b2b">B2B</TabsTrigger>
            </TabsList>
            {["ecommerce", "saas", "b2b"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=${category.toUpperCase()}+${i}`}
                          alt={`Case Study ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{`${category.charAt(0).toUpperCase() + category.slice(1)} Client ${i}`}</CardTitle>
                        <CardDescription>
                          {category === "ecommerce"
                            ? "Increased online sales by 200% in 6 months"
                            : category === "saas"
                              ? "Reduced customer acquisition cost by 40%"
                              : "Generated 150+ qualified B2B leads per month"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {`We helped this ${category} business overcome challenges and achieve significant growth through our tailored digital marketing strategy.`}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/case-studies/${category}-${i}`}>Read Case Study</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Hear from our satisfied clients.
              </p>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Why Choose Us" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Digital Excellence, Delivered
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                We combine creativity, strategy, and technology to deliver exceptional digital experiences.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Results-Driven Approach",
                    description: "We focus on delivering measurable results that impact your bottom line.",
                  },
                  {
                    title: "Industry Expertise",
                    description:
                      "Our team brings years of experience across various industries and digital disciplines.",
                  },
                  {
                    title: "Innovative Solutions",
                    description: "We stay ahead of digital trends to provide cutting-edge solutions.",
                  },
                  {
                    title: "Dedicated Support",
                    description: "We're committed to your success with ongoing support and optimization.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="mr-4 h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="mt-4 text-primary-foreground/90 md:text-lg">
                Let's discuss how we can help you achieve your digital marketing goals. Schedule a free consultation
                today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

