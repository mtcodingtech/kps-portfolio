import toolsData from '../data/tools.json'
import { motion } from 'framer-motion'

export default function Tools() {
  const getToolIcon = (toolName) => {
    const iconMap = {
      'BambooHR': 'fa-solid fa-users-gear',
      'Better HR': 'fa-solid fa-user-tie',
      'JobNet': 'fa-solid fa-briefcase',
      'LinkedIn Recruiter': 'fa-brands fa-linkedin',
      'Google Workspace': 'fa-brands fa-google',
      'MS Office': 'fa-solid fa-file-word',
      'Slack': 'fa-brands fa-slack',
      'Trello': 'fa-brands fa-trello',
      'Zoom': 'fa-solid fa-video',
      'Fingerprint System': 'fa-solid fa-fingerprint'
    };
    return iconMap[toolName] || 'fa-solid fa-toolbox';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50" id="tools">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          Tools & Technologies
          <p className="text-lg font-normal text-gray-600 mt-2">Leveraging cutting-edge HR technology for optimal results</p>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolsData.categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-sky-800 mb-8 border-b border-sky-100 pb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group px-4 py-2 bg-sky-50 text-sky-700 rounded-full hover:bg-sky-100 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    <i className={`${getToolIcon(tool)} text-sky-600 group-hover:text-sky-700`}></i>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 