import {  Layers, Zap, Cpu, Palette } from "lucide-react";

export default function CncCapabilities() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-amber-500" />,
      title: "High Precision",
      description: "Computer-controlled accuracy down to 0.01mm ensures perfect fits and intricate detailing every time.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Rapid Production",
      description: "Efficient cutting strategies allow us to deliver large orders quickly without compromising quality.",
    },
    {
      icon: <Palette className="w-8 h-8 text-amber-500" />,
      title: "Limitless Design",
      description: "If you can draw it, we can cut it. From 2D vectors to complex 3D relief models.",
    },
    {
      icon: <Layers className="w-8 h-8 text-amber-500" />,
      title: "Material Versatility",
      description: "Capable of processing a wide range of sheet materials for diverse applications.",
    },
  ];

  const materials = [
    "MDF / HDF",
    "Plywood (BWP/BWR)",
    "Solid Wood",
    "Acrylic / Plexiglass",
    "ACP (Aluminium Composite Panel)",
    "PVC Foam Board",
    "Corian / Solid Surface",
    "Laminates",
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-stone-800/50 p-6 rounded-xl border border-stone-700/50 hover:border-amber-500/30 transition-colors">
              <div className="mb-4 bg-stone-900 w-16 h-16 rounded-lg flex items-center justify-center border border-stone-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Materials Section */}
        <div className="bg-stone-950 rounded-3xl p-8 lg:p-12 border border-stone-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Materials We Process
              </h2>
              <p className="text-stone-400 text-lg mb-8">
                Our industrial-grade CNC routers are tuned to handle various densities and material properties, ensuring clean edges and smooth finishes across all substrates.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {materials.map((material, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-medium text-stone-300">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-stone-800">
                {/* Abstract representation of material layers */}
               <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-40 hover:opacity-50 transition-opacity duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6">
                 <p className="text-white font-bold text-xl">Stock Ready</p>
                 <p className="text-stone-400 text-sm">We keep premium materials in stock.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
