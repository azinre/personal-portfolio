import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium">Master of Arts in Sociology</h3>
                <p className="text-gray-600">Focus on Women's Studies</p>
                <p className="text-sm text-gray-500">Year - Year</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium">Bachelor of Science in Software Engineering</h3>
                <p className="text-gray-600">University Name</p>
                <p className="text-sm text-gray-500">Year - Year</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium">AWS DevOps Engineer</h3>
                <p className="text-gray-600">Agile Technologies</p>
                <p className="text-sm text-gray-500">Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Developing and maintaining cloud infrastructure using AWS services</li>
                  <li>Implementing CI/CD pipelines and automation solutions</li>
                  <li>Working with Docker containerization and Kubernetes</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium">DevOps Engineer</h3>
                <p className="text-gray-600">HackerRank</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Managed and optimized cloud infrastructure</li>
                  <li>Implemented automation solutions for development workflows</li>
                  <li>Collaborated with cross-functional teams to improve development processes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-3 rounded">
                <h3 className="font-medium mb-2">Cloud & DevOps</h3>
                <ul className="text-gray-600">
                  <li>AWS Services</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>Infrastructure as Code</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <h3 className="font-medium mb-2">Programming</h3>
                <ul className="text-gray-600">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Shell Scripting</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <h3 className="font-medium mb-2">Tools & Platforms</h3>
                <ul className="text-gray-600">
                  <li>Git</li>
                  <li>Jenkins</li>
                  <li>Terraform</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact & Links */}
          <section className="text-center mt-8">
            <a
              href="https://www.linkedin.com/in/azinre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-main hover:text-primary-dark mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>

            <a
              href="/path-to-your-resume.pdf"
              download
              className="inline-block bg-primary-main text-white py-2 px-6 rounded-md hover:bg-primary-dark ml-4"
            >
              Download Resume PDF
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume; 