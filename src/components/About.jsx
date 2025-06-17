import { motion } from 'framer-motion'
import aboutData from "../data/about.json";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutData.image_url}
              alt="About Me"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-sky-200 opacity-20 rounded-xl"></div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-sky-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutData.summary}
            </p>

            {/* <h3 className="text-2xl font-semibold text-sky-800 mb-4">
              {aboutData.driving_culture_title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutData.driving_culture_description}
            </p>

            <ul className="space-y-3">
              {aboutData.key_initiatives.map((initiative, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <i className="fas fa-check-circle text-sky-500 mr-3"></i>
                  {initiative}
                </li>
              ))}
            </ul> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 