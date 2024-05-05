import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type ProductCard4Type = {
  lastPrice?: string;
  newPrice?: string;
  prop?: string;
  showLastPrice?: boolean;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propBackgroundImage?: CSSProperties['backgroundImage'];
  propHeight?: CSSProperties['height'];
  propDisplay?: CSSProperties['display'];
  propWebkitLineClamp?: CSSProperties['webkitLineClamp'];
  propWebkitBoxOrient?: CSSProperties['webkitBoxOrient'];
  propMinWidth?: CSSProperties['minWidth'];
};

const ProductCard4: FunctionComponent<ProductCard4Type> = ({
  lastPrice,
  newPrice,
  prop,
  showLastPrice,
  propWidth,
  propBackgroundImage,
  propHeight,
  propDisplay,
  propWebkitLineClamp,
  propWebkitBoxOrient,
  propMinWidth,
}) => {
  const productCard1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    }
  }, [propWidth])

  const imageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    }
  }, [propBackgroundImage])

  const title2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
      webkitLineClamp: propWebkitLineClamp,
      webkitBoxOrient: propWebkitBoxOrient,
    }
  }, [propHeight, propDisplay, propWebkitLineClamp, propWebkitBoxOrient])

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    }
  }, [propMinWidth])

  return (
    <div
      className="w-[16rem] rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] h-auto text-center text-[0.889rem] text-neutral-gray-505050 font-web-button-lg hover:bg-white hover:flex hover:w-72 hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]"
      style={productCard1Style}
    >
      <div
        className="self-stretch flex flex-row items-start justify-end py-[3.083rem] px-[0rem] box-border relative bg-[url('/public/image7@3x.png')] bg-cover bg-no-repeat bg-[top] w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:py-[55.5px] hover:px-0 hover:box-border"
        style={imageStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-300 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-300 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-white box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-white hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-100 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-100 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
          <div className="relative font-medium flex min-w-[11] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-neutral-gray-505050 hover:flex hover:min-w-[11]">
            +
          </div>
        </div>
        <div className="!m-[0] absolute top-[0rem] left-[-0.889rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-bisque overflow-hidden flex flex-row items-start justify-start py-[0.222rem] px-[0.333rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] text-left text-secondary hover:bg-bisque hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:rounded-tl-none hover:rounded-tr-lg hover:rounded-br-lg hover:rounded-bl-none hover:py-1 hover:px-1.5 hover:box-border">
          <div className="relative leading-[1.333rem] font-light flex min-w-[37] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-secondary hover:flex hover:min-w-[37]">
            -12%
          </div>
        </div>
      </div>
      <img
        className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
        alt=""
        src="/icons/line-3-1.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto text-left text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
        <div
          className="self-stretch h-[2.111rem] relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[38px]"
          style={title2Style}
        >
          Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip /
          256GB SSD / 8GB RAM) - French
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[0.778rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
          <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
            <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
              {showLastPrice && (
                <div className="self-stretch relative [text-decoration:line-through] flex whitespace-nowrap w-auto hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                  {lastPrice}
                </div>
              )}
              <div className="self-stretch relative text-[1rem] font-light text-black flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                {newPrice}
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
              <div
                className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]"
                style={divStyle}
              >
                {prop}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard4
