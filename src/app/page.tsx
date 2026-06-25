export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "Ex Immo ★114",
    "Administrasi",
  ];

  const projects = [
    {
      title: "Website Akademik",
      description:
        "Sistem informasi akademik berbasis web untuk pengelolaan data mahasiswa.",
    },
    {
      title: "Aplikasi Info terkait Meta MLBB",
      description:
        "Aplikasi analisis semua patch note yang mudah di pahami dan di mengerti player MLBB.",
    },
    {
      title: "Portofolio Pribadi",
      description:
        "Website portofolio responsif menggunakan Next.js dan Tailwind CSS.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* HERO */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 mb-2">Halooo, saya</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hadinur Rohmadina
            </h1>

            <h2 className="text-2xl text-slate-300 mb-6">
              Lulusan MAS Ma'had Al-Zaytun
            </h2>

            <p className="text-slate-400 leading-relaxed mb-8">
              Saya adalah mahasiswa S1 Teknik Informatika yang memiliki minat
              pada pengembangan website, UI/UX Design, dan teknologi modern.
              Saya senang mempelajari hal baru dan membangun solusi digital yang
              bermanfaat.
            </p>

            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
              >
                Lihat Portofolio
              </a>

              <a
                href="#contact"
                className="border border-cyan-500 px-6 py-3 rounded-lg"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/siganteng.jpeg"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full border-4 border-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Tentang Saya</h2>

          <p className="text-slate-300 leading-relaxed">
            Saya merupakan mahasiswa Teknik Informatika yang memiliki semangat
            tinggi dalam dunia teknologi informasi. Fokus saya saat ini adalah
            pengembangan aplikasi web menggunakan React, Next.js, dan Laravel.
            Selain itu saya juga tertarik pada bidang UI/UX dan pengembangan
            sistem informasi.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Keahlian</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 px-5 py-3 rounded-lg border border-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Pendidikan</h2>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-xl font-semibold">
              S1 Teknik Informatika
            </h3>

            <p className="text-slate-400">
              Universitas Pamulang • 2025 - Sekarang
            </p>

            <p className="mt-3 text-slate-300">
              Fokus pada pengembangan perangkat lunak, basis data,
              jaringan komputer, dan teknologi web modern.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Portofolio</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"
              >
                <div className="h-48 bg-slate-700"></div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400">
                    {project.description}
                  </p>

                  <button className="mt-5 text-cyan-400 hover:text-cyan-300">
                    Lihat Detail →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-slate-900 py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Kontak
          </h2>

          <div className="max-w-xl">
            <p className="text-slate-300 mb-4">
              Email: hadinurrohmadina3@gmail.com
            </p>

            <p className="text-slate-300 mb-4">
              WhatsApp: +62-877-1542-0932
            </p>

            <p className="text-slate-300">
              LinkedIn: linkedin.com/in/hadinur
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 Hadinur Rohmadina. All Rights Reserved.
      </footer>
    </main>
  );
}