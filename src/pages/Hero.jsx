import { useState } from 'react'
import logoCss from '../assets/css-3.svg'
import logoHTML from '../assets/html-5.svg'
import logojavascript from '../assets/javascript.svg'
import logoMongoDB from '../assets/mongodb.svg'
import logoNode from '../assets/nodejs.svg'
import logoReact from '../assets/react.svg'
import logoTailwind from '../assets/tailwind.svg'
import backGround from '../assets/file cover - 1.png'

import { NavLink, Navigate } from 'react-router-dom'


export default function (){


    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <>
            <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-700 to-gray-800 overflow-hidden"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8fGJsdWV8MTc1MjQyNjAyM3ww&ixlib=rb-4.1.0&q=85"
                    alt="Web Development"
                    className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Soluzioni web
                        <span className="block text-blue-400">Per ogni esigenza</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Con web solution offriamo semplici risultati per il tuo business,
                        Prenotazioni online custom e facilità d'utilizzo
                    </p>
                    
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                        onClick={() => scrollToSection("portfolio")}
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                        View My Work
                        </button>
                        <button
                        onClick={() => scrollToSection("contact")}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                        >
                        Get Started Today
                        </button>
                    </div>
                    
                    <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
                        <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Fast & Mobile-First</span>
                        </div>
                        <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>SEO Optimized</span>
                        </div>
                        <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>
        </>
    )
}