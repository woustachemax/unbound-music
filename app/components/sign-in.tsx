"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl border-2">
      <CardHeader className="space-y-4 pb-8">
        <CardTitle className="text-2xl md:text-3xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-center text-muted-foreground">
          Welcome to Unbound Music
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <div className="flex justify-center items-center min-h-[120px]">
          <Button
            className="w-full max-w-sm h-16 text-lg font-semibold gap-4 bg-[#1DB954] hover:bg-[#1ed760] text-white border-0 transition-colors"
            disabled={loading}
            onClick={async () => {
              await signIn.social(
                {
                  provider: "spotify",
                  callbackURL: "/dashboard"
                },
                {
                  onRequest: (ctx) => {
                     setLoading(true);
                  },
                  onResponse: (ctx) => {
                     setLoading(false);
                  },
                 },
              );
            }}
          >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10s10-4.5 10-10s-4.45-10-10-10m3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"/>
                </svg>

            {loading ? "Signing in..." : "Sign in with Spotify"}
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="px-8 pt-6">
        <div className="flex justify-center w-full border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            CC {""} 
            <Link
              href="https://www.siddharththakkar.xyz/"
              className="underline hover:text-foreground transition-colors"
              target="_blank"
            >
              <span className="cursor-pointer">
                Siddharth Thakar. 
              </span>
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}