import NavigationBar from ".././components/NavigationBar";
import Footer from ".././components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen py-16 px-4 bg-background text-foreground">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg mb-2">
            Your privacy is important to us. Here’s what you need to know:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>We only collect necessary data to provide our services.</li>
            <li>We never sell your data to third parties.</li>
            <li>We use encryption to protect your personal information.</li>
            <li>You can request data deletion anytime at support@bringu.app</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
