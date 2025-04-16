import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

import NavigationBar from ".././components/NavigationBar";
import Footer from ".././components/Footer";

export default function ContactPage() {
  return (
    <>
      <NavigationBar />

      <section className="py-24 bg-background w-full min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <Icons.mail className="h-5 w-5 inline mr-2" />
                support@bringu.com
              </p>
              <p>
                <Icons.phone className="h-5 w-5 inline mr-2" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Input id="message" type="text" className="h-32" />
              </div>
              <Button type="submit" className="w-full">
                <Icons.send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
