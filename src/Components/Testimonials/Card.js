import React from "react";

export default function Card() {
  return (
    <div class="flex flex-col justify-center items-center mt-[64px] pb-[100px]">
      <div class="w-[612px] h-[383px] bg-bg-card shadow-card-shadow backdrop-blur-[30px] rounded-[20px] flex  justify-center items-center px-[84px]">
        <p class="text-[#FFFFFF] text-[20px] font-main">
          "I ordered a personalized storybook for my daughter's birthday and it
          was a hit! The illustrations were beautiful and the story was so
          unique, tailored to her interests. I highly recommend CrazyPrints for
          anyone looking for a special and unique gift." - Sarah K.
        </p>
      </div>
    </div>
  );
}
