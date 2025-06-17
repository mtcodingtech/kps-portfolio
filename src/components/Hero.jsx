import { motion } from 'framer-motion'
import heroData from '../data/hero.json'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Additional Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%230ea5e9' stroke-width='1' stroke-opacity='0.4'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke-dasharray='5 5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-sky-50/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Hi, I'm
                <span className="text-sky-600">
                  {` ${heroData.name}`}
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700">
                {heroData.position}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {heroData.call_to_actions.map((action, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={action.href}
                  className={`px-8 py-4 ${index === 0 ? 'bg-gradient-to-r from-sky-600 to-blue-500 text-white hover:from-sky-700 hover:to-blue-600' : 'bg-white text-sky-600 hover:bg-sky-50 border border-sky-200'} rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                >
                  <i className={`${action.icon} text-lg`}></i>
                  {action.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
