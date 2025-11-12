import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const About: React.FC = () => {
  const experience = [
    {
      title: "Cloud Computing Intern",
      company: "Cultus Education (Offered by TNSDC)",
      period: "July 2025 - NOV 2025",
      description: "Completed the AWS re/Start cloud training program focused on AWS core services, Linux, networking fundamentals, and Python. Collaborated with a team to design and deploy scalable cloud-based solutions. Deployed and hosted a website using Amazon S3 and EC2 instances configured with Apache (httpd) and Nginx web servers. Gained practical experience in AWS services including EC2, S3, IAM, and RDS, along with cloud infrastructure setup, monitoring, and automation best practices."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate AWS Cloud Engineer with expertise in building intelligent systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="/Thiyagu2.png" 
                      alt="AI Engineer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-2">Thiyagu S</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-center mb-4">AWS Cloud Practitioner</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a href="https://github.com/Thiyagu-2003" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                      <GitHub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/thiyagu-s-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:sthiyagu466@gmail.com" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">BCA (Bachelor of Computer Applications)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">University of Madras, 2025</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Certifications</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">AWS Certified Cloud Practitioner</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">AWS Re/start Graduate</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services Training and Certification, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">AWS Educate Student</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2025-Present</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-6">
                <h4 className="font-bold mb-4">Professional Summary</h4>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm a fresh graduate with a Bachelor's degree in Information Technology, specializing in cloud computing and AWS technologies. Through academic projects, internships, and hands-on labs, I've gained practical experience with AWS core services, cloud architecture principles, and infrastructure automation.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm passionate about cloud technologies and eager to begin my career as an AWS Cloud Practitioner. I'm committed to continuous learning and staying current with the latest AWS services and best practices. I'm seeking an entry-level position where I can apply my knowledge and grow my expertise in cloud infrastructure and solutions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-6">
                <h4 className="font-bold mb-6">Work Experience</h4>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
                        {index < experience.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-1.5 my-2"></div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium">{job.title}</h5>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>{job.company}</span>
                          <span className="mx-2">•</span>
                          <span>{job.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Resume Section */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Download My Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a detailed overview of my education, skills, and projects
              </p>
              <a 
                href="/resume.pdf" 
                download="Thiyagu_S_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                PDF format • Last updated: November 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;