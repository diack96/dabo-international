import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloat = () => {
  return (
    <motion.a
              href="https://wa.me/221778125905"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Contactez-nous sur WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.a>
  )
}

export default WhatsAppFloat