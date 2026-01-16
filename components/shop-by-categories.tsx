"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactDialog } from "@/components/contact-dialog";

// Define the Category type
type Category =
  | "Living Area"
  | "Dining"
  | "Bedroom"
  | "Modular Kitchen"
  | "Storage";

const CATEGORIES: Category[] = [
  "Living Area",
  "Dining",
  "Bedroom",
  "Modular Kitchen",
  "Storage",
];

// Data for each category flattened
const allProjects: {
  id: number;
  name: string;
  category: Category;
  image: string;
}[] = [
  // Living Area (Sofas, LED Bases/TV Units)
  {
    id: 101,
    name: "Luxury L-Shape Sofa",
    category: "Living Area",
    image: "https://loremflickr.com/600/800/sofa,modern?lock=101",
  },
  {
    id: 102,
    name: "Modern TV Unit & LED Base",
    category: "Living Area",
    image: "https://loremflickr.com/600/800/tv,unit,furniture?lock=102",
  },
  {
    id: 103,
    name: "Velvet Accent Chair",
    category: "Living Area",
    image: "https://loremflickr.com/600/800/armchair?lock=103",
  },
  {
    id: 104,
    name: "Floating Console Table",
    category: "Living Area",
    image: "https://loremflickr.com/600/800/console,table?lock=104",
  },

  // Dining (Tables, Chairs)
  {
    id: 201,
    name: "6-Seater Oak Dining Set",
    category: "Dining",
    image: "https://loremflickr.com/600/800/dining,table?lock=201",
  },
  {
    id: 202,
    name: "Upholstered Dining Chairs",
    category: "Dining",
    image: "https://loremflickr.com/600/800/chair,dining?lock=202",
  },
  {
    id: 203,
    name: "Marble Top Dining Table",
    category: "Dining",
    image: "https://loremflickr.com/600/800/marble,table?lock=203",
  },

  // Bedroom (Beds)
  {
    id: 301,
    name: "King Size Platform Bed",
    category: "Bedroom",
    image: "https://loremflickr.com/600/800/bed,modern?lock=301",
  },
  {
    id: 302,
    name: "Upholstered Headboard Bed",
    category: "Bedroom",
    image: "https://loremflickr.com/600/800/bed,luxury?lock=302",
  },
  {
    id: 303,
    name: "Bedside Tables",
    category: "Bedroom",
    image: "https://loremflickr.com/600/800/nightstand?lock=303",
  },

  // Storage (Almirah, Cupboards)
  {
    id: 401,
    name: "Floor-to-Ceiling Wardrobe",
    category: "Storage",
    image: "https://loremflickr.com/600/800/wardrobe?lock=401",
  },
  {
    id: 402,
    name: "Walk-in Closet Design",
    category: "Storage",
    image: "https://loremflickr.com/600/800/closet?lock=402",
  },
  {
    id: 403,
    name: "Wooden Almirah",
    category: "Storage",
    image: "https://loremflickr.com/600/800/cupboard?lock=403",
  },

  // Modular Kitchen
  {
    id: 501,
    name: "L-Shaped Modular Kitchen",
    category: "Modular Kitchen",
    image: "https://loremflickr.com/600/800/kitchen,modern?lock=501",
  },
  {
    id: 502,
    name: "Island Kitchen Setup",
    category: "Modular Kitchen",
    image: "https://loremflickr.com/600/800/kitchen,island?lock=502",
  },
  {
    id: 503,
    name: "High-Gloss Kitchen Cabinets",
    category: "Modular Kitchen",
    image: "https://loremflickr.com/600/800/kitchen,cabinet?lock=503",
  },
];

export default function ExploreByCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const filteredProjects =
    selectedCategories.length === 0
      ? allProjects
      : allProjects.filter((p) => selectedCategories.includes(p.category));

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // approx card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="showcase"
      className="py-16 lg:py-24 overflow-hidden relative group"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Signature Works
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A showcase of our finest custom LED bases, modular kitchens,
              wardrobes, and furniture.
            </p>
          </div>
          <div className="hidden md:block">
            <ContactDialog>
              <Button className="px-6" size="lg">
                Contact Now
              </Button>
            </ContactDialog>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={clearFilters}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all border",
              selectedCategories.length === 0
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background hover:bg-muted text-foreground/80 border-transparent hover:border-border"
            )}
          >
            All Works
          </button>
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-2",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 hover:bg-muted text-foreground/80 border-transparent"
                )}
              >
                {isSelected && <Check className="w-3 h-3" />}
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Left Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm hover:bg-background hidden md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Right Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg border-2 bg-background/80 backdrop-blur-sm hover:bg-background hidden md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Scrollable Area */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group relative flex-shrink-0 w-[300px] h-[400px] overflow-hidden border-0 rounded-xl cursor-pointer bg-muted snap-center"
              >
                <CardContent className="p-0 h-full w-full">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold leading-tight">
                        {project.name}
                      </h3>

                      {/* Hover Reveal Arrow */}
                      <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-white/90">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="w-full flex items-center justify-center text-muted-foreground min-h-[300px]">
              No items found for selected categories.
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-center md:hidden">
        <ContactDialog>
          <Button className="px-8" size="lg">
            Contact Now
          </Button>
        </ContactDialog>
      </div>
    </section>
  );
}
