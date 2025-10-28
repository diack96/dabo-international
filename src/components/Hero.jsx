import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Agence Immobilière Premium
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre patrimoine,
              <br />
              <span className="text-blue-600">notre priorité</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dabo International vous accompagne dans tous vos projets immobiliers au Sénégal. 
              Transparence, fiabilité et expertise au service de vos ambitions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center px-8 py-4">
                <span>Découvrir nos services</span>
                <FaArrowRight className="ml-2" />
              </a>
              <a 
                href="https://wa.me/221778125905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center px-8 py-4"
              >
                <FaWhatsapp className="mr-2" />
                <span>Contact WhatsApp</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Biens vendus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Skyline urbain moderne" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-6">
                    <div className="w-40 h-40 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-8xl">🏢</span>
                    </div>
                    <h3 className="text-3xl font-bold">Immobilier d'Excellence</h3>
                    <p className="text-xl opacity-90">Au Sénégal</p>
                  </div>
                </div>
                
                {/* Professional Elements */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-semibold">Premium</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-semibold">Depuis 2008</span>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certifié</div>
                    <div className="text-sm text-gray-600">Professionnel</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5.0</div>
                    <div className="text-sm text-gray-600">Avis clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero