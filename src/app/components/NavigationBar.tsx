
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 right-0 bg-background/70 backdrop-blur-md z-10 p-4">
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">Bringu</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            How It Works
          </a>
          <Button variant="outline">Login / Signup</Button>
        </div>
      </div>
    </nav>
  );
}

