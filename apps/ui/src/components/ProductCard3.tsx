import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type ProductCard3Type = {
  image?: string;
  newPrice?: string;
  prop?: string;
  showEllipseDiv?: boolean;
  showDiv?: boolean;
  showLastPrice?: boolean;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propHeight?: CSSProperties['height'];
  propMinWidth?: CSSProperties['minWidth'];
  propHeight1?: CSSProperties['height'];
  propDisplay?: CSSProperties['display'];
  propWebkitLineClamp?: CSSProperties['webkitLineClamp'];
  propWebkitBoxOrient?: CSSProperties['webkitBoxOrient'];
};

const ProductCard3: FunctionComponent<ProductCard3Type> = ({
  image,
  newPrice,
  prop,
  showEllipseDiv,
  showDiv,
  showLastPrice,
  propWidth,
  propHeight,
  propMinWidth,
  propHeight1,
  propDisplay,
  propWebkitLineClamp,
  propWebkitBoxOrient,
}) => {
  const productCardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    }
  }, [propWidth])

  const colorOptionsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    }
  }, [propHeight])

  const colorSwatchSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    }
  }, [propMinWidth])

  const title1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
      webkitLineClamp: propWebkitLineClamp,
      webkitBoxOrient: propWebkitBoxOrient,
    }
  }, [propHeight1, propDisplay, propWebkitLineClamp, propWebkitBoxOrient])

  return (
    <div
      className="w-[16rem] rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden shrink-0 flex flex-col items-end justify-start py-[0.889rem] pr-[0.889rem] pl-[0rem] box-border gap-[0.861rem] h-auto text-center text-[0.889rem] text-neutral-gray-505050 font-web-button-lg hover:bg-white hover:flex hover:w-72 hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-end hover:justify-start hover:rounded-lg hover:py-4 hover:pr-4 hover:pl-0 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]"
      style={productCardStyle}
    >
      <div className="self-stretch h-[10.556rem] relative flex w-auto gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-[190px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="absolute top-[0rem] left-[0.889rem] flex flex-row items-end justify-start pt-[0.778rem] pb-[0.833rem] pr-[0rem] pl-[1.056rem] box-border gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-end hover:justify-start hover:pt-3.5 hover:pb-[15px] hover:pr-0 hover:pl-[19px] hover:box-border">
          <img
            className="h-[8.944rem] w-[12.056rem] relative rounded-lg overflow-hidden shrink-0 object-contain flex gap-[0rem] hover:flex hover:w-[217px] hover:h-[161px] hover:gap-[0px] hover:rounded-lg"
            loading="lazy"
            alt=""
            src={image}
          />
          <div
            className="h-[6.639rem] flex flex-col items-start justify-start w-auto [align-self:unset] gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-[119.5px] hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]"
            style={colorOptionsStyle}
          >
            <div className="flex flex-col items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
              <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-300 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-300 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
              {showEllipseDiv && (
                <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-white box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-white hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
              )}
              <div className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-gray-100 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-gray-100 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444" />
              {showDiv && (
                <div
                  className="relative font-medium flex min-w-[11] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-neutral-gray-505050 hover:flex hover:min-w-[11]"
                  style={colorSwatchSeparatorStyle}
                >
                  +
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-bisque overflow-hidden flex flex-row items-start justify-start py-[0.222rem] px-[0.333rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] text-left text-secondary hover:bg-bisque hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:rounded-tl-none hover:rounded-tr-lg hover:rounded-br-lg hover:rounded-bl-none hover:py-1 hover:px-1.5 hover:box-border">
          <div className="relative leading-[1.333rem] font-light flex min-w-[37] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-secondary hover:flex hover:min-w-[37]">
            -12%
          </div>
        </div>
      </div>
      <img
        className="w-[14.222rem] h-[0.056rem] relative flex box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:w-64 hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
        alt=""
        src="/icons/line-3-1.svg"
      />
      <div className="w-[14.222rem] flex flex-col items-start justify-start gap-[0.889rem] h-auto text-left text-black hover:flex hover:w-64 hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
        <div
          className="self-stretch h-[2.111rem] relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[38px]"
          style={title1Style}
        >
          Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip /
          256GB SSD / 8GB RAM) - French
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[0.778rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
          <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
            <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
              {showLastPrice && (
                <div className="self-stretch relative [text-decoration:line-through] flex whitespace-nowrap w-auto hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                  $1410.87
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
              <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]">
                {prop}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard3
