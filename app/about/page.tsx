import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            About <span className="text-purple-500">SignEASE</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Our story, mission, and the people behind bridging the communication gap.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="SignEASE founding team"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
                Our <span className="text-purple-600">Story</span>
              </h2>
              <p className="mb-6 text-black">
                SignEASE began as a passionate project in the college Manipal University
                Jaipur, where we, a group of engineering students, recognized a critical gap
                in accessibility technology. Inspired by personal experiences with deaf family
                members and friends, we set out to develop a solution that could transform how people
                communicate across the speech-sign language divide.
              </p>
              <p className="mb-6 text-black">
                What started as a university capstone project has evolved into a comprehensive
                platform that combines cutting-edge AI, computer vision, and natural language
                processing to provide real-time translation between sign language and spoken
                language.
              </p>
              <p className="text-black">
                Today, SignEASE aims to serve thousands of users worldwide, from individuals to large organizations, all
                working toward more inclusive communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Our <span className="text-purple-600">Mission & Values</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-black">Accessibility</h3>
              <p className="text-black">
                We believe communication should be accessible to everyone, regardless of hearing ability. We work
                tirelessly to remove barriers and create inclusive solutions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-black">Innovation</h3>
              <p className="text-black">
                We continuously push the boundaries of technology to create better, more intuitive ways for people to
                communicate across language barriers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-black">Community</h3>
              <p className="text-black">
                We work closely with the deaf community to ensure our solutions are authentic, respectful, and truly
                beneficial to those we aim to serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Meet Our <span className="text-purple-600">Team</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Aditya Khetawat",
                role: "Co-builder",
                bio: "Passionate about creating accessible technology solutions.",
              },
              {
                name: "Gotham Kothari",
                role: "Co-builder",
                bio: "Dedicated to bridging communication gaps through innovation.",
              },
              {
                name: "Vikash Kumar",
                role: "Co-builder",
                bio: "Committed to developing inclusive communication platforms.",
              },
            ].map((member, index) => (
              <div key={index} className="rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-purple-100">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${member.name[0]}`}
                    alt={member.name}
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-black">{member.name}</h3>
                <p className="mb-3 text-purple-600">{member.role}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Our <span className="text-purple-300">Mission</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg">
            Whether you're looking to use our services, partner with us, or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-800">
              View Careers
            </Button>
          </div>
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
