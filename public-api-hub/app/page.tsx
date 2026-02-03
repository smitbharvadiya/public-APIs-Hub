import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden">

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-black tracking-tighter uppercase">API.Nexus</div>
        <div className="space-x-8 text-sm font-medium text-gray-400 hidden md:flex">
          <a href="#" className="hover:text-white transition-colors">Directory</a>
          <a href="#" className="hover:text-white transition-colors">Playground</a>
          <a href="#" className="hover:text-white transition-colors">Status</a>
        </div>
        <Link href="/apis" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-400 transition-all active:scale-95">
          Explore Hub
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 pt-24 pb-12 text-center relative">
        <span className="inline-block py-1 px-3 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6">
          THE ENDPOINT ARCHIVE
        </span>
        <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Faster</span><br />
          Than Ever.
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
          The world's most aesthetic hub for public APIs. We find the data, you build the future. No more dead links, just pure endpoints.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          <div className="md:col-span-8 group relative bg-white/5 border border-white/10 rounded-[2rem] p-10 overflow-hidden hover:bg-white/[0.08] transition-all">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Why explore?</h2>
              <p className="text-gray-400 text-lg max-w-md">
                We've indexed 5,000+ APIs with real-time uptime tracking. Filter by Auth, HTTPS, and CORS in a single click.
              </p>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-64 h-40 bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs text-lime-400 opacity-50 group-hover:opacity-100 transition-opacity">
              {`{ "status": 200, "data": "Ready" }`}
            </div>
          </div>

          <div className="md:col-span-4 bg-lime-400 rounded-[2rem] p-10 text-black flex flex-col justify-between hover:rotate-1 transition-transform">
            <h2 className="text-4xl font-bold tracking-tight leading-none">Who is it for?</h2>
            <p className="font-medium text-black/80 mt-8">
              For the hackers, the students, and the "I have an idea" late-night engineers.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full blur-xl mb-4 animate-pulse"></div>
            <h3 className="text-xl font-bold">Verified Only</h3>
            <p className="text-gray-500 text-sm mt-2">Zero broken endpoints.</p>
          </div>

          <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full blur-xl mb-4 animate-pulse"></div>
            <h3 className="text-xl font-bold">1-Click Integration</h3>
            <p className="text-gray-500 text-sm mt-2">Copy snippets instantly.</p>
          </div>

          <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full blur-xl mb-4 animate-pulse"></div>
            <h3 className="text-xl font-bold">Community Fed</h3>
            <p className="text-gray-500 text-sm mt-2">100% Open Source.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-6">Ready to plug in?</h2>
        <button className="group relative px-8 py-4 bg-white text-black font-black rounded-full overflow-hidden transition-all">
          <Link href="/apis" className="relative z-10">EXPLORE ARCHIVE</Link>
          <div className="absolute inset-0 bg-lime-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </footer>
    </div>
  );
}
