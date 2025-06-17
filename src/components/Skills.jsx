import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'

export default function Skills() {
  const skills = skillsData;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          Skills & Expertise
          <p className="text-lg font-normal text-gray-600 mt-2">Core competencies that drive organizational success</p>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${skill.icon} text-3xl text-sky-600`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-sky-800 mb-3">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 