"use client";
import Link from 'next/link';
import { useState, useMemo } from "react";
import categories from "@/data/apiCategory.json";

export default function APIsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const filteredCategories = useMemo(() => {
        let result = categories.filter((cat) => {
            const text = `${cat.name} ${cat.description}`.toLowerCase();
            return text.includes(searchQuery.toLowerCase());
        });

        return result.sort((a, b) => {
            if (sortOrder === "asc") return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });
    }, [searchQuery, sortOrder]);

    return (
        <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-lime-400/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto mb-12">
                <Link href="/" className="group inline-flex items-center gap-3 text-gray-500 hover:text-lime-400 transition-colors">
                    <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:bg-lime-400/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Return // Home</span>
                </Link>
            </div>

            <header className="max-w-7xl mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            System Modules // {filteredCategories.length} Categories
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            The API <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Matrix</span>
                        </h1>
                    </div>

                    {/* Search and Sort */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        
                        <div className="relative group flex-1 sm:w-80">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Filter by name or desc..."
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-lime-400/50 transition-all placeholder:text-gray-600 font-mono"
                            />
                        </div>

                        <button 
                            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:border-lime-400/30 transition-all group"
                        >
                            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-white">
                                Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
                            </span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="14" height="14" 
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                                className={`text-lime-400 transition-transform duration-300 ${sortOrder === "desc" ? "rotate-180" : ""}`}
                            >
                                <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </header>

            {/* CATEGORY GRID */}
            <div className="max-w-7xl mx-auto">
                {filteredCategories.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredCategories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/apis/${cat.slug}`}
                                className="group relative rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-8 hover:bg-[#0D0D0D] hover:border-lime-400/20 transition-all duration-500 overflow-hidden block"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 text-white flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black transition-all">
                                            <span className="font-mono text-xs font-black italic uppercase">
                                                {cat.slug.substring(0, 2)}
                                            </span>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime-400"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold tracking-tight mb-3 group-hover:text-lime-400 transition-colors uppercase">
                                        {cat.name}
                                    </h2>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {cat.description}
                                    </p>

                                    <div className="pt-4 border-t border-white/5">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-lime-400/50 group-hover:text-lime-400 font-bold transition-colors">
                                            Initialize // Module
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center border border-dashed border-white/10 rounded-[3rem]">
                        <div className="text-5xl mb-4 text-gray-800 font-black uppercase italic">Null Category</div>
                        <button onClick={() => setSearchQuery("")} className="mt-6 text-lime-400 text-xs font-bold uppercase tracking-widest hover:underline">
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}