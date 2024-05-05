import type { FunctionComponent } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

import Category from './Category'
import FrameComponent1 from './FrameComponent1'
import ProductCard2 from './ProductCard2'
import SaleSectionCard from './SaleSectionCard'

const CategoriesContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2.667rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-center text-[0.889rem] text-black font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[1.333rem_2.667rem]">
      <div className="self-stretch grid flex-row items-start justify-start gap-[1.333rem] grid-cols-[repeat(6,_minmax(138px,_1fr))] w-auto h-auto text-neutral-gray-2d2d2d hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:grid-cols-[repeat(6,_minmax(138px,_1fr))] mq700:grid-cols-[minmax(138px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(3,_minmax(138px,_239px))]">
        <Category image="/images/image@2x.png" accessories="Accessories" />
        <Category
          image="/images/image-14@2x.png"
          accessories="Camera"
          propMinWidth="59"
        />
        <Category
          image="/images/image-24@2x.png"
          accessories="Laptop"
          propMinWidth="53"
        />
        <Category
          image="/images/image-3@2x.png"
          accessories="Smart Phone"
          propMinWidth="97"
        />
        <Category
          image="/images/image-4@2x.png"
          accessories="Gaming"
          propMinWidth="58"
        />
        <Category
          image="/images/image-53@2x.png"
          accessories="Smart Watch"
          propMinWidth="97"
        />
      </div>
      <div className="w-[68rem] h-[18.056rem] rounded-lg bg-primary-primary-500 overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[2.667rem] pb-[0.444rem] pr-[5.778rem] pl-[28.889rem] box-border gap-[1.333rem] max-w-full text-left text-[0.667rem] hover:bg-primary-primary-500 hover:flex hover:w-[1224px] hover:h-[325px] hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-12 hover:pb-2 hover:pr-[104px] hover:pl-[520px] hover:box-border hover:max-w-full lg:pl-[14.444rem] lg:pr-[2.889rem] lg:box-border mq700:pl-[1.111rem] mq700:box-border mq450:pt-[1.722rem] mq450:pb-[1.111rem] mq450:pr-[1.444rem] mq450:pl-[7.222rem] mq450:box-border">
        <div className="mt-[-230px] ml-[-628px] h-[31.789rem] w-[33.556rem] shrink-0 flex flex-col items-end justify-start [debug_commit:1de1738] max-w-full gap-[-19.233rem] [transform:rotate(0deg)] text-[1.333rem] text-white hover:flex hover:w-[604px] hover:h-[572.1999999999998px] hover:flex-col hover:gap-[-346.1999999999998px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
            <div className="w-[24.844rem] flex flex-col items-end justify-start pt-[13.556rem] px-[6.067rem] pb-[7.067rem] box-border relative gap-[4.889rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[447.2000000000007px] hover:h-auto hover:flex-col hover:gap-[88px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[244px] hover:px-[109.20000000000071px] hover:pb-[127.19999999999982px] hover:box-border hover:max-w-full mq700:gap-[2.444rem_4.889rem] mq700:pl-[1.111rem] mq700:pr-[1.111rem] mq700:box-border mq450:pt-[8.833rem] mq450:pb-[4.611rem] mq450:box-border">
              <img
                className="w-[28.917rem] h-[31.789rem] absolute !m-[0] top-[0rem] bottom-[0rem] left-[-4.072rem] max-h-full object-contain flex hover:flex hover:w-[520.5px] hover:h-[572.2px]"
                alt=""
                src="/images/randomshapeinbluepng-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <h3 className="m-0 relative text-inherit font-medium font-inherit flex z-[1] hover:font-medium hover:font-web-button-lg hover:text-5xl hover:text-left hover:text-white hover:flex mq700:text-[1.056rem]">
                  Products On Sale
                </h3>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[2.667rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] text-[1.111rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-12 hover:box-border">
                  <div className="relative leading-[1.556rem] font-light flex min-w-[102] z-[1] hover:font-light hover:font-web-button-lg hover:text-xl hover:leading-[28px] hover:text-left hover:text-white hover:flex hover:min-w-[102] mq700:text-[0.889rem] mq700:leading-[1.222rem]">
                    Shop Now!
                  </div>
                </div>
              </div>
              <div className="w-[10.611rem] h-[2.667rem] flex flex-row items-start justify-end py-[0rem] px-[2.556rem] box-border gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[191px] hover:h-12 hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-[46px] hover:box-border">
                <Button
                  className="self-stretch flex-1 flex h-auto flex-row gap-[0rem] items-start justify-start rounded-lg py-[0.667rem] px-[0.444rem] box-border z-[2] hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-lg hover:py-3 hover:px-2 hover:box-border"
                  colorScheme="blue"
                  variant="solid"
                  rightIcon={<ArrowForwardIcon />}
                >
                  View all
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[10.222rem] h-[13.167rem] rounded bg-white flex flex-col items-center justify-center pt-[0.444rem] pb-[0.667rem] pr-[0.444rem] pl-[0rem] box-border relative gap-[0.667rem] z-[1] mt-[-346.2px] text-[0.667rem] text-black hover:bg-white hover:flex hover:w-[184px] hover:h-[237px] hover:flex-col hover:gap-[12px] hover:items-center hover:justify-center hover:rounded hover:pt-2 hover:pb-3 hover:pr-2 hover:pl-0 hover:box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
              alt=""
              src="/images/image-62@2x.png"
            />
            <div className="self-stretch h-[3.056rem] flex flex-col items-center justify-center py-[0rem] px-[0.222rem] box-border gap-[0.444rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[55px] hover:flex-col hover:gap-[8px] hover:items-center hover:justify-center hover:py-0 hover:px-1 hover:box-border">
              <div className="self-stretch flex-1 relative tracking-[-0.08px] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:tracking-[-0.08px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:flex-1">
                Logitech G502 Gaming Mouse
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-between hover:[row-gap:20px]">
                <div className="w-[4.667rem] relative [text-decoration:line-through] flex whitespace-nowrap hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-[84px] hover:whitespace-nowrap">
                  $38.00
                </div>
                <div className="w-[4.667rem] relative text-[0.778rem] font-light text-black text-right flex whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-black hover:flex hover:w-[84px] hover:whitespace-nowrap">
                  $19.00
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0.222rem] px-[0.333rem] bg-bisque !m-[0] absolute top-[0.444rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none overflow-hidden flex flex-row items-center justify-start box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] hover:bg-bisque hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-none hover:rounded-tr-lg hover:rounded-br-lg hover:rounded-bl-none hover:py-1 hover:px-1.5 hover:box-border">
              <div className="relative text-[0.667rem] font-light font-web-button-lg text-secondary text-left flex min-w-[30] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-secondary hover:flex hover:min-w-[30]">
                -50%
              </div>
            </button>
          </div>
        </div>
        <SaleSectionCard
          image="/images/image-7@2x.png"
          title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
          lastPrice="$49.00"
          newPrice="$34.30"
          discountAmount="-30%"
        />
        <SaleSectionCard
          image="/images/image-8@2x.png"
          title="Apple Watch Series 7 (GPS, 41MM)"
          lastPrice="$289.00"
          newPrice="$231.20"
          discountAmount="-20%"
        />
        <SaleSectionCard
          image="/images/image-9@2x.png"
          title="Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)"
          lastPrice="$950.22"
          newPrice="$712.66"
          discountAmount="-25%"
        />
        <div className="self-stretch w-[10.222rem] shrink-0 flex flex-col items-start justify-start gap-[0.444rem] [debug_commit:1de1738] h-auto [transform:rotate(0deg)] hover:flex hover:w-[184px] hover:self-stretch hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738]">
          <div className="self-stretch flex-1 rounded bg-white flex flex-col items-center justify-center py-[0.444rem] pr-[0.444rem] pl-[0rem] box-border relative gap-[0.667rem] w-auto hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-col hover:gap-[12px] hover:items-center hover:justify-center hover:rounded hover:py-2 hover:pr-2 hover:pl-0 hover:box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
              alt=""
              src="/images/image-10@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[0.222rem] box-border gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-center hover:justify-center hover:py-0 hover:px-1 hover:box-border">
              <div className="self-stretch relative font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[1.667rem] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[30px]">
                samsung Titan smart watch
              </div>
              <div className="self-stretch h-[0.944rem] flex flex-row items-center justify-between gap-[0rem] [row-gap:20px] w-auto text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-[17px] hover:flex-row hover:gap-[0px] hover:items-center hover:justify-between hover:[row-gap:20px]">
                <div className="w-[4.667rem] relative [text-decoration:line-through] flex whitespace-nowrap hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-[84px] hover:whitespace-nowrap">
                  $120.00
                </div>
                <div className="self-stretch w-[4.667rem] relative text-[0.778rem] font-light text-black text-right flex whitespace-nowrap h-auto hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-black hover:flex hover:w-[84px] hover:self-stretch hover:h-auto hover:whitespace-nowrap">
                  $99.60
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0.222rem] px-[0.333rem] bg-bisque !m-[0] absolute top-[0.444rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none overflow-hidden flex flex-row items-center justify-start box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] hover:bg-bisque hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-none hover:rounded-tr-lg hover:rounded-br-lg hover:rounded-bl-none hover:py-1 hover:px-1.5 hover:box-border">
              <div className="relative text-[0.667rem] font-light font-web-button-lg text-secondary text-left flex min-w-[28] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-secondary hover:flex hover:min-w-[28]">
                -17%
              </div>
            </button>
          </div>
          <div className="w-[4.444rem] flex flex-row items-start justify-start py-[0rem] px-[0.444rem] box-border h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-20 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-2 hover:box-border">
            <div className="h-[1.778rem] flex-1 flex flex-row items-start justify-start gap-[0rem] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-8 hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="h-[1.778rem] w-[1.778rem] relative rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
                alt=""
                src="/icons/carousel.svg"
              />
              <img
                className="h-[1.778rem] w-[1.778rem] relative rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
                alt=""
                src="/icons/carousel-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.667rem] w-auto h-auto [transform:rotate(0deg)] text-left text-[1.778rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[30px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <FrameComponent1 newProducts="New Products" />
        <div className="self-stretch grid flex-row items-start justify-start gap-[1.333rem] grid-cols-[repeat(4,_minmax(216px,_1fr))] w-auto h-auto [transform:rotate(0deg)] text-center text-[0.889rem] text-neutral-gray-505050 hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:grid-cols-[repeat(4,_minmax(216px,_1fr))] mq700:grid-cols-[minmax(216px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(216px,_374px))]">
          <ProductCard2
            title="Iphone 14 promax 256 gig"
            newPrice="$930.90"
            emptyStarIcon="4.5"
            showProductCardColorPalette
            showProductCardColorSwatches
            showExtraColor
          />
          <div className="h-[19.278rem] rounded-lg bg-white shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] flex flex-col items-start justify-start p-[0.889rem] box-border relative gap-[0.889rem] w-auto [align-self:unset] z-[2] text-left text-primary-primary-500 hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-[347px] hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
              alt=""
              src="/images/image-111@2x.png"
            />
            <img
              className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-dodgerblue hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue"
              alt=""
              src="/icons/line-3.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
              <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-primary-primary-500 hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
                Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)
              </div>
              <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                    <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                      $2535.00
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
                      4.8
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[1.333rem] h-[1.333rem] absolute !m-[0] top-[0.889rem] left-[0.889rem] flex z-[1] hover:flex hover:w-6 hover:h-6"
              loading="lazy"
              alt=""
              src="/icons/heart.svg"
            />
          </div>
          <ProductCard2
            title="SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB"
            newPrice="$1018.00"
            emptyStarIcon="4.7"
            showProductCardColorPalette
            showProductCardColorSwatches
            showExtraColor
            propBackgroundImage="url('/images/image15@3x.png')"
            propPadding="3.083rem 0rem"
            propBackgroundColor="#eadee9"
            propBackgroundColor1="#bcd7ff"
            propBackgroundColor2="#8b8b8b"
            propMinWidth="11"
            propWidth="unset"
            propMinWidth1="24"
          />
          <ProductCard2
            title="VR VisionTech X1"
            newPrice="$1,399.00"
            emptyStarIcon="3.9"
            propBackgroundImage="url('/images/image16@3x.png')"
            propPadding="4.944rem 0rem"
            propBackgroundColor2="#b4b4b4"
            propMinWidth1="25"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.333rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-[1.333rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:flex-wrap">
        <div className="h-[23.333rem] flex-1 rounded-lg [background:linear-gradient(-73.01deg,_#b0e9c9,_#1fb6cf_48%,_#1975b9)] overflow-hidden flex flex-col items-start justify-start pt-[1.333rem] px-[1.333rem] pb-[0.556rem] box-border gap-[0.222rem] max-w-full hover:[background:linear-gradient(-73.01deg,_#b0e9c9,_#1fb6cf_48%,_#1975b9)] hover:flex hover:flex-1 hover:h-[420px] hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-6 hover:px-6 hover:pb-2.5 hover:box-border hover:max-w-full mq450:h-auto mq450:min-w-full">
          <div className="w-[36.667rem] flex flex-col items-end justify-start gap-[1.222rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[660px] hover:h-auto hover:flex-col hover:gap-[22px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
            <div className="w-[35.944rem] flex flex-row items-start justify-end py-[0rem] px-[0.611rem] box-border max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[647px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-[11px] hover:box-border hover:max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.111rem] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-5xl hover:text-center hover:flex mq700:text-[1.056rem]">
                  <span>{`Iphone `}</span>
                  <span className="text-white">15 Series</span>
                </h3>
                <div className="w-[13.556rem] flex flex-col items-start justify-start pt-[1.111rem] px-[0rem] pb-[0rem] box-border h-auto gap-[0rem] [transform:rotate(0deg)] text-[0.889rem] hover:flex hover:w-[244px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-5 hover:px-0 hover:pb-0 hover:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.889rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[0.111rem] px-[0.389rem] gap-[0.111rem] h-auto border-[1px] border-solid border-black hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[2px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0.5 hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black">
                      <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:self-stretch hover:w-auto">
                        8
                      </div>
                      <div className="relative text-[0.778rem] font-light flex min-w-[33] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-center hover:text-black hover:flex hover:min-w-[33]">
                        Days
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[0.111rem] px-[0.389rem] gap-[0.111rem] h-auto border-[1px] border-solid border-black hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[2px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0.5 hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black">
                      <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:self-stretch hover:w-auto">
                        8
                      </div>
                      <div className="relative text-[0.778rem] font-light flex min-w-[33] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-center hover:text-black hover:flex hover:min-w-[33]">
                        Days
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[0.111rem] px-[0.389rem] gap-[0.111rem] h-auto border-[1px] border-solid border-black hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[2px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0.5 hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black">
                      <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:self-stretch hover:w-auto">
                        8
                      </div>
                      <div className="relative text-[0.778rem] font-light flex min-w-[33] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-center hover:text-black hover:flex hover:min-w-[33]">
                        Days
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[0.111rem] px-[0.389rem] gap-[0.111rem] h-auto border-[1px] border-solid border-black hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[2px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0.5 hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black">
                      <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:self-stretch hover:w-auto">
                        8
                      </div>
                      <div className="relative text-[0.778rem] font-light flex min-w-[33] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-center hover:text-black hover:flex hover:min-w-[33]">
                        Days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.15rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-[1.111rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20.700000000000728px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap">
              <img
                className="h-[15.667rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[246] shrink-0 [debug_commit:1de1738] flex hover:flex hover:flex-1 hover:h-[282px] hover:min-w-[246] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full"
                loading="lazy"
                alt=""
                src="/images/image-187@2x.png"
              />
              <div className="w-[14.5rem] flex flex-col items-start justify-start pt-[0.389rem] px-[0rem] pb-[0rem] box-border min-w-[261] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[261px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[7px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[261] mq450:flex-1">
                <div className="self-stretch flex flex-col items-end justify-start gap-[1.389rem] shrink-0 [debug_commit:1de1738] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[25px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.389rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[7px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="relative font-medium flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex mq700:text-[0.889rem]">
                      It feels good to be the first
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.722rem] box-border w-auto h-auto gap-[0rem] [transform:rotate(0deg)] text-left text-[0.889rem] text-neutral-gray-2d2d2d hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-[13px] hover:box-border">
                      <div className="flex-1 relative leading-[1.333rem] font-light flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:flex-1">
                        Get ready for the future of smartphones.Experience
                        innovation like never before. Stay tuned for the big
                        iPhone 15 pre-sale.
                      </div>
                    </div>
                  </div>
                  <div className="w-[12.056rem] h-[4.889rem] flex flex-row items-start justify-end py-[0rem] px-[0.944rem] box-border gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[217px] hover:h-[88px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-[17px] hover:box-border">
                    <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[0.222rem] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:flex-col hover:gap-[4px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)]">
                      <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0.231rem] w-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row hover:gap-[4.166666666666667px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)]">
                        <Button
                          className="self-stretch flex-1 bg-primary flex h-auto flex-row gap-[0.444rem] items-start justify-start rounded-lg py-[0.806rem] px-[0.889rem] box-border hover:bg-primary hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:py-[14.5px] hover:px-4 hover:box-border"
                          colorScheme="blue"
                          variant="solid"
                        >
                          Register Now
                        </Button>
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-400 flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-400 flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-400 flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-400 flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-500 flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="h-[0.222rem] w-[0.222rem] relative rounded-[50%] bg-gray-500 flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                      </div>
                      <div className="w-[2.444rem] h-[0.667rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                      </div>
                      <div className="w-[2.444rem] h-[0.667rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0.444rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                      </div>
                      <div className="w-[2.444rem] h-[0.222rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-1 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                        <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[12rem] flex flex-row items-start justify-center h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[216px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)]">
            <div className="h-[0.667rem] w-[2.444rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
            </div>
          </div>
          <div className="w-[12rem] flex flex-row items-start justify-center h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[216px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)]">
            <div className="h-[0.667rem] w-[2.444rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
            </div>
          </div>
          <div className="w-[12rem] flex flex-row items-start justify-center h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[216px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)]">
            <div className="h-[0.667rem] w-[2.444rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-11 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.444rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[0.889rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.333rem] rounded-[50%] bg-gray-400 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-400 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.444rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[0.889rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.333rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[1.778rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.444rem] left-[2.222rem] rounded-[50%] bg-gray-500 w-[0.222rem] h-[0.222rem] flex hover:bg-gray-500 hover:flex hover:w-1 hover:h-1" />
            </div>
          </div>
        </div>
        <div className="h-[23.333rem] w-[24.667rem] rounded-lg bg-steelblue-100 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[7.722rem] pb-[15.556rem] pr-[7.944rem] pl-[0rem] box-border gap-[3.111rem] min-w-[444] max-w-full text-left text-sandybrown hover:bg-steelblue-100 hover:flex hover:w-[444px] hover:h-[420px] hover:flex-col hover:gap-[56px] hover:items-end hover:justify-start hover:rounded-lg hover:pt-[139px] hover:pb-[280px] hover:pr-[143px] hover:pl-0 hover:box-border hover:min-w-[444] hover:max-w-full mq700:h-auto mq450:gap-[1.556rem_3.111rem] mq450:pt-[3.222rem] mq450:pb-[6.556rem] mq450:box-border mq450:min-w-full mq900:flex-1 mq900:pt-[5rem] mq900:pr-[0rem] mq900:pb-[10.111rem] mq900:box-border">
          <div className="mt-[-260px] w-[22.889rem] flex flex-row items-start justify-start gap-[1.833rem] shrink-0 [debug_commit:1de1738] max-w-[137%] h-auto [transform:rotate(0deg)] hover:flex hover:w-[412px] hover:h-auto hover:flex-row hover:gap-[33px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-[137%] mq700:flex-wrap mq700:gap-[1.833rem_0.889rem]">
            <div className="h-[11.333rem] flex-1 relative rounded-[50%] bg-sandybrown min-w-[144] flex hover:bg-sandybrown hover:flex hover:flex-1 hover:h-[204px] hover:min-w-[144]" />
            <div className="flex flex-col items-start justify-start pt-[7.444rem] px-[0rem] pb-[0rem] box-border min-w-[158] w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[134px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[158] mq700:flex-1">
              <h3 className="m-0 relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-5xl hover:text-left hover:text-sandybrown hover:flex mq700:text-[1.056rem]">
                Play Station 5
              </h3>
            </div>
          </div>
          <div className="mr-[-204px] w-[31.444rem] flex flex-row items-start justify-start pt-[5.389rem] px-[5.611rem] pb-[5.278rem] box-border relative shrink-0 [debug_commit:1de1738] max-w-[189%] h-auto gap-[-9.611rem] [transform:rotate(0deg)] text-[1.111rem] text-steelblue-100 hover:flex hover:w-[566px] hover:h-auto hover:flex-row hover:gap-[-173px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[97px] hover:px-[101px] hover:pb-[95px] hover:box-border hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-[189%] mq700:pl-[1.111rem] mq700:pr-[1.111rem] mq700:box-border">
            <div className="flex flex-row items-start justify-start relative w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="flex flex-col items-start justify-start pt-[0.778rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-3.5 hover:px-0 hover:pb-0 hover:box-border">
                <div className="w-[0.222rem] h-[0.667rem] relative flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-1 hover:h-3 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
                  <div className="absolute top-[0.444rem] left-[0rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
                </div>
              </div>
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0.444rem] left-[0.889rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0.444rem] left-[0.444rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0.444rem] left-[1.333rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="relative font-medium flex z-[2] hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-steelblue-100 hover:flex mq700:text-[0.889rem]">
                Digital Edition + 2TB
              </div>
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0rem] left-[0.889rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0rem] left-[0.444rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="h-[0.222rem] w-[0.222rem] absolute !m-[0] bottom-[0rem] left-[1.333rem] rounded-[50%] bg-sandybrown flex z-[3] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
            </div>
            <div className="w-[8.222rem] flex flex-col items-start justify-start pt-[4.611rem] px-[0rem] pb-[0rem] box-border h-auto gap-[0rem] [transform:rotate(0deg)] ml-[-173px] hover:flex hover:w-[148px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[83px] hover:px-0 hover:pb-0 hover:box-border">
              <Button
                className="self-stretch h-[2.556rem] bg-primary flex w-auto flex-row gap-[0.444rem] items-start justify-start rounded-lg py-[0.75rem] px-[2.222rem] box-border z-[2] hover:bg-primary hover:flex hover:self-stretch hover:w-auto hover:h-[46px] hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:py-[13.5px] hover:px-10 hover:box-border"
                colorScheme="blue"
                variant="solid"
              >
                Buy Now
              </Button>
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] flex gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-full hover:h-full hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="absolute h-full w-full top-[0.056rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-sandybrown flex z-[1] hover:bg-sandybrown hover:flex hover:w-full hover:h-full" />
              <div className="absolute top-[0.778rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[0.778rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.222rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[1.667rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.111rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[2.556rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[24.056rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[24.5rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[24.944rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[25.389rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[25.833rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[26.722rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[26.278rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[3rem] left-[27.167rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.167rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.167rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.167rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.167rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.611rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.611rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.611rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[6.611rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[5.611rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[6.5rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[6.056rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.056rem] left-[6.944rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[5.611rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[6.5rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[6.056rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.5rem] left-[6.944rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[5.611rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[6.5rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[6.056rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[7.944rem] left-[6.944rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[3.833rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[4.278rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[4.722rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[5.167rem] rounded-[50%] bg-saddlebrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-saddlebrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[5.611rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[6.5rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[6.056rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <div className="absolute top-[8.389rem] left-[6.944rem] rounded-[50%] bg-sandybrown w-[0.222rem] h-[0.222rem] flex z-[2] hover:bg-sandybrown hover:flex hover:w-1 hover:h-1" />
              <img
                className="absolute top-[0rem] left-[15.833rem] w-[11.667rem] h-[9.389rem] object-contain flex z-[3] hover:flex hover:w-[210px] hover:h-[169px]"
                loading="lazy"
                alt=""
                src="/images/ps53@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesContainer
