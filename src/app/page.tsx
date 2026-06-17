export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 px-6 py-12 max-w-5xl mx-auto w-full">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-coffee-dark">
          Brew & Bean
        </h1>
        <p className="text-xl md:text-2xl text-coffee-medium max-w-2xl mx-auto">
          Crafting the perfect cup, one bean at a time. Your neighborhood sanctuary for artisanal coffee and quiet moments.
        </p>
        <div className="flex justify-center">
          <a 
            href="#basics" 
            className="bg-coffee-dark text-cream px-8 py-3 rounded-full font-medium hover:bg-coffee-medium transition-colors"
          >
            Explore Our Shop
          </a>
        </div>
      </section>

      {/* Shop Basics Section */}
      <section id="basics" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-coffee-light/30">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-coffee-dark">Location</h3>
          <p className="text-coffee-medium">
            123 Roasted Lane<br />
            Bean City, BC 45678
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-coffee-dark">Hours</h3>
          <p className="text-coffee-medium">
            Mon - Fri: 7am - 7pm<br />
            Sat - Sun: 8am - 6pm
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-coffee-dark">Our Mission</h3>
          <p className="text-coffee-medium">
            To provide ethically sourced, expertly roasted coffee in a space that inspires community and creativity.
          </p>
        </div>
      </section>
    </div>
  );
}
