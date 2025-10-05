'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [headline, setHeadline] = useState("Deploying Soon");
  const [subheadline, setSubheadline] = useState("A matrimonial platform designed exclusively for developers and tech professionals.");

  useEffect(() => {
    // Simulate fetching data from an API or CMS
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        setHeadline("Bringu: Connecting Travelers with Needs");
        setSubheadline("Get what you love, delivered from anywhere in the world. Post trips if you’re traveling abroad or request items from those who are. Connect, chat & bring it home!");
      } catch (error) {
        console.error("Failed to fetch data", error);
        toast({
          variant: "destructive",
          title: "Error.",
          description: "Failed to load website data.",
        });
      }
    };

    fetchData();
  }, [toast]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (!email.includes("@")) {
      toast({
        title: "Invalid email address.",
        description: "Please enter a valid email address.",
      });
      return;
    }

    // Here you would typically send the email to your backend or a service like Mailchimp
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "You have been added to the waitlist.",
      });
      setOpen(false); // Close the dialog
      setEmail(""); // Clear the email
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error.",
        description: "There was an error adding you to the waitlist.",
      });
    }
  };

  return (
    <section className="relative py-24 flex items-center justify-center min-h-screen bg-background">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          <span className="text-shiny">{headline}</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          {subheadline}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-auto text-background"
          />
          <Button type="submit" className="btn-glowing">
            Join Waitlist
          </Button>
        </form>
      </div>

      {/* Placeholder for animated background */}
      <div className="absolute inset-0 z-[-1] bg-background/50"></div>
    </section>
  );
}
