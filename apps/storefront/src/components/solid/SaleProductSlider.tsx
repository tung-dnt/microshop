/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import SaleItems from './SaleItem'

const SaleProductSlider: Component = () => {
  return (
    <div class="self-stretch w-[1224px] rounded-lg bg-primary-primary-500 overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-11 pb-2 pr-[104px] pl-[312px] box-border relative gap-[24px] max-w-full z-[20] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[156px] mq825:pr-[52px] mq825:box-border">
      <div class="h-[237px] w-[184px] rounded bg-white shrink-0 flex flex-col items-center justify-center pt-2 pb-3 pr-2 pl-0 box-border relative gap-[12px] z-[2]">
        <img
          class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/image-6@2x.png"
        />
        <div class="self-stretch h-[55px] flex flex-col items-center justify-center py-0 px-1 box-border gap-[8px]">
          <div class="self-stretch flex-1 relative tracking-[-0.08px] font-light [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
            Logitech G502 Gaming Mouse
          </div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px] text-neutral-gray-717171">
            <s class="w-[84px] relative [text-decoration:line-through] inline-block whitespace-nowrap">
              $38.00
            </s>
            <div class="w-[84px] relative text-sm font-light text-black text-right inline-block whitespace-nowrap">
              $19.00
            </div>
          </div>
        </div>
        <div class="!m-[0] absolute top-[8px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-secondary-secondary-100 overflow-hidden flex flex-row items-center justify-start py-1 px-1.5 z-[1] text-secondary">
          <div class="relative font-light inline-block min-w-[30px]">
            -50%
          </div>
        </div>
      </div>
      <SaleItems
        image="/image-7@2x.png"
        title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
        lastPrice="$49.00"
        newPrice="$34.30"
        discountAmount="-30%"
      />
      <SaleItems
        image="/image-8@2x.png"
        title="Apple Watch Series 7 (GPS, 41MM)"
        lastPrice="$289.00"
        newPrice="$231.20"
        discountAmount="-20%"
      />
      <SaleItems
        image="/image-9@2x.png"
        title="Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)"
        lastPrice="$950.22"
        newPrice="$712.66"
        discountAmount="-25%"
      />
      <div class="w-[427.1px] !m-[0] absolute top-[-101.6px] left-[-108px] shrink-0 flex flex-col items-center justify-start pt-[163.6px] pb-[126.7px] pr-0 pl-[51px] box-border gap-[8px] max-w-full text-5xl text-white">
        <h3 class="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi">
          Products On Sale
        </h3>
        <div class="flex flex-row items-start justify-start py-0 px-12 text-xl">
          <div class="relative leading-[28px] font-light inline-block min-w-[102px] mq450:text-base mq450:leading-[22px]">
            Shop Now!
          </div>
        </div>
        <img
          class="w-[500.4px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-73.3px] max-h-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/frame@2x.png"
        />
      </div>
      <div class="self-stretch w-[184px] shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div class="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div class="self-stretch flex-1 rounded bg-white flex flex-col items-center justify-center py-2 pr-2 pl-0 relative gap-[12px]">
            <img
              class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/image-10@2x.png"
            />
            <div class="self-stretch flex flex-col items-center justify-center py-0 px-1 gap-[8px]">
              <div class="self-stretch relative font-light [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                samsung Titan smart watch
              </div>
              <div class="self-stretch h-[17px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] text-neutral-gray-717171">
                <s class="w-[84px] relative [text-decoration:line-through] inline-block whitespace-nowrap">
                  $120.00
                </s>
                <div class="self-stretch w-[84px] relative text-sm font-light text-black text-right inline-block whitespace-nowrap">
                  $99.60
                </div>
              </div>
            </div>
            <div class="!m-[0] absolute top-[8px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-secondary-secondary-100 overflow-hidden flex flex-row items-center justify-start py-1 px-1.5 z-[1] text-secondary">
              <div class="relative font-light inline-block min-w-[28px]">
                -17%
              </div>
            </div>
          </div>
          <div class="w-20 flex flex-row items-start justify-start py-0 px-2 box-border">
            <div class="h-8 flex-1 flex flex-row items-start justify-start">
              <img
                class="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0"
                alt=""
                src="/carousel.svg"
              />
              <img
                class="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0"
                alt=""
                src="/carousel-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaleProductSlider
