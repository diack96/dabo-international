import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaArrowRight } from 'react-icons/fa'

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: 'Villa Moderne à Dakar',
      location: 'Dakar, Sénégal',
      price: '450 000 000 FCFA',
      type: 'À vendre',
      description: 'Magnifique villa de 4 chambres avec jardin privé et piscine. Vue panoramique sur l\'océan Atlantique.',
      features: ['4 chambres', '3 salles de bain', '500m²', 'Piscine privée'],
      image: 'villa',
      status: 'Disponible'
    },
    {
      id: 2,
      title: 'Appartement Luxueux',
      location: 'Abidjan, Côte d\'Ivoire',
      price: '850 000 FCFA/mois',
      type: 'À louer',
      description: 'Appartement de 3 chambres avec vue sur mer et balcon privé. Situé dans un quartier résidentiel prestigieux.',
      features: ['3 chambres', '2 salles de bain', '120m²', 'Balcon privé'],
      image: 'apartment',
      status: 'Disponible'
    },
    {
      id: 3,
      title: 'Terrain Commercial',
      location: 'Bamako, Mali',
      price: '180 000 000 FCFA',
      type: 'À vendre',
      description: 'Terrain de 2000m² idéal pour projet commercial ou résidentiel. Situé dans une zone en développement.',
      features: ['2000m²', 'Zone commerciale', 'Accès facile', 'Permis de construire'],
      image: 'land',
      status: 'Disponible'
    }
  ]

  const getImageContent = (imageType) => {
    switch (imageType) {
      case 'villa':
        return { 
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          emoji: '🏡', 
          color: 'from-blue-800 to-blue-600', 
          bgColor: 'bg-blue-100' 
        }
      case 'apartment':
        return { 
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          emoji: '🏢', 
          color: 'from-blue-700 to-blue-500', 
          bgColor: 'bg-blue-100' 
        }
      case 'land':
        return { 
          image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80',
          emoji: '🏗️', 
          color: 'from-blue-600 to-blue-400', 
          bgColor: 'bg-blue-100' 
        }
      default:
        return { 
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          emoji: '🏠', 
          color: 'from-blue-800 to-blue-600', 
          bgColor: 'bg-blue-100' 
        }
    }
  }

  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Nos Biens
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Propriétés
            <br />
            <span className="text-blue-600">Sélectionnées</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de propriétés exceptionnelles dans les plus belles villes d'Afrique.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => {
            const imageContent = getImageContent(property.image)
            return (
              <motion.div
                key={property.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={imageContent.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.status}
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.type}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {property.title}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-3">
                      <FaMapMarkerAlt className="text-blue-500 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {property.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        {property.price}
                      </div>
                      <motion.button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir détails
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe peut vous aider à trouver la propriété parfaite selon vos critères spécifiques. 
              Contactez-nous pour une recherche personnalisée.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Recherche personnalisée</span>
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Properties