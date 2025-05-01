import React from 'react';

const PersonalNarrative: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Story</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Intersectional Feminist Activist & Immigrant</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Your personal story goes here. This is where you can share your journey as an intersectional feminist activist and immigrant, highlighting your experiences, challenges, and achievements.
            </p>
            <p className="text-gray-600 mb-4">
              You can include sections about:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Your background and journey</li>
              <li>Your activism work</li>
              <li>Your experiences in technology</li>
              <li>Your vision for the future</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNarrative; 