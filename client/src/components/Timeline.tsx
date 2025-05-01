import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'education' | 'career' | 'activism';
}

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-light"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline dot */}
            <div className={`absolute left-3 w-4 h-4 rounded-full ${
              item.type === 'education' ? 'bg-primary-main' :
              item.type === 'career' ? 'bg-secondary-main' :
              'bg-primary-dark'
            }`}></div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="font-heading text-xl font-semibold text-primary-dark">{item.title}</h3>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 