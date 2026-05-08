export default function HaseebHubWebsite() {
  const features = [
    {
      title: 'Modern Web Solutions',
      desc: 'Fast, responsive and scalable websites crafted for startups, creators and businesses.',
    },
    {
      title: 'Creative Design',
      desc: 'Premium UI/UX with smooth animations and a modern dark aesthetic.',
    },
    {
      title: 'Automation & AI',
      desc: 'Smart integrations, AI workflows and automation tools for modern businesses.',
    },
  ];

  const projects = [
    'AI Chat Dashboard',
    'Gaming Community Platform',
    'Business Portfolio Website',
    'Social Media Automation',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_40%),radial-gradient(circle_at_bottom_left,#7c3aed22,transparent_40%)]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">Haseeb</span>Hub
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <button className="px-5 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-32"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-md mb-6">
          ⚡ Building The Future With Design & AI
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Welcome To <span className="text-blue-500">HaseebHub</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
          A modern digital hub focused on creating stunning web experiences,
          AI-powered systems and creative online solutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg font-semibold shadow-2xl shadow-blue-500/30">
            Explore Services
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-lg font-semibold backdrop-blur-md">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
          {[
            ['50+', 'Projects Completed'],
            ['24/7', 'Support & Innovation'],
            ['100%', 'Creative Focus'],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-xl"
            >
              <div className="text-4xl font-black text-blue-500">{num}</div>
              <div className="mt-2 text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            HaseebHub combines technology, creativity and modern development
            to create premium digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition duration-300 backdrop-blur-md shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                ✨
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-6 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
              <p className="mt-4 text-gray-400 max-w-2xl">
                A glimpse into some innovative solutions and modern platforms.
              </p>
            </div>

            <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg shadow-blue-500/20">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 min-h-[250px] shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="text-sm text-blue-400 mb-4">
                    Project 0{index + 1}
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{project}</h3>

                  <p className="text-gray-400 leading-relaxed">
                    Modern UI, scalable architecture and high-performance
                    development focused on user experience.
                  </p>

                  <button className="mt-8 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-28 text-center">
        <div className="max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-14 backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready To Build Something Amazing?
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Let HaseebHub transform your ideas into modern digital products.
          </p>

          <button className="mt-10 px-10 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-transform shadow-2xl">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-gray-500"
      >
        <div className="text-2xl font-bold text-white mb-4">
          <span className="text-blue-500">Haseeb</span>Hub
        </div>

        <p>
          © 2026 HaseebHub. Designed with modern aesthetics & futuristic vibes.
        </p>
      </footer>
    </div>
  );
}
