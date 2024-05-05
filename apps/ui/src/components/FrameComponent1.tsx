import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type FrameComponent1Type = {
  newProducts?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  newProducts,
  propWidth,
}) => {
  const newProductsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    }
  }, [propWidth])

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto [transform:rotate(0deg)] text-left text-[1.778rem] text-black font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.111rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between mq700:flex-wrap">
        <h1
          className="m-0 h-[2.667rem] relative text-inherit font-medium font-inherit flex items-center hover:font-medium hover:font-web-button-lg hover:text-13xl hover:text-left hover:text-black hover:flex hover:h-12 mq700:text-[1.056rem] mq900:text-[1.444rem]"
          style={newProductsStyle}
        >
          {newProducts}
        </h1>
        <button className="cursor-pointer [border:none] py-[0.667rem] px-[2.278rem] bg-[transparent] rounded-lg flex flex-row items-start justify-start box-border w-auto [align-self:unset] h-auto gap-[0rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-lg hover:py-3 hover:px-[41px] hover:box-border">
          <div className="flex flex-col items-start justify-start pt-[0.139rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[2.5px] hover:px-0 hover:pb-0 hover:box-border">
            <div className="relative text-[0.889rem] font-web-button-lg text-black text-center flex min-w-[59] hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:min-w-[59]">
              View all
            </div>
          </div>
          <img
            className="h-[1.333rem] w-[1.333rem] relative min-h-[24] flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
            alt=""
            src="/icons/vuesaxoutlinearrowcircleright-1.svg"
          />
        </button>
      </div>
      <div className="self-stretch h-[0.111rem] relative box-border flex w-auto border-t-[2px] border-solid border-neutral-gray-b4b4b4 border-[2px] hover:flex hover:self-stretch hover:w-auto hover:h-0.5 hover:box-border hover:border-[2px] hover:border-solid hover:border-neutral-gray-b4b4b4" />
    </div>
  )
}

export default FrameComponent1
