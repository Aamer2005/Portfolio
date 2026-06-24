import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaCode,
  FaDev
} from 'react-icons/fa';
import { SiLeetcode, SiGmail, SiHashnode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Links - Update with your actual URLs
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-600',
      username: '@yourusername'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600',
      username: 'yourusername'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="w-5 h-5" />,
      url: 'https://leetcode.com/yourusername',
      color: 'hover:bg-yellow-600',
      username: 'yourusername'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-blue-400',
      username: '@yourusername'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:your.email@gmail.com',
      color: 'hover:bg-red-500',
      username: 'your.email@gmail.com'
    }
  ];

  // Quick Links for navigation
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Mohammed Aamer
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern web experiences with passion and precision. 
              Specializing in React, JavaScript, and full-stack development.
            </p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                React
              </span>
              <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                Node.js
              </span>
              <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
                TypeScript
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            {/* Social usernames */}
            <div className="hidden lg:block space-y-1 mt-2">
              {socialLinks.slice(0, 3).map((social) => (
                <p key={social.name} className="text-gray-500 text-xs">
                  {social.name}: {social.username}
                </p>
              ))}
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <p className="text-gray-400 text-sm">
              Have a project in mind? Let's work together!
            </p>
            <a
              href="mailto:mdaamer2005@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </a>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Available for freelancing</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mohammed Aamer. All rights reserved.
            </p>
            
            {/* Footer bottom links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-700">|</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Back to Top ↑
              </button>
            </div>

            {/* Tech stack badges */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-xs">Built with</span>
              <span className="text-blue-400 text-xs">React</span>
              <span className="text-gray-600 text-xs">•</span>
              <span className="text-cyan-400 text-xs">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;