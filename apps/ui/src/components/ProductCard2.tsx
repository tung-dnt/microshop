import type { CSSProperties,FunctionComponent  } from 'react'
import { useMemo } from 'react'

export type ProductCard2Type = {
  title?: string;
  lastPrice?: string;
  newPrice?: string;
  emptyStarIcon?: string;
  discountAmount?: string;
  showProductCardColorPalette?: boolean;
  showProductCardColorSwatches?: boolean;
  showExtraColor?: boolean;

  /** Style props */
  propBackgroundImage?: CSSProperties['backgroundImage'];
  propPadding?: CSSProperties['padding'];
  propBackgroundColor?: CSSProperties['backgroundColor'];
  propBackgroundColor1?: CSSProperties['backgroundColor'];
  propBackgroundColor2?: CSSProperties['backgroundColor'];
  propMinWidth?: CSSProperties['minWidth'];
  propWidth?: CSSProperties['width'];
  propMinWidth1?: CSSProperties['minWidth'];
  propHeight?: CSSProperties['height'];
  propFlex?: CSSProperties['flex'];
  propDisplay?: CSSProperties['display'];
};

const ProductCard2: FunctionComponent<ProductCard2Type> = ({
  title,
  lastPrice,
  newPrice,
  emptyStarIcon,
  discountAmount,
  showProductCardColorPalette,
  showProductCardColorSwatches,
  showExtraColor,
  propBackgroundImage,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propMinWidth,
  propWidth,
  propMinWidth1,
  propHeight,
  propFlex,
  propDisplay,
}) => {
  const image1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
    }
  }, [propBackgroundImage, propPadding])

  const productCardColorPaletteStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    }
  }, [propBackgroundColor])

  const productCardColorSwatchesStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    }
  }, [propBackgroundColor1])

  const productCardColorSamplesStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    }
  }, [propBackgroundColor2])

  const extraColorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    }
  }, [propMinWidth, propWidth])

  const emptyStarIconStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    }
  }, [propMinWidth1])

  return (
    <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] w-auto [align-self:unset] h-auto z-[2] text-center text-[0.889rem] text-neutral-gray-505050 font-web-button-lg hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
      <div
        className="self-stretch flex flex-row items-start justify-end py-[3.083rem] px-[0rem] box-border bg-[url('/images/image14@3x.png')] bg-cover bg-no-repeat bg-[top] w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:py-[55.5px] hover:px-0 hover:box-border"
        style={image1Style}
      >
        <div className="flex flex-col items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
          {showProductCardColorPalette && (
            <div
              className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-dimgray box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-dimgray hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444"
              style={productCardColorPaletteStyle}
            />
          )}
          {showProductCardColorSwatches && (
            <div
              className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-floralwhite box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-floralwhite hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444"
              style={productCardColorSwatchesStyle}
            />
          )}
          <div
            className="w-[0.667rem] h-[0.667rem] relative rounded-[50%] bg-lightsteelblue-200 box-border flex border-[0.3px] border-solid border-neutral-gray-444444 hover:bg-lightsteelblue-200 hover:flex hover:w-3 hover:h-3 hover:box-border hover:border-[0.3px] hover:border-solid hover:border-neutral-gray-444444"
            style={productCardColorSamplesStyle}
          />
          {showExtraColor && (
            <div
              className="relative font-medium flex min-w-[11] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-neutral-gray-505050 hover:flex hover:min-w-[11]"
              style={extraColorStyle}
            >
              +
            </div>
          )}
        </div>
      </div>
      <img
        className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
        alt=""
        src="/icons/line-3-1.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto text-left text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
        <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
          {title}
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
          <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
            <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
              <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                {newPrice}
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
              <div
                className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]"
                style={emptyStarIconStyle}
              >
                {emptyStarIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard2
