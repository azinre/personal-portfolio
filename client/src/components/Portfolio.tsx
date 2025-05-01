import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="section-title">Portfolio</h1>
      
      {/* Software Development Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-subheading mb-8">Software Development</h2>
        <div className="portfolio-grid">
          <div className="card p-6">
            <h3 className="text-heading text-xl mb-4">School Management System</h3>
            <p className="text-body mb-4">A comprehensive system for managing school operations...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">Django</span>
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="btn btn-primary">View Demo</a>
              <a href="#" className="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-subheading mb-8">Design</h2>
        <div className="portfolio-grid">
          <div className="card p-6">
            <h3 className="text-heading text-xl mb-4">Activist Group Branding</h3>
            <p className="text-body mb-4">Visual identity and branding for feminist activist groups...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">Graphic Design</span>
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">Branding</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Activism Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-subheading mb-8">Activism</h2>
        <div className="portfolio-grid">
          <div className="card p-6">
            <h3 className="text-heading text-xl mb-4">Family Law Workshops</h3>
            <p className="text-body mb-4">Educational workshops on family law and women's rights...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">Workshops</span>
              <span className="bg-[#C4C5BA]/20 text-[#1B1B1B] px-3 py-1 rounded-full text-sm">Education</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 