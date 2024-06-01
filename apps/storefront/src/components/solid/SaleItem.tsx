/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'

export type SaleItemsType = {
  className?: string;
  image?: string;
  title?: string;
  lastPrice?: string;
  newPrice?: string;
  discountAmount?: string;
};

const SaleItems: Component<SaleItemsType> = ({
  className = "",
  image,
  title,
  lastPrice,
  newPrice,
  discountAmount,
}) => {
  return (
    <div class={`h-[233px] w-[184px] shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-left text-xs text-black font-web-button-lg ${className}`}>
      <div class="self-stretch flex-1 rounded bg-white flex flex-col items-center justify-center py-2 pr-2 pl-0 relative gap-[12px]">
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={image}
        />
        <div class="self-stretch h-[55px] flex flex-col items-center justify-center py-0 px-1 box-border gap-[8px]">
          <div class="self-stretch flex-1 relative font-light [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
            {title}
          </div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px] text-neutral-gray-717171">
            <s class="w-[84px] relative [text-decoration:line-through] inline-block whitespace-nowrap">
              {lastPrice}
            </s>
            <div class="w-[84px] relative text-sm font-light text-black text-right inline-block whitespace-nowrap">
              {newPrice}
            </div>
          </div>
        </div>
        <div class="!m-[0] absolute top-[8px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-secondary-secondary-100 overflow-hidden flex flex-row items-center justify-start py-1 px-1.5 z-[1] text-secondary">
          <div class="relative font-light inline-block min-w-[30px]">
            {discountAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleItems;
