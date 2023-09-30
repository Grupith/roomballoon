import React, { ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AlertProps {
  children: ReactNode
  type: "success" | "warning" | "error" | "info"
}

const Alert: React.FC<AlertProps> = ({ children, type }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide the alert after 3000ms (3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    // Clean up the timer on unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className={`fixed top-0 left-0 right-0 p-4 mx-4 mt-4 rounded-lg shadow-md text-white md:mx-auto md:max-w-md ${
            type === "success"
              ? "bg-green-500"
              : type === "warning"
              ? "bg-yellow-500"
              : type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Alert
