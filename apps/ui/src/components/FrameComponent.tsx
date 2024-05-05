import type { FunctionComponent } from 'react'

import FrameComponent1 from './FrameComponent1'
import ProductCard from './ProductCard'
import ProductCard1 from './ProductCard1'

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.833rem] box-border gap-[2.667rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-[1.778rem] text-black font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[33px] hover:box-border hover:max-w-full mq450:gap-[1.333rem_2.667rem]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.667rem] w-auto h-auto [transform:rotate(0deg)] text-[0.889rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[30px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <FrameComponent1 newProducts="Best Sellers" propWidth="12.056rem" />
        <div className="self-stretch grid flex-row items-start justify-start gap-[1.333rem] grid-cols-[repeat(4,_minmax(216px,_1fr))] w-auto h-auto [transform:rotate(0deg)] hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:grid-cols-[repeat(4,_minmax(216px,_1fr))] mq700:grid-cols-[minmax(216px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(216px,_374px))]">
          <ProductCard1
            image="/images/image-121@2x.png"
            title="EchoX Pro H900"
            newPrice="$32.30"
            emptyStar="4.1"
            showDiscountDot
          />
          <div className="h-[19.278rem] rounded-lg bg-white shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] flex flex-col items-start justify-start p-[0.889rem] box-border relative gap-[0.889rem] w-auto [align-self:unset] text-primary-primary-500 hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-[347px] hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
              alt=""
              src="/images/image-131@2x.png"
            />
            <img
              className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-dodgerblue hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue"
              alt=""
              src="/icons/line-3.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
              <div className="self-stretch h-[2.111rem] relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-primary-primary-500 hover:flex hover:self-stretch hover:w-auto hover:h-[38px]">
                Play Station 4 Pro 1Tb
              </div>
              <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[0.778rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                    <div className="self-stretch relative [text-decoration:line-through] flex whitespace-nowrap w-auto hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                      $1090.00
                    </div>
                    <div className="self-stretch relative text-[1rem] font-light text-black flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                      $980.00
                    </div>
                  </div>
                </div>
                <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
                  <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
                    <img
                      className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                      alt=""
                      src="/icons/star.svg"
                    />
                    <div className="relative font-medium flex min-w-[26] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[26]">
                      4.4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[1.333rem] h-[1.333rem] absolute !m-[0] top-[0.889rem] left-[0.889rem] flex z-[1] hover:flex hover:w-6 hover:h-6"
              alt=""
              src="/icons/heart.svg"
            />
          </div>
          <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] w-auto [align-self:unset] h-auto hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
            <div className="self-stretch flex flex-row items-end justify-start pt-[0.778rem] pb-[0.833rem] pr-[0rem] pl-[1.056rem] box-border gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-end hover:justify-start hover:pt-3.5 hover:pb-[15px] hover:pr-0 hover:pl-[19px] hover:box-border">
              <img
                className="h-[8.944rem] w-[12.056rem] relative rounded-lg overflow-hidden shrink-0 object-contain flex gap-[0rem] hover:flex hover:w-[217px] hover:h-[161px] hover:gap-[0px] hover:rounded-lg"
                alt=""
                src="/images/image-32@2x.png"
              />
              <div className="h-[5.333rem] flex flex-col items-start justify-start w-auto [align-self:unset] gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-24 hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <div className="flex flex-col items-center justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-center hover:justify-start">
                  <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-white box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-white hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
                  <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-100 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-100 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
              alt=""
              src="/icons/line-3-1.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
              <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>
              <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                    <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                      $1883.05
                    </div>
                  </div>
                </div>
                <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
                  <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
                    <img
                      className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                      alt=""
                      src="/icons/star.svg"
                    />
                    <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]">
                      4.5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductCard />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.667rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[30px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-[46.778rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[842px] hover:items-start hover:justify-start">
            <h1 className="m-0 h-[2.667rem] w-[12.056rem] relative text-inherit font-medium font-inherit flex items-center shrink-0 hover:font-medium hover:font-web-button-lg hover:text-13xl hover:text-left hover:text-black hover:flex hover:w-[217px] hover:h-12 mq700:text-[1.056rem] mq900:text-[1.444rem]">
              Top Brands
            </h1>
          </div>
          <div className="self-stretch h-[0.111rem] relative box-border flex w-auto border-t-[2px] border-solid border-neutral-gray-b4b4b4 border-[2px] hover:flex hover:self-stretch hover:w-auto hover:h-0.5 hover:box-border hover:border-[2px] hover:border-solid hover:border-neutral-gray-b4b4b4" />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:gap-[0px]"
          loading="lazy"
          alt=""
          src="/images/top-brands@2x.png"
        />
      </div>
      <div className="self-stretch h-[23.333rem] rounded-lg bg-darkslategray-300 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[7.111rem] px-[3.556rem] pb-[7.056rem] box-border gap-[8.944rem] max-w-full w-auto text-[2.444rem] text-white hover:bg-darkslategray-300 hover:flex hover:self-stretch hover:w-auto hover:h-[420px] hover:flex-row hover:gap-[161px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-32 hover:px-16 hover:pb-[127px] hover:box-border hover:max-w-full lg:gap-[8.944rem_4.444rem] lg:pl-[1.778rem] lg:pr-[1.778rem] lg:box-border mq700:gap-[8.944rem_1.111rem] mq700:pt-[3rem] mq700:pb-[3rem] mq700:box-border mq450:gap-[8.944rem_2.222rem] mq900:pt-[4.611rem] mq900:pb-[4.611rem] mq900:box-border">
        <div className="w-[18.167rem] flex flex-col items-start justify-start gap-[1.778rem] shrink-0 [debug_commit:1de1738] max-w-[calc(100%_-_941px)] h-auto [transform:rotate(0deg)] hover:flex hover:w-[327px] hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-[calc(100%_-_941px)] mq700:gap-[0.889rem_1.778rem] mq900:max-w-full">
          <div className="flex flex-col items-start justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <h1 className="m-0 relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-25xl hover:text-left hover:text-white hover:flex mq700:text-[1.444rem] mq900:text-[1.944rem]">
              SMART WATCH
            </h1>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.444rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] text-[1.333rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[9px] hover:pl-2 hover:box-border">
              <h3 className="m-0 relative text-inherit font-light font-inherit flex hover:font-light hover:font-web-button-lg hover:text-5xl hover:text-left hover:text-white hover:flex mq700:text-[1.056rem]">
                Various designs and brands
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.167rem] pl-[1.111rem] box-border w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[21px] hover:pl-5 hover:box-border">
            <button className="cursor-pointer [border:none] py-[0.444rem] px-[0.889rem] bg-tomato rounded-lg flex flex-row items-start justify-start box-border w-auto [align-self:unset] h-auto gap-[0rem] hover:bg-tomato hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-lg hover:py-2 hover:px-4 hover:box-border">
              <div className="relative text-[0.889rem] font-web-button-lg text-darkslategray-300 text-center flex min-w-[36] hover:font-web-button-lg hover:text-base hover:text-center hover:text-darkslategray-300 hover:flex hover:min-w-[36]">
                view
              </div>
            </button>
          </div>
        </div>
        <div className="mt-[-217px] h-[36.389rem] w-[43.333rem] relative shrink-0 [debug_commit:1de1738] max-w-[calc(100%_-_488px)] flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[780px] hover:h-[655px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-[calc(100%_-_488px)] mq900:hidden">
          <div className="absolute h-[36.389rem] top-[0rem] bottom-[0rem] left-[13.556rem] rounded-[50%] bg-tomato w-[44.444rem] flex hover:bg-tomato hover:flex hover:w-[800px] hover:h-[655px]" />
          <img
            className="absolute top-[7.222rem] left-[0rem] w-[27.778rem] h-[18.778rem] object-contain [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0))] flex gap-[0rem] z-[1] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0))] hover:flex hover:w-[500px] hover:h-[338px] hover:gap-[0px]"
            loading="lazy"
            alt=""
            src="/images/frame-26086945@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.778rem] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:max-w-full mq450:gap-[0.889rem_1.778rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.111rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-center hover:justify-between mq700:flex-wrap">
            <h1 className="m-0 h-[2.667rem] relative text-inherit font-medium font-inherit flex items-center hover:font-medium hover:font-web-button-lg hover:text-13xl hover:text-left hover:text-black hover:flex hover:h-12 mq700:text-[1.056rem] mq900:text-[1.444rem]">
              Our Blogs
            </h1>
            <button className="cursor-pointer [border:none] py-[0.667rem] px-[2.278rem] bg-[transparent] rounded-lg flex flex-row items-center justify-center box-border w-auto [align-self:unset] h-auto gap-[0rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-[41px] hover:box-border">
              <div className="relative text-[0.889rem] font-web-button-lg text-black text-center flex min-w-[59] hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:min-w-[59]">
                View all
              </div>
              <img
                className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
                alt=""
                src="/icons/vuesaxoutlinearrowcircleright-1.svg"
              />
            </button>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-2px] flex w-auto box-border border-[2px] border-solid border-neutral-gray-b4b4b4 hover:flex hover:self-stretch hover:w-auto hover:box-border hover:mt-[-2px] hover:border-[2px] hover:border-solid hover:border-neutral-gray-b4b4b4"
            alt=""
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.333rem] max-w-full w-auto h-auto text-[0.667rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:max-w-full mq900:flex-wrap">
          <div className="w-[21.778rem] rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.444rem] min-w-[392] max-w-full h-auto hover:bg-white hover:flex hover:w-[392px] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] hover:min-w-[392] hover:max-w-full mq450:min-w-full mq900:flex-1">
            <img
              className="self-stretch h-[11.333rem] relative max-w-full overflow-hidden shrink-0 object-cover flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-[204px] hover:gap-[0px]"
              alt=""
              src="/images/image-16@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0.889rem] pb-[0.889rem] box-border gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:pt-0 hover:px-4 hover:pb-4 hover:box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-between hover:[row-gap:20px] mq700:flex-wrap">
                <div className="w-[10rem] flex flex-row items-end justify-start gap-[0.111rem] h-auto hover:flex hover:w-[180px] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-end hover:justify-start">
                  <img
                    className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                    alt=""
                    src="/icons/vuesaxoutlinecalendar.svg"
                  />
                  <div className="flex-1 relative font-light flex hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:flex-1">
                    August , 8 , 2023
                  </div>
                </div>
                <div className="flex flex-row items-end justify-end py-[0rem] pr-[0rem] pl-[5.444rem] box-border gap-[0.111rem] w-auto [align-self:unset] h-auto text-right text-neutral-gray-717171 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-end hover:justify-end hover:py-0 hover:pr-0 hover:pl-[98px] hover:box-border">
                  <img
                    className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                    alt=""
                    src="/icons/vuesaxoutlinetimer.svg"
                  />
                  <div className="relative font-light flex min-w-[60] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-right hover:text-neutral-gray-717171 hover:flex hover:min-w-[60]">
                    3 min read
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-[1.111rem] font-medium flex overflow-hidden text-ellipsis whitespace-nowrap w-auto hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto mq700:text-[0.889rem]">
                Meta Platforms plans to release free software that...
              </div>
              <div className="self-stretch relative text-[0.889rem] leading-[1.333rem] font-light flex overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.667rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-12">{`The parent company of Facebook, Meta Platforms, is introducing software to help developers `}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.333rem] min-w-[525] max-w-full h-auto text-[0.889rem] text-secondary hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:min-w-[525] hover:max-w-full mq450:min-w-full">
            <div className="self-stretch rounded-lg bg-white shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] overflow-hidden flex flex-row items-center justify-start gap-[0.889rem] max-w-full w-auto h-auto hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-start hover:rounded-lg hover:shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] hover:max-w-full mq450:flex-wrap">
              <img
                className="h-[8.667rem] w-[13.333rem] relative overflow-hidden shrink-0 object-cover flex hover:flex hover:w-60 hover:h-[156px] mq450:flex-1"
                loading="lazy"
                alt=""
                src="/images/blog-image@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-center py-[1.111rem] px-[0rem] box-border gap-[0.889rem] min-w-[359] max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-center hover:py-5 hover:px-0 hover:box-border hover:min-w-[359] hover:max-w-full mq700:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
                  <div className="self-stretch relative font-medium flex overflow-hidden text-ellipsis whitespace-nowrap w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-secondary hover:flex hover:self-stretch hover:w-auto">
                    8 Things You Probably Didn’t Know About Headphones
                  </div>
                  <div className="self-stretch relative text-[0.778rem] font-light text-neutral-gray-717171 flex overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto">
                    Owning a headphone could mean a different thing for
                    different people. For some, it act as a fashion statement.
                    It’s easy to spot these people, the headphone are almost
                    always just hanging around the neck.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.889rem] pl-[0rem] box-border gap-[0.444rem] max-w-full w-auto h-auto text-[0.667rem] text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:py-0 hover:pr-4 hover:pl-0 hover:box-border hover:max-w-full mq450:flex-wrap">
                  <img
                    className="h-[1.111rem] w-[1.111rem] relative min-h-[20] bg-white flex hover:bg-white hover:flex hover:w-5 hover:h-5 hover:min-h-[20]"
                    alt=""
                    src="/icons/vuesaxoutlinecalendar-1.svg"
                  />
                  <div className="flex-1 relative font-light flex min-w-[78] max-w-full hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:flex-1 hover:min-w-[78] hover:max-w-full">
                    March , 28 , 2023
                  </div>
                  <img
                    className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                    alt=""
                    src="/icons/save.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-row items-center justify-start gap-[0.889rem] max-w-full w-auto h-auto text-black hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-start hover:rounded-lg hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] hover:max-w-full mq450:flex-wrap">
              <img
                className="h-[8.667rem] w-[13.333rem] relative overflow-hidden shrink-0 object-cover flex hover:flex hover:w-60 hover:h-[156px] mq450:flex-1"
                alt=""
                src="/images/blog-image-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-center py-[1.111rem] pr-[0.667rem] pl-[0rem] box-border gap-[1.333rem] min-w-[359] max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-center hover:py-5 hover:pr-3 hover:pl-0 hover:box-border hover:min-w-[359] hover:max-w-full mq700:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
                  <div className="self-stretch relative font-medium flex overflow-hidden text-ellipsis whitespace-nowrap w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                    Analyzing the August 17th Bitcoin Price Drop
                  </div>
                  <div className="self-stretch relative text-[0.778rem] font-light text-neutral-gray-717171 flex overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto">
                    On August 17th at 9:30PM UTC, Bitcoin’s price dropped more
                    than 8% in a 10-minute window, to a two-month low of under
                    $26k. This pulled
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.889rem] pl-[0rem] box-border gap-[0.444rem] max-w-full w-auto h-auto text-[0.667rem] text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:py-0 hover:pr-4 hover:pl-0 hover:box-border hover:max-w-full">
                  <img
                    className="h-[1.111rem] w-[1.111rem] relative bg-white flex hover:bg-white hover:flex hover:w-5 hover:h-5"
                    alt=""
                    src="/icons/vuesaxoutlinecalendar-1.svg"
                  />
                  <div className="flex-1 relative font-light flex max-w-[calc(100%_-_28px)] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:flex-1 hover:max-w-[calc(100%_-_28px)]">
                    August , 17 , 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrameComponent
