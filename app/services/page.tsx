import Image from "next/image"
import { ArrowRight, CheckCircle, Headphones, MessageSquare, Users, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Our <span className="text-purple-500">Services</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Comprehensive solutions to bridge the gap between spoken and sign language.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">Real-time Translation</h2>
              <p className="mb-6 text-gray-600">
                Our cutting-edge technology translates between spoken language and sign language in real-time, enabling
                seamless communication between deaf and hearing individuals.
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "Speech-to-sign translation",
                  "Sign-to-text conversion",
                  "Multi-language support",
                  "High accuracy and low latency",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Real-time translation in action"
                width={700}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interpretation Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Professional sign language interpreter"
                width={700}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-start">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">Interpretation Services</h2>
              <p className="mb-6 text-gray-600">
                Our network of professional sign language interpreters provides high-quality interpretation services for
                various settings and needs.
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "On-demand video interpretation",
                  "In-person interpretation for events",
                  "Business meeting support",
                  "Educational setting interpretation",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Book an Interpreter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">Education Programs</h2>
              <p className="mb-6 text-gray-600">
                Learn sign language through our comprehensive courses designed for all skill levels, from beginners to
                advanced signers.
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "Interactive online courses",
                  "In-person workshops",
                  "Corporate training programs",
                  "Certification preparation",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Sign language education class"
                width={700}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Corporate accessibility solutions"
                width={700}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-start">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">Corporate Solutions</h2>
              <p className="mb-6 text-gray-600">
                Make your business more inclusive with our comprehensive accessibility solutions designed for
                organizations of all sizes.
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "Workplace accessibility audits",
                  "Employee training programs",
                  "Customer service accessibility",
                  "ADA compliance consulting",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Flexible <span className="text-purple-600">Pricing</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-8 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-2xl font-bold text-black">Basic</h3>
              <p className="mb-6 text-gray-600">For individuals and small teams</p>
              <p className="mb-6">
                <span className="text-4xl font-bold text-black">$29</span>
                <span className="text-black">/month</span>
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "5 hours of translation per month",
                  "Basic sign language course access",
                  "Email support",
                  "Mobile app access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
            <div className="relative rounded-lg border-2 border-purple-600 p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-bold text-white">
                Most Popular
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">Professional</h3>
              <p className="mb-6 text-gray-600">For growing businesses</p>
              <p className="mb-6">
                <span className="text-4xl font-bold text-black">$99</span>
                <span className="text-black">/month</span>
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "20 hours of translation per month",
                  "Full course library access",
                  "Priority support",
                  "5 hours of interpretation services",
                  "API access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
            <div className="rounded-lg border border-gray-200 p-8 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-2xl font-bold text-black">Enterprise</h3>
              <p className="mb-6 text-gray-600">For large organizations</p>
              <p className="mb-6">
                <span className="text-4xl font-bold text-black">Custom</span>
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Unlimited translation",
                  "Custom training programs",
                  "Dedicated account manager",
                  "Custom integration solutions",
                  "On-site support",
                  "SLA guarantees",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Make Communication <span className="text-purple-500">Accessible for All?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Join thousands of individuals and organizations who are breaking down communication barriers with SignEASE.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">SignEASE</h3>
              <p>Bridging speech and sign language through innovative technology.</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Services</h4>
              <ul className="space-y-2">
                {["Real-time Translation", "Interpretation Services", "Education Programs", "Corporate Solutions"].map(
                  (item, index) => (
                    <li key={index}>
                      <a href="#" className="hover:text-purple-400">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-purple-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Connect</h4>
              <p className="mb-4">Sign up for our newsletter to receive updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-gray-700 bg-gray-800 px-4 py-2 focus:border-purple-500 focus:outline-none"
                />
                <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SignEASE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
