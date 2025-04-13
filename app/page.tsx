"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Headphones, MessageSquare, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <BackgroundAnimation />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Bridging Speech and <span className="text-purple-500">Sign Language</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
              SignEASE helps break communication barriers between the hearing and deaf communities through innovative
              technology and services.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/translate">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-black">Real-time Translation</h3>
              <p className="font-medium text-black">
                Our technology translates between spoken language and sign language in real-time, enabling seamless
                communication.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-black">Interpretation Services</h3>
              <p className="font-medium text-black">
                Professional sign language interpreters available for events, meetings, and personal assistance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-black">Education Programs</h3>
              <p className="font-medium text-black">
                Learn sign language through our comprehensive courses designed for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="People communicating using sign language"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
                Our <span className="text-purple-600">Mission</span>
              </h2>
              <p className="mb-6 text-black">
                At SignEASE, we believe communication should be accessible to everyone. Our mission is to bridge the gap
                between the hearing and deaf communities through innovative technology and services.
              </p>
              <ul className="space-y-3">
                {[
                  "Inclusive communication for all",
                  "Breaking down barriers",
                  "Empowering deaf communities",
                  "Promoting sign language awareness",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Teacher",
                quote:
                  "SignEASE has transformed how I communicate with deaf students in my classroom. It's an incredible tool that has made education more inclusive.",
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                quote:
                  "Implementing SignEASE in our customer service has allowed us to serve the deaf community better. Our business has grown as a result.",
              },
              {
                name: "Aisha Williams",
                role: "Community Organizer",
                quote:
                  "The impact SignEASE has had on our community events is immeasurable. Everyone can participate fully regardless of hearing ability.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-purple-800 p-6 shadow-md">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-purple-700">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.name[0]}`}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Break <span className="text-purple-500">Communication Barriers?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Join thousands of individuals and organizations who are making communication accessible for everyone.
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
                      <Link href="#" className="hover:text-purple-400">
                        {item}
                      </Link>
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
                    <Link href="#" className="hover:text-purple-400">
                      {item}
                    </Link>
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
