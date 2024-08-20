"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="bg-[#0E0E10] rounded-2xl w-full flex">
      <TextRevealCard className="p-2"
        text="Just Fun Website"
        revealText="Welcome Bro"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
