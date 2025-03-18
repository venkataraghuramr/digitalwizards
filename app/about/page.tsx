import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Are Digital Wizards</h1>
              <p className="text-muted-foreground md:text-xl">
                A team of passionate digital marketers dedicated to transforming businesses through innovative digital
                strategies.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Digital Wizards Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Our Story" fill className="object-cover" />
            </div>
            <div>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From Humble Beginnings to Digital Excellence
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Digital Wizards began with a simple mission: to help businesses navigate the complex
                  digital landscape and achieve meaningful results.
                </p>
                <p>
                  What started as a small team of three passionate digital marketers has grown into a full-service
                  digital marketing agency with expertise across all digital channels.
                </p>
                <p>
                  Over the years, we've helped hundreds of businesses of all sizes transform their digital presence and
                  achieve their marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Purpose</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative digital strategies that drive growth, enhance brand visibility,
                  and deliver measurable results.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Deliver exceptional value to our clients",
                    "Stay at the forefront of digital innovation",
                    "Maintain transparency and integrity in all we do",
                    "Build lasting partnerships based on trust and results",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted digital marketing partner for businesses seeking transformative growth in the
                  digital landscape.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Set the standard for excellence in digital marketing",
                    "Create a positive impact for businesses and communities",
                    "Foster a culture of innovation and continuous learning",
                    "Build a global network of satisfied clients and partners",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Our Experts</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience across various digital disciplines to
              deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Alex Johnson",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400&text=AJ",
                bio: "With over 15 years of experience in digital marketing, Alex leads our team with vision and expertise.",
              },
              {
                name: "Samantha Lee",
                position: "Creative Director",
                image: "/placeholder.svg?height=400&width=400&text=SL",
                bio: "Samantha brings creative excellence to every project, ensuring our clients' brands stand out in the digital landscape.",
              },
              {
                name: "Marcus Chen",
                position: "Technical Director",
                image: "/placeholder.svg?height=400&width=400&text=MC",
                bio: "Marcus oversees all technical aspects of our projects, from web development to advanced analytics implementations.",
              },
              {
                name: "Olivia Rodriguez",
                position: "Strategy Director",
                image: "/placeholder.svg?height=400&width=400&text=OR",
                bio: "Olivia develops data-driven strategies that help our clients achieve their business objectives.",
              },
              {
                name: "David Kim",
                position: "SEO Specialist",
                image: "/placeholder.svg?height=400&width=400&text=DK",
                bio: "David's expertise in search engine optimization helps our clients improve their visibility and organic traffic.",
              },
              {
                name: "Emma Thompson",
                position: "Content Strategist",
                image: "/placeholder.svg?height=400&width=400&text=ET",
                bio: "Emma creates compelling content strategies that engage audiences and drive conversions.",
              },
              {
                name: "James Wilson",
                position: "Paid Media Manager",
                image: "/placeholder.svg?height=400&width=400&text=JW",
                bio: "James optimizes paid advertising campaigns to maximize ROI and drive qualified leads.",
              },
              {
                name: "Sophia Garcia",
                position: "Client Success Manager",
                image: "/placeholder.svg?height=400&width=400&text=SG",
                bio: "Sophia ensures our clients receive exceptional service and achieve their digital marketing goals.",
              },
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Values</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Our core values guide everything we do, from how we work with clients to how we develop our team.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, constantly pushing boundaries and exceeding expectations.",
                icon: "🏆",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical practices in all our client relationships and business dealings.",
                icon: "⚖️",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation and creativity, staying ahead of digital trends to deliver cutting-edge solutions.",
                icon: "💡",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration, working closely with our clients and within our team to achieve success.",
                icon: "🤝",
              },
              {
                title: "Results-Driven",
                description:
                  "We focus on delivering measurable results that make a real impact on our clients' businesses.",
                icon: "📈",
              },
              {
                title: "Continuous Learning",
                description:
                  "We are committed to continuous learning and professional development to stay at the forefront of our industry.",
                icon: "🎓",
              },
            ].map((value, i) => (
              <Card key={i}>
                <CardContent className="p-6 md:p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
          <p className="mt-4 text-primary-foreground/90 md:text-xl max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals and transform your online presence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
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

