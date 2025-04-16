import { Icons } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-footer-background py-8 text-foreground w-full">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">Bringu</div>
        <div className="flex space-x-4 mb-4">
        <a href="/about" className="hover:text-accent">About</a>
<a href="/contact" className="hover:text-accent">Contact</a>
<a href="/terms" className="hover:text-accent">Terms</a>
<a href="/privacy" className="hover:text-accent">Privacy</a>
        </div>
        <div className="flex space-x-4 mb-4">
          {/* Replace with actual social icons */}
          <a href="#" className="hover:text-accent">
            <Icons.share className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Icons.share className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Icons.share className="h-5 w-5" />
          </a>
        </div>
        <div>© 2025 Bringu</div>
      </div>
    </footer>
  );
}