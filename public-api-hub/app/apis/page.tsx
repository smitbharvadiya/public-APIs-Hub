"use client";
import Link from 'next/link';
import { useState } from "react";
import apis from "@/data/apiCategory.json";

export default function APIsPage() {
    const [copiedAPI, setCopiedAPI] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleCopy = (url: string | undefined) => {
        navigator.clipboard.writeText(url ?? "");
        setCopiedAPI(url ?? "");
        setTimeout(() => setCopiedAPI(null), 2000);
    };

    const filteredApis = apis.filter((api) => {
        const searchContent = `${api.name} ${api.category} ${api.description}`.toLowerCase();
        return searchContent.includes(searchQuery.toLowerCase());
    });

    return (
        <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-lime-400/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto mb-12">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3 text-gray-500 hover:text-lime-400 transition-colors duration-300"
                >
                    <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-lime-400/30 group-hover:bg-lime-400/10 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                        Return // Home
                    </span>
                </Link>
            </div>

            <header className="max-w-7xl mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            Archive Index // {filteredApis.length} Result{filteredApis.length !== 1 ? 's' : ''}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Matrix</span>
                        </h1>
                    </div>

                    {/* 3. CONTROLLED INPUT */}
                    <div className="relative w-full md:w-80 group">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search endpoints..."
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-lime-400/50 transition-all placeholder:text-gray-600 focus:bg-white/[0.08]"
                        />
                    </div>
                </div>
            </header>

            {/* THE GRID */}
            <div className="max-w-7xl mx-auto">
                {filteredApis.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredApis.map((api) => (
                            <div
                                key={api.name}
                                className="group relative rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-8 hover:bg-[#0D0D0D] hover:border-white/20 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${copiedAPI === api.url ? 'bg-lime-400 text-black' : 'bg-white/5 text-white group-hover:bg-lime-400 group-hover:text-black'}`}>
                                            <span className="font-mono text-sm font-bold italic">
                                                {copiedAPI === api.url ? "✓" : "</>"}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            {api.https && (
                                                <span className="text-[9px] text-lime-400 border border-lime-400/30 px-2 py-1 rounded-md uppercase tracking-widest font-bold">
                                                    SSL
                                                </span>
                                            )}
                                            <span className="text-[9px] text-gray-500 border border-white/10 px-2 py-1 rounded-md uppercase tracking-widest font-bold">
                                                {api.auth === "No" ? "Open" : "Auth"}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-lime-400 transition-colors">
                                        {api.name}
                                    </h2>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-2">
                                        {api.description}
                                    </p>

                                    <div className="mt-2 mb-6">
                                        <button
                                            onClick={() => handleCopy(api.url)}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 w-full group/url hover:border-lime-400/30 transition-all cursor-pointer select-none active:scale-95"
                                        >
                                            <span className={`text-[10px] font-mono truncate flex-1 text-left ${copiedAPI === api.url ? "text-lime-400 font-bold" : "text-gray-600"}`}>
                                                {copiedAPI === api.url ? "Successfully Copied" : api.url}
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${copiedAPI === api.url ? 'text-lime-400' : 'text-gray-700 group-hover/url:text-lime-400'}`}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                                            {api.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* 4. Sleek Empty State */
                    <div className="py-40 text-center border border-dashed border-white/10 rounded-[3rem]">
                        <div className="text-5xl mb-4 text-gray-800 font-black uppercase italic">Null Response</div>
                        <p className="text-gray-500 font-mono text-sm">No endpoints match your query in the current matrix.</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-6 text-lime-400 text-xs font-bold uppercase tracking-widest hover:underline"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}