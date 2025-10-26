import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation d'envoi
    alert('Message envoyé avec succès ! Nous vous contacterons bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      details: ['Mermoz Comico-Dakar', 'Près de Sonatel, Sénégal']
    },
    {
      icon: FaPhone,
      title: 'Téléphone',
      details: ['+221 77 812 59 05', 'Lun-Ven: 8h-18h']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['contact@dabointernational.com', 'Réponse sous 24h']
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
          alt="Contact immobiliers" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Contactez-nous
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nous sommes là pour
            <br />
            <span className="text-blue-600">vous accompagner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans vos projets immobiliers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-pink-600 text-white rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/221778125905"
                  className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact rapide</h4>
              <p className="text-gray-600 mb-4">
                Pour une réponse immédiate, contactez-nous directement sur WhatsApp.
              </p>
              <motion.a
                href="https://wa.me/221XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="mr-2" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou posez votre question..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="mr-2" />
                <span>Envoyer le message</span>
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                En envoyant ce message, vous acceptez notre{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact