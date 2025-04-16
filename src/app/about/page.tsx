import NavigationBar from ".././components/NavigationBar";
import Footer from ".././components/Footer";

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <main className="py-24 bg-background w-full min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Bringu</h1>
          <p className="text-muted-foreground text-lg mb-4">
            Bringu was founded in 2024 to connect people across borders through a community-driven delivery system.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            Whether you're looking for something exclusive or helping others get what they need, Bringu makes it easy and secure.
          </p>
          <p className="text-muted-foreground text-lg">
            Join us in making the world more connected, one trip at a time.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
