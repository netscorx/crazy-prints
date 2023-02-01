import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";

const data = [
  {
    text: `"I was looking for a unique gift for my friend and I came across CrazyPrints. I was so impressed with the quality of the book and the personalization. The story was so unique and tailored to my friend's interests. I highly recommend CrazyPrints for anyone looking for a special and unique gift." - Alex P.`,
  },
  {
    text: `"I gave a personalized storybook to my spouse as a anniversary gift, and it was a hit! The story was very romantic and the illustrations were beautiful. We both loved it and we will definitely be ordering more in the future." - Jane L.`,
  },
  {
    text: `"I ordered a personalized storybook for my daughter's birthday and it was a hit! The illustrations were beautiful and the story was so unique, tailored to her interests. I highly recommend CrazyPrints for anyone looking for a special and unique gift." - Sarah K.`,
  },
  {
    text: `"I ordered a personalized storybook for my daughter's birthday and it was a hit! The illustrations were beautiful and the story was so unique, tailored to her interests. I highly recommend CrazyPrints for anyone looking for a special and unique gift." - Sarah K.`,
  },
  {
    text: `"I ordered a personalized storybook for my daughter's birthday and it was a hit! The illustrations were beautiful and the story was so unique, tailored to her interests. I highly recommend CrazyPrints for anyone looking for a special and unique gift." - Sarah K.`,
  },
  {
    text: `"I ordered a personalized storybook for my daughter's birthday and it was a hit! The illustrations were beautiful and the story was so unique, tailored to her interests. I highly recommend CrazyPrints for anyone looking for a special and unique gift." - Sarah K.`,
  },
];

export default function Testimonials() {
  return (
    <div class="bg-testimonials bg-cover overflow-hidden">
      <div class="pt-[200px] flex flex-col justify-center items-center">
        <h2 class="text-[#FFFFFF] text-[64px] font-about">Testimonials</h2>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1}
        className="mySwiper"
        breakpoints={{
          1400: { slidesPerView: 2, spaceBetween: 20 },
          1900: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {data.map((el) => (
          <SwiperSlide>
            <Card key={Math.random()} text={el.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
