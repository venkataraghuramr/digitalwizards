import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="text-muted-foreground md:text-xl">
                Have a question or ready to start your digital journey? We'd love to hear from you.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Contact Digital Wizards"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels or fill out the contact form.
                </p>
              </div>
              <div className="mt-8 grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Our Office</h3>
                      <p className="text-muted-foreground">
                        123 Digital Avenue
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">
                        Main: (555) 123-4567
                        <br />
                        Support: (555) 987-6543
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">
                        General Inquiries: info@digitalwizards.com
                        <br />
                        Support: support@digitalwizards.com
                        <br />
                        Careers: careers@digitalwizards.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <Link
                      key={social}
                      href={`https://${social}.com`}
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <Image
                        src={`/placeholder.svg?height=24&width=24&text=${social.charAt(0).toUpperCase()}`}
                        alt={social}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Visit Our Office</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              We're located in the heart of San Francisco's tech district.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=2000&text=Google+Map"
              alt="Office Location Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Find answers to common questions about working with us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                question: "What happens after I submit the contact form?",
                answer:
                  "Once you submit the contact form, one of our team members will review your inquiry and get back to you within 24 business hours to discuss your needs and how we can help.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes, we offer a free 30-minute consultation to discuss your business goals and how our digital marketing services can help you achieve them.",
              },
              {
                question: "Can we meet in person?",
                answer:
                  "If you're in the San Francisco area, we'd be happy to schedule an in-person meeting at our office. For clients outside the area, we offer video consultations.",
              },
              {
                question: "How quickly can you start working on my project?",
                answer:
                  "Our typical onboarding process takes 1-2 weeks, depending on the complexity of your project and our current workload. We'll provide you with a specific timeline during our initial consultation.",
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="mt-4 text-primary-foreground/90 md:text-xl max-w-3xl mx-auto">
            Take the first step towards transforming your digital presence. Schedule a free consultation today.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

