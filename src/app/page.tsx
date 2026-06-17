export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-coffee-light px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-coffee-dark mb-6">
            Wake Up to Something Better
          </h1>
          <p className="text-lg md:text-xl text-coffee-medium mb-8 max-w-2xl mx-auto">
            Artisanally roasted beans, expert baristas, and a cozy space to find your flow.
          </p>
          <a
            href="#basics"
            className="bg-coffee-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coffee-dark transition-colors"
          >
            Explore Our Shop
          </a>
        </div>
      </section>

      {/* Shop Basics Section */}
      <section id="basics" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-12">
          Shop Basics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-coffee-light">
            <h3 className="text-xl font-bold text-coffee-primary mb-4">Location</h3>
            <p className="text-coffee-medium">
              123 Coffee Lane<br />
              Roaster's District<br />
              Brew City, BC 54321
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-coffee-light">
            <h3 className="text-xl font-bold text-coffee-primary mb-4">Hours</h3>
            <p className="text-coffee-medium">
              Mon &mdash; Fri: 6am &mdash; 7pm<br />
              Sat &mdash; Sun: 8am &mdash; 6pm
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-coffee-light">
            <h3 className="text-xl font-bold text-coffee-primary mb-4">Mission</h3>
            <p className="text-coffee-medium">
              To craft the perfect cup of coffee while fostering a community of creativity and connection.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
