"use client";
import { useState, use, useMemo } from "react";
import Link from 'next/link';
import allApis from "@/data/apiData.json"; 
import categories from "@/data/apiCategory.json";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedAPI, setCopiedAPI] = useState<string | null>(null);
    
    const categoryInfo = categories.find(cat => cat.slug === slug);

    const filteredApis = useMemo(() => {
        return allApis.filter((api) => {
            const matchesCategory = api.category.toLowerCase() === categoryInfo?.name.toLowerCase();
            const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, categoryInfo]);

    const handleCopy = (url: string) => {
        if (!url) return;
        navigator.clipboard.writeText(url);
        setCopiedAPI(url);
        setTimeout(() => setCopiedAPI(null), 2000);
    };

    if (!categoryInfo) {
        return (
            <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-mono p-4">
                <div className="text-lime-400 mb-4 animate-pulse">404 // SECTOR_NOT_FOUND</div>
                <Link href="/api" className="text-xs border-b border-white/20 hover:border-lime-400 transition-colors">
                    RETURN_TO_CORE
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-lime-400/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto">

                {/* Back Link */}
                <div className="mb-16">
                    <Link href="/api" className="group inline-flex items-center gap-3 text-gray-500 hover:text-lime-400 transition-colors">
                        <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:bg-lime-400/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Back // Matrix Index</span>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-lime-400 text-black px-3 py-1 rounded font-mono text-[10px] font-bold uppercase tracking-widest">
                                    Sector: {slug}
                                </span>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>
                            
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                                {categoryInfo.name} <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-transparent italic">Resources</span>
                            </h1>
                            
                            <p className="text-gray-400 text-xl font-light leading-relaxed">
                                {categoryInfo.description}
                            </p>
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-80 group">
                            <div className="absolute inset-0 bg-lime-400/5 blur-xl rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                            <input 
                                type="text"
                                placeholder="Search endpoints..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="relative w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm font-mono focus:outline-none focus:border-lime-400/40 focus:ring-1 focus:ring-lime-400/20 transition-all placeholder:text-gray-700"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <span className="h-4 w-[1px] bg-white/10" />
                                <span className="text-lime-400/50 font-mono text-[10px] font-bold">
                                    {filteredApis.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* API Grid */}
                {filteredApis.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredApis.map((api) => (
                            <div 
                                key={api.name}
                                className="group relative rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-8 hover:border-lime-400/30 transition-all duration-500"
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${copiedAPI === api.url ? 'bg-lime-400 text-black' : 'bg-white/5 text-white/40'}`}>
                                            <span className="font-mono text-xs font-bold">{copiedAPI === api.url ? "✓" : "</>"}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            {api.https && <span className="text-[9px] text-lime-400 border border-lime-400/30 px-2 py-1 rounded-md uppercase font-bold tracking-tighter">SSL</span>}
                                            <span className="text-[9px] text-gray-500 border border-white/10 px-2 py-1 rounded-md uppercase font-bold tracking-tighter">{api.auth === "No" ? "Open" : "Auth"}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-lime-400 transition-colors">
                                        {api.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-2 min-h-[40px]">
                                        {api.description}
                                    </p>

                                    <button
                                        onClick={() => handleCopy(api.url || "")}
                                        className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 w-full hover:border-lime-400/50 transition-all active:scale-[0.98] cursor-pointer"
                                    >
                                        <span className={`text-[10px] font-mono truncate flex-1 text-left relative z-10 transition-colors ${copiedAPI === api.url ? "text-lime-400 font-bold" : "text-gray-400 group-hover/btn:text-white"}`}>
                                            {copiedAPI === api.url ? "Copied to Clipboard" : api.url || "View Endpoint"}
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`relative z-10 ${copiedAPI === api.url ? "text-lime-400" : "text-gray-600"}`}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center border border-dashed border-white/5 rounded-[3rem] bg-white/[0.01]">
                        <p className="text-gray-600 font-mono uppercase tracking-[0.4em] text-xs">
                            No active protocols found in {categoryInfo.name} sector.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}