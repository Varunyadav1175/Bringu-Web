'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function HowItWorks() {
  return (
    <section className="py-12 bg-background w-full">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* Card 1 */}
          <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center justify-center">
                <Icons.share className="h-5 w-5 mr-2" /> Post Your Trip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Traveling from USA to India? Let people know.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center justify-center">
                <Icons.search className="h-5 w-5 mr-2" /> Request What You Want
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Need an iPhone, perfume, or snacks? Post your request.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center justify-center">
                <Icons.messageSquare className="h-5 w-5 mr-2" /> Chat &amp; Bring It
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Connect with the traveler, confirm details, and receive your item.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}