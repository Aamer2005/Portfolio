import React from 'react';
import { 
  FaReact, 
  FaJsSquare, 
  FaNode, 
  FaVuejs, 
  FaGitAlt,
  FaHtml5,
  FaCss3
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiDocker,
  SiPostgresql
} from 'react-icons/si';
import { 
  DiSass, 
  DiBootstrap,
  DiJqueryLogo
} from 'react-icons/di';
import { 
  VscCode 
} from 'react-icons/vsc';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-800" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNode className="text-4xl text-green-600" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-4xl text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-600" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-4xl text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-4xl text-blue-400" /> },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with expertise in building modern,
            responsive, and user-friendly web applications. With several years of
            experience in the industry, I've worked with various technologies including
            React, Next.js, Node.js, and various databases.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            I believe in writing clean, maintainable code and creating seamless user
            experiences. I'm passionate about open source, cloud technologies, and
            continuously learning new things to stay up-to-date with the latest trends.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
            Technologies I Work With
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="skill-card flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-lg mx-4 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-default hover:border-blue-300"
                >
                  <span className="flex-shrink-0">{skill.icon}</span>
                  <span className="font-semibold text-gray-700 text-lg whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .skill-card {
          transition: all 0.3s ease;
          min-width: 180px;
        }

        .skill-card:hover {
          transform: translateY(-5px) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default About;