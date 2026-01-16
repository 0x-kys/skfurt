export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10">
              Craftsmanship & Legacy
            </h2>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full z-0" />
            <div className="h-1 w-20 bg-primary mb-6" />
          </div>
          <div>
            <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
              {
                "For over 15 years, S.K. Wood Works has been synonymous with exceptional quality. We don't just build furniture; we craft legacies. From bespoke cabinetry to intricate CNC designs, every piece is a testament to our dedication to perfection and your unique vision."
              }
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
