"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mic, MicOff, Play, Send } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import BackgroundAnimation from "@/components/background-animation"

export default function TranslatePage() {
  const [inputText, setInputText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationComplete, setTranslationComplete] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real app, this would trigger speech recognition
    if (!isRecording) {
      // Simulating speech recognition
      setTimeout(() => {
        setInputText("Hello, how are you today? I'm learning about sign language translation.")
        setIsRecording(false)
      }, 3000)
    }
  }

  const handleTranslate = () => {
    if (!inputText.trim()) return

    setIsTranslating(true)

    // Simulate translation process
    setTimeout(() => {
      setIsTranslating(false)
      setTranslationComplete(true)

      // In a real app, this would load the actual translation video
      if (videoRef.current) {
        videoRef.current.src = "/placeholder.svg?height=400&width=600&text=Sign+Language+Translation"
        videoRef.current.poster = "/placeholder.svg?height=400&width=600&text=Sign+Language+Translation"
      }
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
    setTranslationComplete(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative flex flex-1 flex-col">
        <BackgroundAnimation />

        <div className="container relative z-10 mx-auto flex flex-1 flex-col px-4 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Speech to <span className="text-purple-500">Sign Language</span> Translator
            </h1>
            <p className="mx-auto max-w-2xl text-gray-300">
              Type or speak your message, and our AI will translate it into sign language in real-time.
            </p>
          </motion.div>

          <div className="grid flex-1 gap-8 md:grid-cols-2">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <Card className="flex flex-1 flex-col bg-gray-900/70 backdrop-blur-md">
                <CardContent className="flex flex-1 flex-col p-6">
                  <Tabs defaultValue="text" className="flex-1">
                    <TabsList className="mb-4 grid w-full grid-cols-2 bg-gray-800">
                      <TabsTrigger value="text">Text Input</TabsTrigger>
                      <TabsTrigger value="voice">Voice Input</TabsTrigger>
                    </TabsList>

                    <TabsContent value="text" className="flex flex-1 flex-col">
                      <Textarea
                        placeholder="Type your message here..."
                        className="flex-1 resize-none border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                        value={inputText}
                        onChange={handleInputChange}
                      />
                    </TabsContent>

                    <TabsContent value="voice" className="flex flex-1 flex-col items-center justify-center">
                      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gray-800 shadow-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`h-24 w-24 rounded-full ${
                            isRecording
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-purple-600 text-white hover:bg-purple-700"
                          }`}
                          onClick={toggleRecording}
                        >
                          {isRecording ? <MicOff className="h-12 w-12" /> : <Mic className="h-12 w-12" />}
                        </Button>
                      </div>
                      <p className="text-center text-gray-300">
                        {isRecording ? "Listening... Click to stop" : "Click the microphone to start speaking"}
                      </p>
                      {inputText && (
                        <div className="mt-4 w-full rounded-md bg-gray-800 p-4 text-white">
                          <p>{inputText}</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4 flex justify-end">
                    <Button
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={handleTranslate}
                      disabled={!inputText.trim() || isTranslating}
                    >
                      {isTranslating ? "Translating..." : "Translate"}
                      {isTranslating ? null : <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="flex h-full flex-col bg-gray-900/70 backdrop-blur-md">
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="mb-4 text-xl font-bold text-white">Sign Language Translation</h3>

                  <div className="relative flex flex-1 items-center justify-center rounded-md bg-gray-800">
                    {isTranslating ? (
                      <div className="flex flex-col items-center justify-center">
                        <div className="mb-4 h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
                        <p className="text-gray-300">Generating translation...</p>
                      </div>
                    ) : translationComplete ? (
                      <div className="relative h-full w-full">
                        <video
                          ref={videoRef}
                          className="h-full w-full rounded-md object-cover"
                          controls
                          poster="/placeholder.svg?height=400&width=600&text=Sign+Language+Translation"
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 right-4">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Play className="mr-2 h-4 w-4" /> Play
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-gray-400">
                          Your translation will appear here. Enter text or use voice input and click "Translate".
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Translation <span className="text-purple-500">Features</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Real-time Translation",
                  description: "Our AI translates your text or speech into sign language in seconds.",
                },
                {
                  title: "Multiple Sign Languages",
                  description: "Support for ASL, BSL, and other major sign languages.",
                },
                {
                  title: "Save & Share",
                  description: "Save your translations or share them directly with others.",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-900/70 backdrop-blur-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
