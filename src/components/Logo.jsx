import React from 'react'
import { motion } from 'framer-motion'

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12", 
    large: "w-16 h-16"
  }

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <motion.div 
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src="/images/dabo-inter.png" 
          alt="Dabo International Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  )
}

export default Logo
