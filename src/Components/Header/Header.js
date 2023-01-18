import React from "react";

export default function Header() {
  return (
    <div class="flex items-center justify-between mx-[64px] pt-[20px]">
      <div class="flex items-center">
        <div class="cursor-pointer">
          <a href="/">
            <img src={require("../Theme/Img/logo.png")} alt="Logo" />
          </a>
        </div>
        <div>
          <ul class="flex items-center gap-8 ml-[80px]">
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                Anime portrais
              </a>
            </li>
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                Storybooks
              </a>
            </li>
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                AI Avatars
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center">
        <ul class="flex items-center gap-8">
          <li class="cursor-pointer">
            <a href="/" class="font-main text-white text-lg">
              Blog
            </a>
          </li>
          <li class="cursor-pointer">
            <a href="/" class="font-main text-white text-lg">
              Order tracking
            </a>
          </li>
        </ul>
        <button class="btn flex items-center justify-center ml-[32px]">
          Get started now
        </button>
      </div>
    </div>
  );
}
