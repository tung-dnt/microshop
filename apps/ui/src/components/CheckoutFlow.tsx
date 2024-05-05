import type { FunctionComponent } from 'react'

import FrameComponent8 from './FrameComponent8'

const CheckoutFlow: FunctionComponent = () => {
  return (
    <nav className="m-0 h-[5.056rem] w-[28.667rem] flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.167rem] box-border max-w-full gap-[0rem] text-center text-[0.889rem] text-primary-primary-75 font-web-button-lg hover:flex hover:w-[516px] hover:h-[91px] hover:flex-row hover:gap-[0px] hover:items-end hover:justify-start hover:pt-0 hover:px-0 hover:pb-[3px] hover:box-border hover:max-w-full">
      <div className="w-[9.111rem] flex flex-col items-end justify-center gap-[0.222rem] h-auto hover:flex hover:w-[164px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-end hover:justify-center">
        <div className="flex flex-row items-center justify-center gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-center">
          <div className="h-[2.667rem] w-[2.667rem] rounded-81xl bg-primary-primary-75 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[0.444rem] box-border gap-[0.556rem] hover:bg-primary-primary-75 hover:flex hover:w-12 hover:h-12 hover:flex-row hover:gap-[10px] hover:items-center hover:justify-center hover:rounded-81xl hover:p-2 hover:box-border">
            <img
              className="h-[1.778rem] w-[1.778rem] relative flex hover:flex hover:w-8 hover:h-8"
              alt=""
              src="/icons/vuesaxoutlinebaghappy.svg"
            />
          </div>
          <img
            className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
            loading="lazy"
            alt=""
            src="/icons/stepper-line.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.444rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:px-2 hover:box-border">
          <div className="flex-1 relative leading-[1.333rem] flex hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-center hover:text-primary-primary-75 hover:flex hover:flex-1">
            cart
          </div>
        </div>
      </div>
      <div className="mb-[-5px] flex-1 flex flex-col items-center justify-center gap-[0.222rem] h-auto text-[0.778rem] text-primary hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[4px] hover:items-center hover:justify-center">
        <div className="flex flex-row items-center justify-center gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-center">
          <img
            className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
            alt=""
            src="/icons/stepper-line.svg"
          />
          <div className="h-[4rem] w-[4rem] rounded-81xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.667rem] px-[0.5rem] gap-[0.556rem] border-[3px] border-solid border-primary hover:flex hover:w-[72px] hover:h-[72px] hover:flex-row hover:gap-[10px] hover:items-center hover:justify-center hover:rounded-81xl hover:py-3 hover:px-[9px] hover:box-border hover:border-[3px] hover:border-solid hover:border-primary">
            <img
              className="h-[2.667rem] w-[2.667rem] relative flex hover:flex hover:w-12 hover:h-12"
              alt=""
              src="/icons/vuesaxoutlinetruck.svg"
            />
          </div>
          <img
            className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
            alt=""
            src="/icons/stepper-line-2.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center">
          <div className="flex-1 relative font-medium flex hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-center hover:text-primary hover:flex hover:flex-1">
            Checkout
          </div>
        </div>
      </div>
      <FrameComponent8
        vuesaxoutlinetruck="/icons/vuesaxoutlinecard.svg"
        step="Payment"
        propPadding="0rem 0rem 0.389rem"
      />
    </nav>
  )
}

export default CheckoutFlow
