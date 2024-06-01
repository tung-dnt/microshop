/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import type { CSSProperties } from 'types/css';

export type NewProductsHeaderType = {
  className?: string;
  newProducts?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const NewProductsHeader: Component<NewProductsHeaderType> = ({
  className = "",
  newProducts,
  propWidth,
}) => {
  const newProductsStyle = {
    width: propWidth,
  };

  return (
    <div
      class={`self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-13xl text-black font-web-button-lg ${className}`}
    >
      <div class="self-stretch flex flex-row items-start justify-between gap-[20px] z-[19] mq825:flex-wrap">
        <h1
          class="m-0 h-12 relative text-inherit font-medium font-inherit flex items-center mq450:text-lgi mq825:text-7xl"
          style={newProductsStyle}
        >
          {newProducts}
        </h1>
        <div class="rounded-lg flex flex-row items-start justify-start py-3 px-[41px] text-center text-base">
          <img
            class="h-6 w-6 relative hidden min-h-[24px]"
            alt=""
            src="/vuesaxoutlineshoppingcart1.svg"
          />
          <div class="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[59px]">
              View all
            </a>
          </div>
          <img
            class="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/vuesaxoutlinearrowcircleright.svg"
          />
        </div>
      </div>
      <div class="self-stretch h-0.5 relative box-border z-[19] border-t-[2px] border-solid border-neutral-gray-b4b4b4" />
    </div>
  );
};

export default NewProductsHeader;
