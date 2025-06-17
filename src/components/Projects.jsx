import React from "react";
import projectsData from "../data/projects.json";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-sky-50 to-white"
      id="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          {projectsData.title}
          <p className="text-lg font-normal text-gray-600 mt-2">
            {projectsData.subtitle}
          </p>
        </h2>

        <div className="space-y-16">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 ${
                  project.image && "lg:grid-cols-2"
                }  items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {project.image && (
                  <div
                    className={`relative h-[300px] lg:h-[400px] ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className={`p-8 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-sky-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  {project.details?.map((detail, index) => {
                    return (
                      <>
                        <div className="flex gap-4" key={index}>
                          <h5 className="font-bold text-lg text-sky-900 my-2">
                            {`${detail.title}`}
                          </h5>
                          <p className="flex items-center text-sky-600 text-md font-semibold">
                            {detail.result}
                          </p>
                        </div>
                      </>
                    );
                  })}
                  {project.facts?.map((fact, index) => {
                    return (
                      <React.Fragment key={index}>
                        <h5 className="font-bold text-lg text-sky-900 my-2">
                          {fact.title}
                        </h5>
                        <ul className="space-y-2">
                          {fact.results?.map((result, resultIndex) => (
                            <li
                              key={resultIndex}
                              className="flex items-center text-gray-600 text-sm"
                            >
                              <i
                                className={`fas fa-check-circle text-sky-500 mr-2`}
                              ></i>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
