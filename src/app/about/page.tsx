export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">Our Story</h1>
        <div className="prose prose-lg text-coffee-medium space-y-6">
          <p>
            Bean & Brew started in a small garage with a single manual roaster and a dream to
            bring truly artisan coffee to the neighborhood. We spent years traveling through
            the highlands of Ethiopia and the mountains of Colombia, learning the art of the
            bean from the people who grow them.
          </p>
          <p>
            We believe that coffee is more than just a caffeine kick; it's a ritual. It's the
            quiet moment before the day begins, the spark of a new idea, or the comfort of a
            long conversation with an old friend.
          </p>
          <p>
            Today, we continue that mission by sourcing only ethically grown, single-origin
            beans and roasting them in small batches to ensure every cup captures the unique
            terroir of its origin. Whether you're a connoisseur or just looking for a warm
            place to sit, we welcome you to our community.
          </p>
        </div>
      </div>
    </main>
  );
}
