import { motion } from "framer-motion";
import contactData from "../data/contact.json";

export default function Contact() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-sky-50"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-sky-900 mb-4 text-center">
          {contactData.title}
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          {contactData.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto">
          {contactData.contact_methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center "
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${method.icon} text-3xl text-sky-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">
                {method.type}
              </h3>
              <a
                href={method.href}
                className="text-gray-700 hover:text-sky-700 transition-colors text-base block break-all"
              >
                {method.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
