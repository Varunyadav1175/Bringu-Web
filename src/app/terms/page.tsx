import NavigationBar from ".././components/NavigationBar";
import Footer from ".././components/Footer";

export default function TermsPage() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen py-16 px-4 bg-background text-foreground">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg mb-2">
            By using Bringu, you agree to the following terms. Please read them carefully.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>You must be at least 18 years old to use our services.</li>
            <li>We are not responsible for items lost or damaged in transit.</li>
            <li>All users must comply with local laws and customs regulations.</li>
            <li>Bringu may suspend accounts for misuse or fraudulent behavior.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
