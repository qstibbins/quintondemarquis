import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: ["React", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend Technologies", 
      icon: "⚙️",
      skills: [".NET Core", "C#", "Node.js", "Python", "ASP.NET", "Web APIs", "RESTful Services", "Microservices"]
    },
    {
      title: "Databases & Analytics",
      icon: "📊", 
      skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Modeling", "ETL Pipelines", "Azure Functions"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Azure DevOps", "Jenkins", "Terraform"]
    },
    {
      title: "Development Practices",
      icon: "🔧",
      skills: ["Agile/Scrum", "TDD", "Code Reviews", "API Design", "Security Best Practices", "Performance Optimization"]
    },
    {
      title: "Data Science & ML",
      icon: "🤖",
      skills: ["Python", "NumPy", "scikit-learn", "Pandas", "Data Visualization", "NLP", "Predictive Modeling", "Statistical Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="text-center mb-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Highlights</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">13+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                <div className="text-sm text-gray-600">Performance Gains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}