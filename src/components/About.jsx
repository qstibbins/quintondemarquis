import React from 'react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'Django', 'GraphQL'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Kubernetes'] }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="section">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h2 className="heading-2">About Me</h2>
              <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience 
                crafting digital solutions that make a difference. My journey in tech 
                began with curiosity and has evolved into a career dedicated to building 
                exceptional user experiences.
              </p>
              
              <p>
                I specialize in modern web technologies and love working on challenging 
                projects that push the boundaries of what's possible. Whether it's a 
                sleek frontend interface or a robust backend system, I bring both 
                technical expertise and creative thinking to every project.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center"
              >
                Let's Work Together
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Skills & Stats */}
          <div className="space-y-8 slide-in-right">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl hover-lift"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-zinc-400 text-sm font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="heading-3">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold text-zinc-300">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="tech-stack-item"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 pt-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Innovation</h4>
              <p className="text-zinc-400">
                Always exploring cutting-edge technologies and methodologies to deliver 
                state-of-the-art solutions.
              </p>
            </div>

            <div className="text-center space-y-4 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Performance</h4>
              <p className="text-zinc-400">
                Optimizing every aspect of the development process for speed, 
                efficiency, and scalability.
              </p>
            </div>

            <div className="text-center space-y-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold">User-Centric</h4>
              <p className="text-zinc-400">
                Designing with the end-user in mind, creating intuitive and 
                delightful experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
