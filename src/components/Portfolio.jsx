import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "web",
      description: "Personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/Aamer2005/Portfolio"
    },
    {
      id: 2,
      title: " Rainfall Prediction System",
      category: "Machine Learning",
      description: "Machine Learning project to predict Rainfall",
      link: "https://github.com/Aamer2005/RainfallMLmodel"
    },
    {
      id: 3,
      title: "Movie Recomendation System",
      category: "Machine Learning",
      description: "The system analyzes movie metadata to find and recommend films with similar characteristics.",
      link: "https://github.com/Aamer2005/Machine-Learning-Models/tree/main/MovieRecommendationSystem"
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'web', 'Machine Learning', 'Deep Learning' ,'Data Analytics'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Source Code
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;