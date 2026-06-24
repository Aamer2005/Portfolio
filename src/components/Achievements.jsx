import React, { useState } from 'react';

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Frontend Development Certification',
      issuer: 'Google',
      date: '2024',
      description: 'Completed advanced frontend development course covering React, Next.js, and modern JavaScript.',
      image: '/certificates/frontend.jpg',
      credentialId: 'ABCD-1234-EFGH',
      link: 'https://example.com/verify',
      skills: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 2,
      title: 'JavaScript Advanced',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Mastered advanced JavaScript concepts including closures, promises, and async/await.',
      image: '/certificates/javascript.jpg',
      credentialId: 'WXYZ-5678-IJKL',
      link: 'https://example.com/verify',
      skills: ['JavaScript', 'ES6+', 'TypeScript']
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2024',
      description: 'Completed comprehensive full stack development program.',
      image: '/certificates/fullstack.jpg',
      credentialId: 'MNOP-9012-QRST',
      link: 'https://example.com/verify',
      skills: ['Node.js', 'MongoDB', 'React']
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 text-lg mt-4">
            Certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => openModal(cert)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl text-white">📜</span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {cert.description.substring(0, 80)}...
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="text-blue-600 text-sm font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button
                onClick={closeModal}
                className="float-right text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>

              <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                {selectedCert.image ? (
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-8xl text-white">📜</span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Issuer:</strong> {selectedCert.issuer}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {selectedCert.date}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Credential ID:</strong> {selectedCert.credentialId}
              </p>
              <p className="text-gray-700 mb-4">
                {selectedCert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCert.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700"
                >
                  Verify Certificate
                </a>
                <button
                  onClick={() => alert('Downloading certificate...')}
                  className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;