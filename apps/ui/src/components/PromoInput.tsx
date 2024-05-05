import { FunctionComponent } from "react";
import Bill from "./Bill";

const PromoInput: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2.222rem] w-auto h-auto [transform:rotate(0deg)] text-left text-[0.889rem] text-neutral-gray-717171 font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[40px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:gap-[1.111rem_2.222rem]">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.444rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:flex-wrap">
        <div className="flex-1 rounded-lg box-border overflow-hidden flex flex-row items-start justify-start py-[0.556rem] px-[0.667rem] min-w-[107] h-auto gap-[0rem] border-[1px] border-solid border-neutral-gray-b4b4b4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-lg hover:py-2.5 hover:px-3 hover:box-border hover:min-w-[107] hover:border-[1px] hover:border-solid hover:border-neutral-gray-b4b4b4">
          <div className="flex flex-row items-start justify-start w-auto [align-self:unset] h-auto gap-[0.444rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start">
            <div className="flex flex-row items-start justify-start w-auto [align-self:unset] h-auto gap-[0.222rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start">
              <div className="relative leading-[1.333rem] font-light flex min-w-[107] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[107]">
                discount code
              </div>
            </div>
          </div>
        </div>
        <div className="w-[7.389rem] rounded-lg box-border flex flex-row items-start justify-start py-[0.667rem] px-[2.333rem] h-auto gap-[0.444rem] text-center text-primary border-[2px] border-solid border-primary hover:flex hover:w-[133px] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:py-3 hover:px-[42px] hover:box-border hover:border-[2px] hover:border-solid hover:border-primary">
          <div className="relative flex min-w-[44] hover:font-web-button-lg hover:text-base hover:text-center hover:text-primary hover:flex hover:min-w-[44]">
            Apply
          </div>
        </div>
      </div>
      <Bill />
      <div className="self-stretch rounded-lg bg-primary flex flex-row items-start justify-center py-[0.806rem] px-[1.111rem] box-border w-auto h-auto gap-[0.444rem] text-center text-white hover:bg-primary hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-center hover:rounded-lg hover:py-[14.5px] hover:px-5 hover:box-border">
        <div className="relative flex min-w-[120] hover:font-web-button-lg hover:text-base hover:text-center hover:text-white hover:flex hover:min-w-[120]">
          Continue to pay
        </div>
      </div>
    </div>
  );
};

export default PromoInput;
