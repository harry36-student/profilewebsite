import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Construction, Github, Code, ExternalLink, AlertTriangle } from 'lucide-react';

function App() {
  const [showMaintenance, setShowMaintenance] = useState(true);

  return (
    <div className="min-h-screen bg-light">
      <Navbar />

      {/* Maintenance Announcement Banner */}
      {showMaintenance && (
        <div className="fixed top-16 w-full bg-yellow-100 border-b border-yellow-200 px-4 py-2 z-40 flex justify-between items-center animate-fade-in-down">
          <div className="flex items-center gap-2 text-yellow-800 mx-auto">
            <AlertTriangle size={18} />
            {/*<span className="font-medium">系統公告: 網站部分功能 ["404"正在更新中....]</span>*/}
          </div>
          <button onClick={() => setShowMaintenance(false)} className="text-yellow-600 hover:text-yellow-800">
            ✕
          </button>
        </div>
      )}

      <main className="pt-24 px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
              Welcome to my portfolio
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-dark mb-8 tracking-tight">
              Computer Science<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Master's student</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Exploring the frontiers of technology and design.
              Creating vibrant implementation from nothing.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#Projects" className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all">
                Projects
              </a>
              <a href="#About" className="px-8 py-3 bg-white text-dark border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all">
                About
              </a>
            </div>
          </div>
        </section>
        {/* about section */}
        <section id="About" className="py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-dark mb-3">About</h3>
                <p className="text-gray-500 mb-6">
                  name: Yung-Yu,Chang
                  <br />
                  education: Master's student in Computer Science
                  <br />
                  department: Computer Science
                  <br />
                  school: National Quemoy University
                  <br />
                  email: yuhome31@gmail.com
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">Node.js</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="Projects" className="py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Work in Progress Card (Requested Feature) */}
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-light rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Construction size={32} />
                  </div>
                  <span className="px-4 py-1.5 bg-yellow-50 text-yellow-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    Build in Progress
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                  作業中 (Working)
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Currently developing a new personalized web experience. Stay tuned for the upcoming release.
                </p>

                <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-accent to-orange-400 h-full rounded-full w-[60%] animate-pulse"></div>
                </div>
                <p className="text-xs text-right text-gray-400 font-mono">60% Complete</p>
              </div>

              {/* Placeholder Project 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Code size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Api Backend</h3>
                <p className="text-gray-500 mb-6">
                  High-performance REST API built with modern technologies.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">Node.js</span>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <img src="https://www.credly.com/badges/493f635d-f8ff-4c06-870c-1a4ce4991069/public_url?size=500x500" alt="Google Cloud Data Analytics badge" className="w-full rounded-2xl" />
            </div>
            <div className="md:order-2">
              <img src="https://www.credly.com/badges/72ac0d44-0eb6-4cd3-9642-e9a4d413ba9c/public_url?size=500x500" alt="Securing MongoDB Atlas: Authentication & Authorization badge" className="w-full rounded-2xl" />
            </div>
            <div className="md:order-3">
              <img src="https://www.credly.com/badges/1ea68b06-bde8-4329-aaa5-f477fa7699c2/public_url?size=500x500" alt="Building AI-Powered Search with MongoDB Vector Search badge" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 text-center text-gray-400 border-t bg-white">
        <p>© 2024 Harry. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
