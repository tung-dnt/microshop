import type { FunctionComponent } from 'react'

import OrderSummaryCard from './OrderSummaryCard'

const OrderItem: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto text-left text-[0.667rem] text-neutral-gray-2d2d2d font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
      <h2 className="m-0 self-stretch relative text-[1.333rem] font-medium font-inherit text-black flex w-auto hover:font-medium hover:font-web-button-lg hover:text-5xl hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto mq450:text-[1.056rem]">
        Your Order
      </h2>
      <div className="self-stretch bg-white box-border flex flex-row items-center justify-center pt-[0.333rem] pb-[0.278rem] pr-[0.667rem] pl-[0.333rem] gap-[0.333rem] w-auto h-auto border-b-[0.5px] border-solid border-neutral-gray-cbcbcb hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[6px] hover:items-center hover:justify-center hover:pt-1.5 hover:pb-[5px] hover:pr-3 hover:pl-1.5 hover:box-border mq450:flex-wrap">
        <img
          className="self-stretch w-[4.833rem] relative rounded max-h-full overflow-hidden shrink-0 object-cover min-h-[74] bg-white flex h-auto hover:bg-white hover:flex hover:w-[87px] hover:self-stretch hover:h-auto hover:rounded hover:min-h-[74]"
          loading="lazy"
          alt=""
          src="/images/image@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.444rem] min-w-[167] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:min-w-[167]">
          <div className="self-stretch relative font-light flex overflow-hidden text-ellipsis whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:self-stretch hover:w-auto">
            MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.111rem] pl-[0rem] box-border gap-[0.222rem] w-auto h-auto text-[0.556rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:py-0 hover:pr-5 hover:pl-0 hover:box-border">
            <div className="relative font-medium flex min-w-[26] hover:font-medium hover:font-web-button-lg hover:text-3xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[26]">
              Black
            </div>
            <div className="relative font-medium flex min-w-[12] hover:font-medium hover:font-web-button-lg hover:text-3xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[12]">
              ×1
            </div>
          </div>
          <div className="self-stretch relative font-light text-right flex w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:text-right hover:flex hover:self-stretch hover:w-auto">
            <span>{`$433.00 `}</span>
            <span className="text-neutral-gray-717171">from $1299.00</span>
          </div>
        </div>
      </div>
      <OrderSummaryCard
        image="/images/image-1@2x.png"
        title="Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook"
        color="Blue"
        price="$63.26"
      />
      <OrderSummaryCard
        image="/images/image-2@2x.png"
        title={`Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air`}
        color="Black"
        price="$23.26"
        propMinWidth="26"
      />
    </div>
  )
}

export default OrderItem
