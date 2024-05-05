import type { FunctionComponent } from 'react'

import ShippingMethod from './ShippingMethod'

const ShippingInfo: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[1.222rem] px-[1.722rem] gap-[1.778rem] max-w-full w-auto h-auto text-left text-[1.111rem] text-black font-web-button-lg border-[1px] border-solid border-neutral-gray-ededed hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:rounded-lg hover:py-[22px] hover:px-[31px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed mq700:gap-[0.889rem_1.778rem] mq700:pt-[1.111rem] mq700:pb-[1.111rem] mq700:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <div className="w-[27.722rem] h-[1.333rem] flex flex-col items-start justify-start max-w-full gap-[-1.333rem] [transform:rotate(0deg)] hover:flex hover:w-[499px] hover:h-6 hover:flex-col hover:gap-[-24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
          <h3 className="m-0 w-[4.667rem] relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:w-[84px] mq450:text-[0.889rem]">
            User
          </h3>
          <div className="self-stretch h-[0rem] flex flex-row items-start justify-end w-auto gap-[0rem] [transform:rotate(0deg)] mt-[-24px] text-black1 hover:flex hover:self-stretch hover:w-auto hover:h-0 hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)]">
            <h3 className="m-0 h-[0rem] w-[0rem] relative text-inherit leading-[1.556rem] font-light font-inherit flex hover:font-light hover:font-web-button-lg hover:text-xl hover:leading-[28px] hover:text-left hover:text-black1 hover:flex hover:w-0 hover:h-0 mq450:text-[0.889rem] mq450:leading-[1.222rem]">{` `}</h3>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-neutral-gray-f9f9f9 box-border overflow-hidden flex flex-row items-start justify-start py-[0.778rem] px-[0.444rem] max-w-full w-auto h-auto gap-[0.222rem] text-[0.778rem] text-neutral-gray-2d2d2d border-[1px] border-solid border-neutral-gray-f6f6f6 hover:bg-neutral-gray-f9f9f9 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start hover:rounded-lg hover:py-3.5 hover:px-2 hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-f6f6f6">
          <div className="flex-1 relative font-light flex max-w-full hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:flex-1 hover:max-w-full">
            Jimmy Smith
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <h3 className="m-0 relative text-inherit font-medium font-inherit flex min-w-[75] hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:min-w-[75] mq450:text-[0.889rem]">{`Ship to `}</h3>
        <div className="self-stretch rounded-lg bg-neutral-gray-f9f9f9 box-border overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.389rem] gap-[0.222rem] max-w-full w-auto h-auto text-[0.778rem] text-neutral-gray-2d2d2d border-[1px] border-solid border-neutral-gray-f6f6f6 hover:bg-neutral-gray-f9f9f9 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0 hover:px-[7px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-f6f6f6 mq700:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.861rem] px-[0rem] pb-[0rem] box-border min-w-[330] max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[15.5px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[330] hover:max-w-full">
            <div className="self-stretch relative font-light flex w-auto hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:self-stretch hover:w-auto">
              HubSpot, 25 First Street, Cambridge MA 02141, United States
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-start justify-start py-[0.667rem] px-[0.222rem] box-border w-auto [align-self:unset] h-auto gap-[0.444rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:py-3 hover:px-1 hover:box-border">
            <img
              className="h-[1.333rem] w-[1.333rem] relative flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
              alt=""
              src="/icons/vuesaxoutlineedit.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.667rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[12px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <h3 className="m-0 relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex mq450:text-[0.889rem]">
          Shiping Method
        </h3>
        <div className="w-[31.111rem] overflow-x-auto flex flex-col items-start justify-start gap-[0.444rem] max-w-full h-auto [transform:rotate(0deg)] text-[0.889rem] hover:flex hover:w-[560px] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
          <ShippingMethod
            radioButton="/icons/radiobutton.svg"
            expressShipping="Free Shipping"
            businessDays="7-30 business days"
            placeholder="$0"
          />
          <ShippingMethod
            radioButton="/icons/radiobutton.svg"
            expressShipping="Regular Shipping"
            businessDays="3-14 business days"
            placeholder="$7.50"
            propBackgroundColor="#f9f9f9"
            propBorder="1px solid #f6f6f6"
            propMinWidth="126"
            propColor="#0c0b0b"
          />
          <ShippingMethod
            radioButton="/icons/radiobutton-2.svg"
            expressShipping="Express Shipping"
            businessDays="1-3 business days"
            placeholder="$22.50"
            propBackgroundColor="#e4eefe"
            propBorder="1px solid #78abf9"
            propMinWidth="129"
            propColor="#2d2d2d"
          />
        </div>
      </div>
    </div>
  )
}

export default ShippingInfo
