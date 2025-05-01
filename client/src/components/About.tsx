import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              From Iran to Ottawa, my journey has been one of continuous learning and growth. 
              With a BSc in Software Engineering and an MA in Sociology focusing on Women's Studies, 
              I've bridged the worlds of technology and social sciences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>BSc in Software Engineering</li>
              <li>MA in Sociology (Women's Studies)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Career Path</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Store Art Design</li>
              <li>Software Development</li>
              <li>Costume Design</li>
              <li>Activism</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Research & Activism</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              My thesis on "Factors Deterring Women's Economic Participation by Families in the Local Community" 
              reflects my deep commitment to understanding and addressing gender inequality.
            </p>
            <p className="text-gray-600">
              I am passionate about feminism and dedicated to building resilience against discrimination 
              through both my professional work and community activism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 