import React from 'react';

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-purple-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-purple-700 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Hello, I’m [Your Name]</h2>
        <p className="text-lg mb-8">A passionate developer building solutions that matter</p>
        <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Check out my work
        </button>
      </section>

      {/* About Me */}
      <section id="about" className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg max-w-2xl mx-auto">
          I’m a software developer with a passion for creating impactful applications.
          I specialize in front-end development using React, and back-end services with Node.js and Django.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold mb-2">Project 1</h4>
          <p className="text-gray-700">A brief description of the project.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p className="mb-6 text-lg">Feel free to reach out for collaboration or inquiries.</p>
        <a href="mailto:your@email.com" className="bg-purple-700 text-white px-6 py-3 rounded font-semibold hover:bg-purple-800 transition">
          Email Me
        </a>
      </section>
    </div>
  );
}
