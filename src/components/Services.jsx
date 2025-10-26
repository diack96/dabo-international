import React from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaKey, FaCogs, FaCheck, FaArrowRight } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaHome,
      title: 'Vente Immobilière',
      description: 'Découvrez notre sélection exclusive de terrains, maisons et appartements. Notre équipe d\'experts vous guide dans l\'achat de votre bien idéal avec transparence et professionnalisme.',
      features: ['Terrains résidentiels', 'Villas de luxe', 'Appartements modernes', 'Projets commerciaux'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaKey,
      title: 'Location de Biens',
      description: 'Trouvez le logement parfait pour vos besoins. Notre portefeuille diversifié vous offre de nombreuses options de qualité, du studio au penthouse.',
      features: ['Appartements meublés', 'Villas de standing', 'Bureaux commerciaux', 'Locations saisonnières'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaCogs,
      title: 'Gestion Immobilière',
      description: 'Confiez-nous la gestion complète de vos biens immobiliers. Nous nous occupons de tout pour maximiser votre investissement et votre tranquillité.',
      features: ['Gestion locative', 'Maintenance', 'Recouvrement', 'Optimisation fiscale'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
          alt="Services immobiliers" 
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
            Nos Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solutions Immobilières
            <br />
            <span className="text-blue-600">Complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des services immobiliers professionnels et personnalisés pour répondre à tous vos besoins, 
            de l'achat à la gestion de vos biens.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 relative overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="text-2xl text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <FaCheck className="text-green-500 mr-3 text-xs" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Vous avez un projet immobilier ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans la réalisation de vos projets. 
              Contactez-nous pour une consultation personnalisée.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Demander un devis</span>
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services