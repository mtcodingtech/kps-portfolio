import { motion } from 'framer-motion'
import careerData from '../data/career.json'

export default function Career() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white" id="career">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          {careerData.title}
          <p className="text-lg font-normal text-gray-600 mt-2">{careerData.subtitle}</p>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {careerData.highlights.map((highlight, index) => (
            <motion.div 
              key={highlight.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-sky-500 flex items-start space-x-4"
                  >
              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm flex-shrink-0">
                {highlight.id}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-900 mb-1">{highlight.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{highlight.description}</p>
                <p className="text-sky-600 text-sm mb-2">{highlight.period}</p>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 