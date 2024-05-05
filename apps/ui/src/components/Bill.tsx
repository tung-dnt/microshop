import type { FunctionComponent } from 'react'

const Bill: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-[0.444rem] box-border gap-[0.667rem] w-auto h-auto text-left text-[0.778rem] text-neutral-gray-717171 font-web-button-lg hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[12px] hover:items-start hover:justify-start hover:rounded-lg hover:p-2 hover:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
        <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] [row-gap:20px] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-between hover:[row-gap:20px] mq700:flex-wrap">
          <div className="w-[9.778rem] relative font-light flex hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-44">
            Subtotal
          </div>
          <div className="w-[9.778rem] relative font-light text-neutral-gray-444444 text-right flex whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-neutral-gray-444444 hover:flex hover:w-44 hover:whitespace-nowrap">
            $519.52
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] [row-gap:20px] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-between hover:[row-gap:20px] mq700:flex-wrap">
          <div className="w-[9.778rem] relative font-light flex hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-44">
            Discount
          </div>
          <div className="w-[9.778rem] relative font-light text-neutral-gray-444444 text-right flex hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-neutral-gray-444444 hover:flex hover:w-44">
            -$111.87
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] [row-gap:20px] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-between hover:[row-gap:20px] mq700:flex-wrap">
          <div className="w-[9.778rem] relative font-light flex hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-44">
            Shipment cost
          </div>
          <div className="w-[9.778rem] relative font-light text-neutral-gray-444444 text-right flex whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-neutral-gray-444444 hover:flex hover:w-44 hover:whitespace-nowrap">
            $22.50
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full flex w-auto box-border border-[1px] border-solid border-neutral-gray-cbcbcb hover:flex hover:self-stretch hover:w-auto hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-cbcbcb"
        alt=""
        src="/icons/line-18.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[0.889rem] text-neutral-gray-2d2d2d hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-between hover:[row-gap:20px] mq700:flex-wrap">
        <div className="w-[9.778rem] relative font-medium flex hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:w-44">
          Grand Total
        </div>
        <div className="w-[9.778rem] relative font-medium text-right flex whitespace-nowrap hover:font-medium hover:font-web-button-lg hover:text-base hover:text-right hover:text-neutral-gray-2d2d2d hover:flex hover:w-44 hover:whitespace-nowrap">
          $543.02
        </div>
      </div>
    </div>
  )
}

export default Bill
