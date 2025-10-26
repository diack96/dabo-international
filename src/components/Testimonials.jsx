import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaUser, FaUserCircle } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aminata Diop',
      location: 'Dakar, Sénégal',
      role: 'Propriétaire Villa',
      rating: 5,
      text: 'Dabo International m\'a accompagnée dans l\'achat de ma villa à Mermoz. Leur professionnalisme et leur transparence m\'ont vraiment impressionnée. Je recommande vivement leurs services !',
      property: 'Villa 4 chambres - Mermoz'
    },
    {
      id: 2,
      name: 'Moussa Fall',
      location: 'Thiès, Sénégal',
      role: 'Investisseur',
      rating: 5,
      text: 'Grâce à Dabo International, j\'ai pu investir dans plusieurs terrains commerciaux. Leur expertise du marché sénégalais est remarquable. Une équipe de confiance !',
      property: '3 Terrains commerciaux - Dakar'
    },
    {
      id: 3,
      name: 'Fatou Sarr',
      location: 'Saint-Louis, Sénégal',
      role: 'Locataire',
      rating: 5,
      text: 'Je loue mon appartement depuis 2 ans grâce à Dabo International. La gestion est impeccable et les paiements toujours à l\'heure. Service client exceptionnel !',
      property: 'Appartement 3 chambres - Plateau'
    },
    {
      id: 4,
      name: 'Cheikh Ndiaye',
      location: 'Kaolack, Sénégal',
      role: 'Propriétaire',
      rating: 5,
      text: 'Dabo International a géré la vente de ma maison familiale avec beaucoup de respect et d\'efficacité. Ils ont trouvé l\'acheteur idéal en moins d\'un mois !',
      property: 'Maison familiale - Rufisque'
    },
    {
      id: 5,
      name: 'Aïcha Ba',
      location: 'Ziguinchor, Sénégal',
      role: 'Investisseuse',
      rating: 5,
      text: 'En tant que femme d\'affaires, j\'apprécie la fiabilité de Dabo International. Ils m\'ont aidée à diversifier mon portefeuille immobilier au Sénégal.',
      property: 'Portefeuille diversifié - Casamance'
    },
    {
      id: 6,
      name: 'Ibrahima Diallo',
      location: 'Touba, Sénégal',
      role: 'Propriétaire',
      rating: 5,
      text: 'Dabo International comprend parfaitement les spécificités du marché immobilier sénégalais. Leur accompagnement personnalisé fait toute la différence !',
      property: 'Complexe commercial - Touba'
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"></div>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Témoignages de nos <span className="text-gradient">clients sénégalais</span>
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Découvrez les retours authentiques de nos clients qui nous font confiance pour leurs projets immobiliers au Sénégal.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200 relative overflow-hidden h-full">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                  <FaQuoteLeft className="text-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-blue-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Property Info */}
                  <div className="bg-blue-50 rounded-lg p-3 mb-6">
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonial.property}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                      <p className="text-xs text-blue-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez nos clients satisfaits !</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Plus de 500 clients nous font confiance pour leurs projets immobiliers au Sénégal. 
              Découvrez pourquoi ils nous recommandent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Devenir client
              </motion.a>
              <motion.a
                href="https://wa.me/221778125905"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUser className="mr-2" />
                Parler à un expert
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
