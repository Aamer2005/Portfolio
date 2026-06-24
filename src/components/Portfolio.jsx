import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured e-commerce platform with React and Node.js",
      image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=E-Commerce"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with React Native",
      image: "https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Banking+App"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "web",
      description: "Real-time analytics dashboard with charts and graphs",
      image: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Dashboard"
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "web",
      description: "Social networking platform with real-time features",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Social+Media"
    },
    {
      id: 5,
      title: "Weather App",
      category: "mobile",
      description: "Weather forecast app with location tracking",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Weather+App"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "design",
      description: "Modern portfolio website with animations",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Portfolio"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg capitalize transition-all ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;