import React from "react";
import Card from "./Card";

export default function Testimonials() {
  return (
    <div class="bg-testimonials bg-cover">
      <div class="pt-[200px] flex flex-col justify-center items-center">
        <h2 class="text-[#FFFFFF] text-[64px] font-about">Testimonials</h2>
        <div class="flex gap-[90px]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
