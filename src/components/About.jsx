import React from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaShieldAlt, FaHandshake, FaAward, FaUsers, FaGlobe } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: FaEye,
      title: 'Transparence',
      description: 'Des informations claires et honnêtes à chaque étape de votre projet. Nous croyons en la communication ouverte et la transparence totale.'
    },
    {
      icon: FaShieldAlt,
      title: 'Fiabilité',
      description: 'Un engagement solide et des résultats garantis. Notre réputation est bâtie sur la confiance et la satisfaction de nos clients.'
    },
    {
      icon: FaHandshake,
      title: 'Accompagnement',
      description: 'Un suivi personnalisé tout au long de votre projet. Nous sommes à vos côtés de A à Z pour vous accompagner dans vos décisions.'
    }
  ]

  const stats = [
    { icon: FaUsers, number: '500+', label: 'Clients satisfaits' },
    { icon: FaAward, number: '15+', label: 'Années d\'expérience' },
    { icon: FaGlobe, number: '14', label: 'Régions du Sénégal' }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                À propos de nous
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dabo International
                <br />
                <span className="text-blue-600">Votre partenaire de confiance</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Depuis notre création en 2008, Dabo International s'engage à offrir des services immobiliers d'exception au Sénégal. 
                Notre équipe d'experts vous accompagne avec passion dans tous vos projets immobiliers dans tout le pays.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <value.icon className="text-xl text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" 
                  alt="Équipe professionnelle Dabo International" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-6">
                    <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-6xl">👥</span>
                    </div>
                    <h3 className="text-2xl font-bold">Équipe Professionnelle</h3>
                    <p className="text-lg opacity-90">Experts Immobiliers</p>
                  </div>
                </div>
                
                {/* Professional Elements */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-semibold">Depuis 2008</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-semibold">Certifié</span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaAward className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaGlobe className="text-xl text-white" />
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-3xl -z-10 transform rotate-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About