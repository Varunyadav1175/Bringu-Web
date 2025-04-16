import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link"; // Add this import

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 right-0 bg-background/70 backdrop-blur-md z-10 p-4 w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/"> {/* Wrap Image with Link */}
            <Image 
              src="/logo_dark.svg" 
              alt="Bringu Logo" 
              width={120} 
              height={40}
              priority
              className="cursor-pointer" // Optional: shows pointer cursor on hover
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/how-it-works" className="hover:text-primary">
            How It Works
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Button variant="outline">Login / Signup</Button>
        </div>
      </div>
    </nav>
  );
}