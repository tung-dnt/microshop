/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'

export type ProductCardType = {
  className?: string;
  title?: string;
  lastPrice?: string;
  newPrice?: string;
  emptyStarIcon?: string;
  discountAmount?: string;
  showProductCardColorPalette?: boolean;
  showProductCardColorSwatches?: boolean;
  showExtraColor?: boolean;

  /** Style props */
  propBackgroundImage?: string;
  propPadding?: number;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propBackgroundColor2?: string;
  propMinWidth?: number;
  propWidth?: number;
  propHeight?: number;
  propFlex?: string;
  propDisplay?: string;
};

const ProductCard: Component<ProductCardType> = ({
  className = "",
  title,
  lastPrice,
  newPrice,
  emptyStarIcon,
  discountAmount,
  showProductCardColorPalette,
  showProductCardColorSwatches,
  showExtraColor,
  propBackgroundImage,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propMinWidth,
  propWidth,
  propHeight,
  propFlex,
  propDisplay,
}) => {
  const imageStyle = {
    backgroundImage: propBackgroundImage,
    padding: propPadding,
  };

  const productCardColorPaletteStyle = {
    backgroundColor: propBackgroundColor,
  };


  const productCardColorSwatchesStyle = {
    backgroundColor: propBackgroundColor1,
  };

  const productCardColorSamplesStyle = {
    backgroundColor: propBackgroundColor2,
  };

  const extraColorStyle = {
    minWidth: propMinWidth,
    width: propWidth,
  };

  const discountAmountStyle = {
    height: propHeight,
    flex: propFlex,
    display: propDisplay,
  };

  return (
    <div
      class={`shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start p-4 gap-[15.5px] z-[19] text-left text-base text-neutral-gray-505050 font-web-button-lg ${className}`}
    >
      <div
        class="self-stretch flex flex-row items-start justify-end py-[55.5px] px-0 bg-[url('/image1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center"
        style={imageStyle}
      >
        <div class="h-[161px] w-[217px] relative rounded-lg overflow-hidden shrink-0 hidden" />
        <div class="flex flex-col items-start justify-start gap-[8px]">
          {showProductCardColorPalette && (
            <div
              class="w-3 h-3 relative rounded-[50%] bg-dimgray box-border border-[0px] border-solid border-neutral-gray-444444"
              style={productCardColorPaletteStyle}
            />
          )}
          {showProductCardColorSwatches && (
            <div
              class="w-3 h-3 relative rounded-[50%] bg-floralwhite box-border border-[0px] border-solid border-neutral-gray-444444"
              style={productCardColorSwatchesStyle}
            />
          )}
          <div
            class="w-3 h-3 relative rounded-[50%] bg-lightsteelblue-200 box-border border-[0px] border-solid border-neutral-gray-444444"
            style={productCardColorSamplesStyle}
          />
          {showExtraColor && (
            <div
              class="relative font-medium inline-block min-w-[11px]"
              style={extraColorStyle}
            >
              +
            </div>
          )}
        </div>
      </div>
      <img
        class="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/line-3.svg"
      />
      <div class="self-stretch flex flex-col items-start justify-start gap-[16px] text-black">
        <div class="self-stretch relative leading-[24px] font-light [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {title}
        </div>
        <div class="self-stretch flex flex-row items-end justify-between gap-[0px] [row-gap:20px] text-sm text-neutral-gray-717171 mq450:flex-wrap">
          <div class="w-32 flex flex-col items-center justify-start">
            <div class="self-stretch flex flex-col items-center justify-start">
              <div class="self-stretch h-[17px] relative [text-decoration:line-through] hidden whitespace-nowrap">
                {lastPrice}
              </div>
              <div class="self-stretch relative text-lg font-light text-black whitespace-nowrap">
                {newPrice}
              </div>
            </div>
          </div>
          <div class="w-32 flex flex-row items-center justify-end text-base text-primary-primary-500">
            <div class="flex flex-row items-center justify-end gap-[2px]">
              <img
                class="h-6 w-6 relative rounded-11xs-2"
                alt=""
                src="/star-icon.svg"
              />
              <div class="relative font-medium inline-block min-w-[25px]">
                {emptyStarIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[49px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-secondary-secondary-100 overflow-hidden hidden flex-row items-center justify-start py-1 px-1.5 box-border text-secondary">
        <div
          class="relative leading-[24px] font-light"
          style={discountAmountStyle}
        >
          {discountAmount}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
