"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ContactFormProps {
  onTransmit: () => void
}

export function ContactForm({ onTransmit }: ContactFormProps) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    const newErrors: { name?: string; message?: string } = {}
    
    if (!name.trim()) {
      newErrors.name = "Name is required"
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required"
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setIsSubmitting(true)
    onTransmit()
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setName("")
    setMessage("")
  }

  return (
    <motion.div
      className="relative z-10 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12"
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(168,85,247,0.3)",
                  "0 0 40px rgba(168,85,247,0.5)",
                  "0 0 20px rgba(168,85,247,0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Signal received.</h3>
            <p className="text-gray-400">Cyrus will respond.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Send another signal
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (errors.name) setErrors({ ...errors, name: undefined })
                }}
                className={`w-full px-4 py-3 bg-[#0d0d14] border rounded-lg text-white placeholder-gray-600 transition-all duration-300 focus:outline-none ${
                  errors.name 
                    ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                    : 'border-purple-500/30 focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                }`}
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  if (errors.message) setErrors({ ...errors, message: undefined })
                }}
                rows={5}
                className={`w-full px-4 py-3 bg-[#0d0d14] border rounded-lg text-white placeholder-gray-600 transition-all duration-300 focus:outline-none resize-none ${
                  errors.message 
                    ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                    : 'border-purple-500/30 focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                }`}
                placeholder="Got a project? An idea? Or just want to say hello?"
                disabled={isSubmitting}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full py-4 px-6 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {/* Button glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.span
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    Transmit Signal
                  </>
                )}
              </span>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
