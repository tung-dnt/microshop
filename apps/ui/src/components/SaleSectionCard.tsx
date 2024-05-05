import { FunctionComponent } from "react";

export type SaleSectionCardType = {
  image?: string;
  title?: string;
  lastPrice?: string;
  newPrice?: string;
  discountAmount?: string;
};

const SaleSectionCard: FunctionComponent<SaleSectionCardType> = ({
  image,
  title,
  lastPrice,
  newPrice,
  discountAmount,
}) => {
  return (
    <div className="h-[12.722rem] w-[10.222rem] rounded bg-white shrink-0 flex flex-col items-center justify-center py-[0.444rem] pr-[0.444rem] pl-[0rem] box-border relative gap-[0.667rem] [debug_commit:1de1738] text-left text-[0.667rem] text-black font-web-button-lg hover:bg-white hover:flex hover:w-[184px] hover:h-[229px] hover:flex-col hover:gap-[12px] hover:items-center hover:justify-center hover:rounded hover:py-2 hover:pr-2 hover:pl-0 hover:box-border hover:shrink-0 hover:[debug_commit:1de1738]">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
        alt=""
        src={image}
      />
      <div className="self-stretch h-[3.056rem] flex flex-col items-center justify-center py-[0rem] px-[0.222rem] box-border gap-[0.444rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[55px] hover:flex-col hover:gap-[8px] hover:items-center hover:justify-center hover:py-0 hover:px-1 hover:box-border">
        <div className="self-stretch flex-1 relative font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:flex-1">
          {title}
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-between hover:[row-gap:20px]">
          <div className="w-[4.667rem] relative [text-decoration:line-through] flex whitespace-nowrap hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:w-[84px] hover:whitespace-nowrap">
            {lastPrice}
          </div>
          <div className="w-[4.667rem] relative text-[0.778rem] font-light text-black text-right flex whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-black hover:flex hover:w-[84px] hover:whitespace-nowrap">
            {newPrice}
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.222rem] px-[0.333rem] bg-bisque !m-[0] absolute top-[0.444rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none overflow-hidden flex flex-row items-center justify-start box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] hover:bg-bisque hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-none hover:rounded-tr-lg hover:rounded-br-lg hover:rounded-bl-none hover:py-1 hover:px-1.5 hover:box-border">
        <div className="relative text-[0.667rem] font-light font-web-button-lg text-secondary text-left flex min-w-[30] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-secondary hover:flex hover:min-w-[30]">
          {discountAmount}
        </div>
      </button>
    </div>
  );
};

export default SaleSectionCard;
