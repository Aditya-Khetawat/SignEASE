"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Contact <span className="text-purple-500">Us</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Have questions or want to learn more? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-black">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="mb-2 block text-sm font-medium text-black">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="mb-2 block text-sm font-medium text-black">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div>
              <div className="mb-8 rounded-lg bg-gray-50 p-8">
                <h3 className="mb-6 text-xl font-bold text-black">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-purple-600" />
                    <div>
                      <h4 className="font-bold text-black">Address</h4>
                      <p className="text-black">Manipal University Jaipur<br />
                      Dehmi Kalan, Near GVK Toll Plaza,<br />
                      Jaipur-Ajmer Expressway, Jaipur,<br />
                      Rajasthan 303007</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-purple-600" />
                    <div>
                      <h4 className="font-bold text-black">Phone</h4>
                      <p className="text-black">+91 7003474045</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-purple-600" />
                    <div>
                      <h4 className="font-bold text-black">Email</h4>
                      <p className="text-black">adityakhetawat08@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-6 text-xl font-bold text-black">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium text-black">Monday - Friday</span>
                    <span className="text-black">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-black">Saturday</span>
                    <span className="text-black">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-black">Sunday</span>
                    <span className="text-black">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-black">Find Us</h2>
          <div className="h-96 w-full overflow-hidden rounded-lg bg-gray-200">
            {/* Replace with actual map implementation */}
            <div className="flex h-full w-full items-center justify-center bg-gray-300">
              <p className="text-lg font-medium text-gray-600">Map goes here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-black">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "How does the real-time translation work?",
                answer:
                  "Our technology uses advanced AI algorithms to convert text and speech into sign language in real-time. This enables hearing individuals to communicate effectively with the deaf community through our innovative translation system.",
              },
              {
                question: "Do you offer services for events?",
                answer:
                  "Yes, we provide both in-person interpretation services and our technology solutions for events of all sizes, from small meetings to large conferences.",
              },
              {
                question: "Which sign languages do you support?",
                answer:
                  "We currently support American Sign Language (ASL), British Sign Language (BSL), and several other major sign languages. We're constantly expanding our language support.",
              },
              {
                question: "How can businesses benefit from your services?",
                answer:
                  "Businesses can improve accessibility for deaf customers and employees, comply with accessibility regulations, and expand their market reach by implementing our solutions.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-xl font-bold text-black">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Get <span className="text-purple-300">Started?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg">
            Join thousands of individuals and organizations who are breaking down communication barriers with SignEASE.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            Sign Up Now
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
