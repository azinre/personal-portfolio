import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog posts will go here */}
        <article className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Blog Post Title</h2>
          <p className="text-gray-600 mb-4">Blog post excerpt goes here...</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Date</span>
            <button className="text-blue-600 hover:text-blue-800">Read More →</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog; 