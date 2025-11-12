import React from 'react'
import { motion } from 'motion/react'

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-white font-bold text-xl">S</span>
      </motion.div>
      <motion.span
        className="text-2xl font-bold text-gray-800"
        whileHover={{ color: '#3b82f6' }}
      >
        Suzuki
      </motion.span>
    </motion.div>
  )
}

export default Logo
