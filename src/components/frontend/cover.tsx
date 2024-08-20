import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-2xl lg:text-2xl font-semibold max-w-4xl mx-auto text-center relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      <Cover className="text-white">Website gk jelas</Cover>
      </h1>
    </div>
  );
}
