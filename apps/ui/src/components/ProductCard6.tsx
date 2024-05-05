import type { FunctionComponent } from 'react'

const ProductCard6: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] w-auto [align-self:unset] h-auto text-center text-[0.889rem] text-neutral-gray-505050 font-web-button-lg hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
      <div className="self-stretch flex flex-row items-start justify-end py-[3.083rem] px-[0rem] box-border bg-[url('/public/image2@3x.png')] bg-cover bg-no-repeat bg-[top] w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:py-[55.5px] hover:px-0 hover:box-border">
        <div className="flex flex-col items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-peachpuff box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-peachpuff hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-white box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-white hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-100 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-100 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="relative font-medium flex min-w-[11] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-neutral-gray-505050 hover:flex hover:min-w-[11]">
            +
          </div>
        </div>
      </div>
      <img
        className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
        alt=""
        src="/icons/line-3-1.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto text-left text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
        <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
          Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip /
          256GB SSD / 8GB RAM) - French
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
          <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
            <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
              <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                $ 2490,87
              </div>
            </div>
          </div>
          <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
            <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
              <img
                className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                loading="lazy"
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
    </div>
  )
}

export default ProductCard6