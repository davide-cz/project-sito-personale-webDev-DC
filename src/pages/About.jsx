import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Digital Success for
                <span className="block text-cyan-700">Small Businesses</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ciao, sono un web developer full-stack e creo soluzioni web per piccole/medie realtà.
                Assieme possiamo creare un sito che più si adatta al tuo business.
                {/* Hi, I'm a full-stack developer specializing in creating web solutions 
                for small businesses. I understand that every business is unique, and I work 
                closely with my clients to deliver custom websites that drive real results. */}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Modern Technology Stack
                  </h3>
                  <p className="text-gray-600">
                    Using React, Node.js, and MongoDB to build fast, secure, and scalable 
                    websites that grow with your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    End-to-End Solutions
                  </h3>
                  <p className="text-gray-600">
                    From design to deployment, I handle every aspect of your web project 
                    so you can focus on running your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8fGJsdWV8MTc1MjQyNjAyM3ww&ixlib=rb-4.1.0&q=85"
                alt="Web Development Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;