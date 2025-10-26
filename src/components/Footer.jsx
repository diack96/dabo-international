import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Vente Immobilière', href: '#services' },
        { name: 'Location de Biens', href: '#services' },
        { name: 'Gestion Immobilière', href: '#services' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Mermoz Comico-Dakar, Près de Sonatel, Sénégal', href: '#', icon: FaMapMarkerAlt },
        { name: '+221 77 812 59 05', href: 'tel:+221778125905', icon: FaPhone },
        { name: 'contact@dabointernational.com', href: 'mailto:contact@dabointernational.com', icon: FaEnvelope }
      ]
    },
    {
      title: 'Suivez-nous',
      links: [
        { name: 'Facebook', href: '#', icon: FaFacebook },
        { name: 'Instagram', href: '#', icon: FaInstagram },
        { name: 'WhatsApp', href: 'https://wa.me/221778125905', icon: FaWhatsapp }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Logo size="default" className="text-white" />
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Votre partenaire de confiance pour tous vos projets immobiliers en Afrique. 
                Nous nous engageons à vous offrir des services d'exception avec transparence et professionnalisme.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/221778125905"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className="flex items-center text-white/80 hover:text-blue-400 transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        {link.icon && (
                          <link.icon className="text-blue-500 mr-3 text-sm group-hover:scale-110 transition-transform duration-300" />
                        )}
                        <span className="text-sm">{link.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Restez informé</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Recevez nos dernières offres immobilières et actualités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>S'abonner</span>
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2024 Dabo International – Tous droits réservés
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors duration-300">
                Mentions légales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer