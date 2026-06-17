export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 px-6 py-12 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl font-bold text-coffee-dark">Our Story</h1>
      <div className="space-y-6 text-lg text-coffee-medium leading-relaxed">
        <p>
          Brew & Bean started as a simple passion project in a small home kitchen, where the aroma of freshly ground Ethiopian Yirgacheffe first filled the air. What began as a quest for the perfect morning cup evolved into a lifelong obsession with the chemistry of roast and the art of the pour-over.
        </p>
        <p>
          For years, we traveled to high-altitude farms, meeting the growers who treat their coffee cherries like fine wine. We learned that the secret to a truly great cup isn't just the bean, but the respect for the entire journey—from the soil to the steam.
        </p>
        <p>
          Today, Brew & Bean is more than just a coffee shop. It's a gathering place for the neighborhood, a quiet corner for the dreamer, and a sanctuary for those who appreciate the slow, deliberate process of craft coffee. We invite you to join us in celebrating the bean.
        </p>
      </div>
    </div>
  );
}
