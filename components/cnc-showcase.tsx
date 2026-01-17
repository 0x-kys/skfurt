"use client";

import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactDialog } from "@/components/contact-dialog";

// Define Types
type CncCategory = "Jali Cutting" | "3D Carving" | "Engraving & Signage" | "Parametric Design";

const CATEGORIES: CncCategory[] = [
  "Jali Cutting",
  "3D Carving",
  "Engraving & Signage",
  "Parametric Design",
];

interface Project {
  id: number;
  title: string;
  category: CncCategory;
  image: string;
  desc?: string;
}

const PROJECTS: Project[] = [
  // Jali Cutting
  {
    id: 1,
    title: "Geometric Partition Screen",
    category: "Jali Cutting",
    image: "https://loremflickr.com/800/600/lattice,wood?lock=1",
    desc: "Intricate geometric patterns for modern space division.",
  },
  {
    id: 2,
    title: "Floral Mandir Backdrop",
    category: "Jali Cutting",
    image: "https://loremflickr.com/800/600/mandala,pattern?lock=2",
    desc: "Traditional floral motifs cut into MDF for spiritual spaces.",
  },
  {
    id: 3,
    title: "Ceiling Pattern",
    category: "Jali Cutting",
    image: "https://loremflickr.com/800/600/ceiling,design?lock=3",
    desc: "Decorative false ceiling panels.",
  },

  // 3D Carving
  {
    id: 4,
    title: "Ornate Door Panel",
    category: "3D Carving",
    image: "https://loremflickr.com/800/600/wood,carving?lock=4",
    desc: "Deep relief carving for main entrance doors.",
  },
  {
    id: 5,
    title: "Bas-Relief Wall Art",
    category: "3D Carving",
    image: "https://loremflickr.com/800/600/relief,sculpture?lock=5",
    desc: "Artistic wall pieces carved from solid wood.",
  },
  {
    id: 6,
    title: "Furniture Legs & Accents",
    category: "3D Carving",
    image: "https://loremflickr.com/800/600/antique,furniture?lock=6",
    desc: "Custom carved components for bespoke furniture.",
  },

  // Engraving & Signage
  {
    id: 7,
    title: "Corporate Wooden Signage",
    category: "Engraving & Signage",
    image: "https://loremflickr.com/800/600/sign,wood?lock=7",
    desc: "Professional branding with precision engraving.",
  },
  {
    id: 8,
    title: "Personalized Nameplates",
    category: "Engraving & Signage",
    image: "https://loremflickr.com/800/600/nameplate?lock=8",
    desc: "Custom nameplates for homes and offices.",
  },

  // Parametric Design
  {
    id: 9,
    title: "Wavy Parametric Wall",
    category: "Parametric Design",
    image: "https://loremflickr.com/800/600/parametric,architecture?lock=9",
    desc: "Flowing organic shapes created with stacked plywood slices.",
  },
  {
    id: 10,
    title: "Modern Reception Desk",
    category: "Parametric Design",
    image: "https://loremflickr.com/800/600/wood,structure?lock=10",
    desc: "Futuristic reception desk design.",
  },
];

export default function CncShowcase() {
  const [activeCategory, setActiveCategory] = useState<CncCategory>("Jali Cutting");

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="cnc-showcase" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-stone-900">CNC Portfolio</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Explore our diverse range of computer-controlled machining capabilities, from delicate screens to robust structural elements.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2",
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-stone-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Button variant="secondary" size="icon" className="rounded-full h-12 w-12 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 border-none">
                     <Maximize2 className="h-5 w-5" />
                   </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-amber-600 transition-colors" />
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="pt-4 border-t border-stone-100">
                    <span className="inline-block text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <ContactDialog>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-14 text-lg rounded-full shadow-amber-900/20 shadow-lg">
                Start Your Custom Project
              </Button>
            </ContactDialog>
        </div>
      </div>
    </section>
  );
}
