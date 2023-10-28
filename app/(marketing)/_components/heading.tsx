"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Headings = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your Ideas, Documents & Plans Unified. Welcome to
        <span className="underline"> Second Brain</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Second Brain is new place to store all thing you do. No need to remember
        anything from now-onwards
      </h3>
      <Button>
        Enter Second Brain
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Headings;
