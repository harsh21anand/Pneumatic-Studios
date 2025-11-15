import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import StartProjectButton from "../Components/StartProjectButton";
import Footer from "../Components/footer";


import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";





export default function Home() {

  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#05060a] via-[#071026] to-[#03030a] text-white antialiased overflow-x-hidden">
      {/* HEADER */}
      <header className="w-full px-12 py-8 flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-indigo-400 flex items-center justify-center font-bold">
            
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Pneumatic Studios</div>
            <div className="text-xs text-slate-400">
              Collective of design studios
            </div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a className="hover:text-white">Work</a>
          <a className="hover:text-white">Services</a>
          <a className="hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-transparent border border-slate-700 text-sm">
            Get in touch
          </button>
          <StartProjectButton />
        </div>
      </header>

      {/* HERO */}
      <main className="w-full px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
        <section>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Collective of design studios
            <br />
            helping start-ups scale faster
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-slate-300 max-w-xl"
          >
            We partner with Tech and AI startups to eliminate their upscaling
            bottlenecks: replacing a maze of 12+ third-party vendors with one
            seamless powerhouse.
          </motion.p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold inline-flex items-center gap-2">
              Get in touch <FiChevronRight />
            </button>
            <button className="px-5 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
              Services
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-slate-400">
            <div>
              <div className="text-sm text-white font-semibold">60K → 300K</div>
              <div>Avg growth</div>
            </div>
            <div>
              <div className="text-sm text-white font-semibold">3mo → 1wk</div>
              <div>Onboarding time</div>
            </div>
            <div>
              <div className="text-sm text-white font-semibold">10×</div>
              <div>Client growth</div>
            </div>
          </div>
        </section>

        {/* Animated Cube */}
      <section className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-80 h-80 flex items-center justify-center"
          >
            <div className="cube w-64 h-64">
              <div className="face face1"></div>
              <div className="face face2"></div>
              <div className="face face3"></div>
              <div className="face face4"></div>
              <div className="face face5"></div>
              <div className="face face6"></div>
            </div>
            <div className="absolute -bottom-6 text-xs text-slate-400">
              3D visual — placeholder
            </div>
          </motion.div>
        </section>
      </main>

      {/* CASE STUDIES */}
      <section className="w-full px-12 py-10 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">
            Designing the future, one venture at a time.
          </h3>
          <p className="text-slate-400 mt-2">
            We craft product design, UX and engineering to help startups scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CaseCard
            title="Pleq — Full Start-up Overhaul"
            tags={["Branding", "UX/UI Design", "Development"]}
            description="AI-enabled occupancy and utilization analytics platform for higher education and public organisations."
            image="https://m.economictimes.com/thumb/height-450,width-600,imgsize-1330184,msid-111271576/is-ai-taking-away-your-job-here-is-how-you-can-use-ai-to-get-more-jobs-know-in-detail.jpg"
          />
          <CaseCard
            title="ProdSense — Mobile Launch"
            tags={["Product", "Mobile", "Growth"]}
            description="Fast MVP for electric vehicle monitoring; 0→10k users in 90 days."
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWRchSqn4rrZPYcG4-jRHwXNLaFj0xTdY6w&s"
           />

          <CaseCard
            title="GreenGrid — Sustainability"
            tags={["Data", "Platform", "Cloud"]}
            description="IoT-enabled energy analytics for smart campuses."
          />
        </div>
      </section>

     <section>
        <div>
          {/* LEFT TEXT BLOCK */}
          <div className="w-full h-[600px] flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl sm:text-8xl font-extrabold leading-tight">
              Clarity.<br />
              <span className="text-indigo-400">Strategy.</span><br />
              <span className="text-pink-400">Momentum.</span>
            </h2>

            <p className="text-slate-400 mt-4 max-w-md">
              Your vision, our expertise. Building design that delivers results.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — HOVER IMAGE SWAP */}
      <section className="w-full px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES - FIXED PATHS */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
            {/* Using image constants (now placeholder URLs) */}
            <img 
                src={img1} 
                alt="Service image 1"
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${active === 1 ? "opacity-100" : "opacity-0"}`} 
            />
            <img 
                src={img2} 
                alt="Service image 2"
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${active === 2 ? "opacity-100" : "opacity-0"}`} 
            />
            <img 
                src={img3} 
                alt="Service image 3"
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${active === 3 ? "opacity-100" : "opacity-0"}`} 
            />
            <img 
                src={img4} 
                alt="Service image 4"
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${active === 4 ? "opacity-100" : "opacity-0"}`} 
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col gap-10 items-end text-right mr-0 pr-5 md:mr-10 md:pr-10 lg:mr-20 lg:pr-20">

            <div onMouseEnter={() => setActive(1)} className="cursor-pointer">
              <h3 className="text-4xl font-bold">Discover & Strategize</h3>
              <p className="text-slate-400 mt-2 text-sm">Research, interviews, market clarity.</p>
            </div>

            <div onMouseEnter={() => setActive(2)} className="cursor-pointer">
              <h3 className="text-4xl font-bold">Design & Experience</h3>
              <p className="text-slate-400 mt-2 text-sm">UX/UI, prototyping, motion systems.</p>
            </div>

            <div onMouseEnter={() => setActive(3)} className="cursor-pointer">
              <h3 className="text-4xl font-bold">Build & Launch</h3>
              <p className="text-slate-400 mt-2 text-sm">Engineering, analytics, scaling.</p>
            </div>

            <div onMouseEnter={() => setActive(4)} className="cursor-pointer">
              <h3 className="text-4xl font-bold">Grow & Evolve</h3>
              <p className="text-slate-400 mt-2 text-sm">Improvement cycles & growth.</p>
            </div>

          </div>

        </div>
      </section>




{/* CTA Section */}
<section className="w-full px-12 py-20 max-w-[1400px] mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-[#0a0f1f] to-[#05060a] p-10 rounded-2xl border border-slate-800 shadow-xl"
  >
    {/* Text Content */}
    <div className="max-w-xl">
      <h3 className="text-3xl md:text-4xl font-bold leading-snug">
        Let's build something that outlives the algorithm.
      </h3>
      <p className="text-slate-400 mt-3 text-lg">
        We partner with ambitious founders to design, launch, and scale the
        next generation of ventures.
      </p>
    </div>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex gap-4 flex-row-reverse md:flex-row"
    >
      <StartProjectButton />

      <button className="px-6 py-3 rounded-xl bg-transparent border border-slate-700 hover:border-slate-500 transition-all duration-300">
        Request strategy deck
      </button>
    </motion.div>
  </motion.div>
</section>


      <Footer />

      {/* Inline cube animation styles */}
      <style>{`
        .cube {
          position: relative;
          transform-style: preserve-3d;
          animation: spin 8s linear infinite;
        }
        .cube .face {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.95;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }
        .cube .face1 { transform: rotateY(0deg) translateZ(160px); background: linear-gradient(135deg,#0ea5e9,#a78bfa); }
        .cube .face2 { transform: rotateY(90deg) translateZ(160px); background: linear-gradient(135deg,#06b6d4,#f472b6); }
        .cube .face3 { transform: rotateY(180deg) translateZ(160px); background: linear-gradient(135deg,#60a5fa,#a78bfa); }
        .cube .face4 { transform: rotateY(-90deg) translateZ(160px); background: linear-gradient(135deg,#06b6d4,#7c3aed); }
        .cube .face5 { transform: rotateX(90deg) translateZ(160px); background: linear-gradient(135deg,#14b8a6,#06b6d4); }
        .cube .face6 { transform: rotateX(-90deg) translateZ(160px); background: linear-gradient(135deg,#ec4899,#f97316); }
        @keyframes spin { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @media (max-width: 640px) { .cube { width: 220px; height: 220px; } }
      `}</style>
    </div>
  );
}

// Helper components
function CaseCard({ title, tags, description, image }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-gradient-to-br from-[#071028] to-[#050517] p-6 rounded-2xl border border-slate-800 shadow-lg transition-all duration-300"
    >
      {/* ✅ Image Section */}
      {image ? (
        <div className="w-full h-[250px] rounded-xl mb-4 overflow-hidden relative flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      ) : (
        <div className="h-40 rounded-lg mb-4 bg-[linear-gradient(135deg,#0ea5e9,#7c3aed)] flex items-end p-4 text-sm font-semibold">
          Project visual
        </div>
      )}

      {/* Text Section */}
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-slate-300 mt-2 text-sm">{description}</p>

      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-slate-800 px-2 py-1 rounded-md text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}


function ServiceCard({ title, body }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-gradient-to-br from-[#04102a] to-[#06101a] border border-slate-800"
    >
      <div className="w-12 h-12 rounded-lg bg-slate-800 mb-3 flex items-center justify-center font-bold">
        S
      </div>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-slate-400 mt-2 text-sm">{body}</p>
    </motion.div>
  );
}
