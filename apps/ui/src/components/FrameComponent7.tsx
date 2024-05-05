import type { FunctionComponent } from 'react'

import FrameComponent8 from './FrameComponent8'

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.111rem] pb-[0.444rem] box-border max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] text-center text-[0.889rem] text-primary font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:pt-0 hover:px-5 hover:pb-2 hover:box-border hover:max-w-full">
      <div className="w-[28.667rem] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] h-auto gap-[0rem] hover:flex hover:w-[516px] hover:h-auto hover:flex-row hover:flex-wrap hover:gap-[0px] hover:items-start hover:justify-start hover:max-w-full hover:[row-gap:20px]">
        <div className="w-[10.444rem] flex flex-col items-end justify-center gap-[0.222rem] min-w-[122] h-auto hover:flex hover:w-[188px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-end hover:justify-center hover:min-w-[122]">
          <div className="flex flex-row items-center justify-center gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-center">
            <div className="h-[4rem] w-[4rem] rounded-81xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.667rem] px-[0.5rem] gap-[0.556rem] border-[3px] border-solid border-primary hover:flex hover:w-[72px] hover:h-[72px] hover:flex-row hover:gap-[10px] hover:items-center hover:justify-center hover:rounded-81xl hover:py-3 hover:px-[9px] hover:box-border hover:border-[3px] hover:border-solid hover:border-primary">
              <img
                className="h-[2.667rem] w-[2.667rem] relative flex hover:flex hover:w-12 hover:h-12"
                alt=""
                src="/icons/vuesaxoutlinebaghappy.svg"
              />
            </div>
            <img
              className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
              alt=""
              src="/icons/stepper-line.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.444rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:px-2 hover:box-border">
            <div className="flex-1 relative leading-[1.333rem] flex hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-center hover:text-primary hover:flex hover:flex-1">
              cart
            </div>
          </div>
        </div>
        <FrameComponent8
          vuesaxoutlinetruck="/icons/vuesaxoutlinetruck.svg"
          step="Checkout"
          showStepperLineIcon
        />
        <FrameComponent8
          vuesaxoutlinetruck="/icons/vuesaxoutlinecard.svg"
          step="Payment"
          propPadding="0.667rem 0rem 0rem"
        />
      </div>
    </section>
  )
}

export default FrameComponent7
