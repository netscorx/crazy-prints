import React from "react";
import Header from "../../Components/Header/Header";
import HeaderRescription from "../../Components/Header/HeaderRescription";
import About from "../../Components/About/About";
import Benefits from "../../Components/Benefits/Benefits";
import Variants from "../../Components/Benefits/Variants";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";

export default function Main() {
  return (
    <div>
      <div class="bg-headImage bg-co bg-cover h-[2431px]">
        <Header />
        <HeaderRescription />
        <About />
      </div>
      <div class="bg-gradient-to-b from-f-white to-t-pink flex justify-center flex-col pb-[80px]">
        <Benefits />
        <Variants />
        <HowItsWorks />
      </div>
      <div class="bg-questionImage bg-cover">
        <Question />
        <ShowCase />
      </div>
    </div>
  );
}
