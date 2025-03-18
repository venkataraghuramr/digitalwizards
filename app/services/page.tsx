import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Digital Solutions That Drive Results
              </h1>
              <p className="text-muted-foreground md:text-xl">
                We offer a comprehensive suite of digital marketing services tailored to your business needs and goals.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Digital Marketing Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">What We Offer</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Digital Solutions</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing services to help you achieve your
              business objectives.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Strategy",
                description:
                  "Comprehensive digital strategies that align with your business goals and target audience.",
                icon: "🧠",
                features: [
                  "Market & competitor analysis",
                  "Customer journey mapping",
                  "Channel strategy",
                  "KPI definition & measurement",
                  "Budget allocation & planning",
                ],
              },
              {
                title: "Web Development",
                description: "Custom websites that are visually stunning, responsive, and optimized for conversions.",
                icon: "💻",
                features: [
                  "Custom website design & development",
                  "E-commerce solutions",
                  "Landing page optimization",
                  "Website maintenance & support",
                  "Performance optimization",
                ],
              },
              {
                title: "SEO & Content",
                description:
                  "Data-driven SEO and content strategies that improve visibility and drive organic traffic.",
                icon: "📈",
                features: [
                  "Technical SEO audits & implementation",
                  "Keyword research & strategy",
                  "On-page & off-page optimization",
                  "Content strategy & creation",
                  "Link building & outreach",
                ],
              },
              {
                title: "Social Media",
                description: "Strategic social media management that builds brand awareness and engages your audience.",
                icon: "📱",
                features: [
                  "Social media strategy",
                  "Content creation & curation",
                  "Community management",
                  "Influencer partnerships",
                  "Social media advertising",
                ],
              },
              {
                title: "Paid Advertising",
                description: "Targeted paid advertising campaigns that maximize ROI and drive qualified leads.",
                icon: "🎯",
                features: [
                  "PPC campaign management",
                  "Display advertising",
                  "Retargeting campaigns",
                  "Social media advertising",
                  "Performance tracking & optimization",
                ],
              },
              {
                title: "Analytics & Insights",
                description: "Comprehensive analytics and reporting that provide actionable insights for growth.",
                icon: "📊",
                features: [
                  "Analytics setup & configuration",
                  "Custom dashboard development",
                  "Regular performance reporting",
                  "Data analysis & insights",
                  "Conversion rate optimization",
                ],
              },
            ].map((service, i) => (
              <Card key={i} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                  </Button>
                </CardFooter>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How We Work</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Our proven process ensures we deliver exceptional results that exceed expectations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, target audience, and current digital presence.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a tailored strategy based on your objectives, market research, and competitive analysis.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Our team executes the strategy with precision, focusing on quality and attention to detail.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and optimize to improve performance and maximize results.",
              },
            ].map((step, i) => (
              <Card key={i} className="relative overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground relative z-10">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Tailored Solutions</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Solutions By Industry</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              We understand that different industries have unique challenges and opportunities. Our solutions are
              tailored to your specific industry needs.
            </p>
          </div>
          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="saas">SaaS</TabsTrigger>
              <TabsTrigger value="b2b">B2B</TabsTrigger>
            </TabsList>
            {[
              {
                id: "ecommerce",
                title: "E-commerce Solutions",
                description:
                  "Drive online sales and improve customer experience with our e-commerce marketing solutions.",
                image: "/placeholder.svg?height=600&width=800&text=E-commerce",
                features: [
                  "Conversion rate optimization",
                  "Shopping feed management",
                  "Abandoned cart recovery",
                  "Customer retention strategies",
                  "E-commerce analytics & reporting",
                ],
              },
              {
                id: "saas",
                title: "SaaS Marketing",
                description:
                  "Acquire and retain customers for your SaaS product with our specialized marketing strategies.",
                image: "/placeholder.svg?height=600&width=800&text=SaaS",
                features: [
                  "Product-led growth strategies",
                  "Free trial & freemium optimization",
                  "Churn reduction tactics",
                  "Customer lifecycle marketing",
                  "SaaS-specific analytics & metrics",
                ],
              },
              {
                id: "b2b",
                title: "B2B Marketing",
                description:
                  "Generate high-quality leads and nurture them through the sales funnel with our B2B marketing solutions.",
                image: "/placeholder.svg?height=600&width=800&text=B2B",
                features: [
                  "Account-based marketing",
                  "Lead generation & qualification",
                  "Sales enablement",
                  "Thought leadership content",
                  "B2B social media strategies",
                ],
              },
            ].map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-4">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <ul className="space-y-2">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href={`/services/${category.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              We offer flexible pricing options to suit businesses of all sizes. Contact us for a customized quote.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Starter",
                price: "$1,500",
                period: "per month",
                description: "Perfect for small businesses looking to establish their digital presence.",
                features: [
                  "Digital strategy development",
                  "Website optimization",
                  "Basic SEO setup",
                  "Social media management (2 platforms)",
                  "Monthly performance reporting",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                title: "Growth",
                price: "$3,500",
                period: "per month",
                description: "Ideal for growing businesses looking to expand their digital footprint.",
                features: [
                  "Comprehensive digital strategy",
                  "Advanced SEO & content marketing",
                  "Social media management (4 platforms)",
                  "Paid advertising management",
                  "Bi-weekly performance reporting",
                  "Conversion rate optimization",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                title: "Enterprise",
                price: "Custom",
                period: "tailored solution",
                description: "For established businesses with complex digital marketing needs.",
                features: [
                  "Full-service digital marketing",
                  "Dedicated account manager",
                  "Custom reporting dashboard",
                  "Advanced analytics & insights",
                  "Multi-channel campaign management",
                  "Quarterly strategy reviews",
                ],
                cta: "Contact Us",
                popular: false,
              },
            ].map((plan, i) => (
              <Card key={i} className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer:
                  "Results vary depending on the strategies implemented and your industry. Some tactics like paid advertising can show immediate results, while others like SEO may take 3-6 months to show significant improvements. We provide regular updates and reports to track progress.",
              },
              {
                question: "Do you offer customized packages?",
                answer:
                  "Yes, we understand that every business is unique. We offer customized packages tailored to your specific goals, industry, and budget. Contact us for a personalized quote.",
              },
              {
                question: "How do you measure the success of your campaigns?",
                answer:
                  "We establish clear KPIs at the beginning of each campaign and track them using advanced analytics tools. We provide regular reports showing progress toward these goals and make data-driven adjustments as needed.",
              },
              {
                question: "Do you require long-term contracts?",
                answer:
                  "While we recommend a minimum 3-month commitment for most services to see meaningful results, we offer flexible contract terms. We're confident in our ability to deliver results and earn your continued business.",
              },
              {
                question: "Can you work with my existing marketing team?",
                answer:
                  "We can either complement your existing team or take full responsibility for your digital marketing efforts. We're flexible and can adapt to your needs.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have experience across various industries including e-commerce, SaaS, B2B, healthcare, finance, and more. Our team brings industry-specific knowledge to create effective strategies for your business.",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-4 text-primary-foreground/90 md:text-xl max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals. Schedule a free consultation today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

