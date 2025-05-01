import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service cards will go here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-600 mb-4">Custom web applications built with modern technologies...</p>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 