import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-8 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl text-white font-black tracking-tighter uppercase mb-6 block">
              API<span className="text-lime-400">.</span>Nexus
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              The premier archive for high-performance public endpoints. Curated for developers who build at the speed of thought.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'Discord'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-lime-400 hover:border-lime-400/50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-80" /> 
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Directory</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/api" className="hover:text-lime-400 transition-colors">All Sectors</Link></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Popular APIs</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">New Modules</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">System</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Status Core</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">API Specs</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Open Source</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Join the Network</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="system@domain.com" 
                className="w-full text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400/50 transition-all font-mono"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-lime-400 transition-all">
                CONNECT
              </button>
            </div>
            <p className="mt-4 text-[10px] text-gray-600 font-mono italic">
              * Receive updates on new verified endpoints.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-gray-600 flex items-center gap-4">
            <span>© 2026 API.NEXUS // CORE_V1.0</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span className="animate-pulse">SYSTEM_ONLINE</span>
          </div>
          
          <div className="flex gap-8 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms_of_Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}