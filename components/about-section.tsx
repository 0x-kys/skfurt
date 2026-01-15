export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
          </div>
          <div>
            <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {
                "We feel that excellent furniture is essential for a beautiful, functioning home. With a love of design and craftsmanship, we combine current aesthetics with timeless beauty."
              }
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
