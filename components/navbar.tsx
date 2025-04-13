"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sign<span className="text-purple-500">EASE</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 transition-colors hover:text-purple-500"
              >
                <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  {item}
                </motion.span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950">
              Sign In
            </Button>
            <Link href="/translate">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 right-0 top-20 bg-black p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 transition-colors hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full border-purple-500 text-purple-500 hover:bg-purple-950">
                Sign In
              </Button>
              <Link href="/translate" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
