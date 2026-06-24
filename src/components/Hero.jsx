import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToAchievements = () => {
    const achievementsSection = document.getElementById('achievements');
    if (achievements) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = 'Aamer_Resume_updated_june.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-lg">Welcome</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                Hi, I'm Mohammed Aamer
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-600">
                B.tech Student
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Currently pursuing B.Tech Final year in Information Technology 
              from Shri Guru Gobind Singhji Institute Of Engineering And Technology , Nanded

            </p>
            
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={handleResumeDownload}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Resume
              </button>
               <button 
                onClick={scrollToAchievements}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                See Achievements
              </button>
             
              <button 
                onClick={scrollToPortfolio}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                See Projects
              </button>
            </div>
          </div>

          {/* Right Content - Avatar/Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img 
                    src="/image.png"
                    alt="Mohammed Aamer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400 rounded-full -z-10 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;