import type { FunctionComponent } from 'react'

export type ProductCardType = {
  image?: string;
  title?: string;
};

const ProductCard: FunctionComponent<ProductCardType> = ({ image, title }) => {
  return (
    <div className="h-[19.278rem] rounded-lg bg-white shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] flex flex-col items-start justify-start pt-[0.889rem] px-[0.889rem] pb-[0.833rem] box-border gap-[0.889rem] w-auto [align-self:unset] text-left text-[0.889rem] text-primary-primary-500 font-web-button-lg hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-[347px] hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-4 hover:px-4 hover:pb-[15px] hover:box-border hover:shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)]">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
        loading="lazy"
        alt=""
        src={image}
      />
      <img
        className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-dodgerblue hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue"
        alt=""
        src="/icons/line-3.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
        <div className="self-stretch h-[2.111rem] relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-primary-primary-500 hover:flex hover:self-stretch hover:w-auto hover:h-[38px]">
          {title}
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.111rem] w-auto h-auto text-center text-primary hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-center hover:justify-between">
          <div className="w-[8.333rem] rounded-lg box-border flex flex-row items-center justify-center py-[0.5rem] px-[0.778rem] gap-[0.444rem] h-auto border-[2px] border-solid border-primary hover:flex hover:w-[150px] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-[9px] hover:px-3.5 hover:box-border hover:border-[2px] hover:border-solid hover:border-primary">
            <img
              className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
              alt=""
              src="/icons/vuesaxoutlineshoppingcart.svg"
            />
            <div className="relative flex min-w-[86] hover:font-web-button-lg hover:text-base hover:text-center hover:text-primary hover:flex hover:min-w-[86]">{`Add to cart `}</div>
          </div>
          <img
            className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
            loading="lazy"
            alt=""
            src="/icons/heart.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
