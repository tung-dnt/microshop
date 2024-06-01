/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';

export type CategoryType = {
  image: string;
  category: string;
};

const Category: Component<CategoryType> = ({ image, category }) => {
  return (
    <div
      class={`shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-2 px-[18px] text-center text-base text-neutral-gray-2d2d2d font-web-button-lg`}
    >
      <div class="flex-1 flex flex-col items-center justify-start gap-[8px]">
        <img
          class="w-[148px] h-[148px] relative object-cover"
          loading="lazy"
          alt=""
          src={image}
        />
        <div class="relative leading-[24px] font-light inline-block min-w-[91px]">
          {category}
        </div>
      </div>
    </div>
  );
};

export default Category;
