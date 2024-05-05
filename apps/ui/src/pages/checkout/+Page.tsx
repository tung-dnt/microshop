import { FunctionComponent } from "react";
import CheckoutFlow from "#/components/CheckoutFlow";
import ShippingInfo from "#/components/ShippingInfo";
import OrderItem from "#/components/OrderItem";
import PromoInput from "#/components/PromoInput";

const ChackoutPage: FunctionComponent = () => {
  return (
    <div className="relative flex flex-col items-center justify-start pt-[3.111rem] px-[1.111rem] pb-[3.222rem] box-border gap-[2.667rem] leading-[normal] tracking-[normal] h-auto text-center text-[1.333rem] text-primary-primary-400 font-web-button-lg mq700:gap-[1.333rem_2.667rem]">
      <div className="w-[59.111rem] flex flex-row items-start justify-center max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[1064px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:max-w-full">
        <div className="w-[10.222rem] flex flex-row items-start justify-start h-auto gap-[0rem] hover:flex hover:w-[184px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start">
          <h2 className="m-0 flex-1 relative text-inherit font-medium font-inherit flex hover:font-medium hover:font-web-button-lg hover:text-5xl hover:text-center hover:text-primary-primary-400 hover:flex hover:flex-1 mq450:text-[1.056rem]">
            Tech Heim
          </h2>
        </div>
      </div>
      <div className="w-[59.111rem] flex flex-row items-start justify-center max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[1064px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:max-w-full">
        <CheckoutFlow />
      </div>
      <section className="w-[59.111rem] flex flex-row items-start justify-center gap-[1.333rem] max-w-full h-auto [transform:rotate(0deg)] text-center text-[0.889rem] text-primary font-web-button-lg hover:flex hover:w-[1064px] hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:max-w-full mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[406] max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[406] hover:max-w-full mq700:min-w-full">
          <ShippingInfo />
          <div className="rounded-lg flex flex-row items-start justify-start py-[0.806rem] px-[1.667rem] box-border w-auto [align-self:unset] h-auto gap-[0.444rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:rounded-lg hover:py-[14.5px] hover:px-[30px] hover:box-border">
            <div className="relative flex min-w-[105] hover:font-web-button-lg hover:text-base hover:text-center hover:text-primary hover:flex hover:min-w-[105]">
              Return to cart
            </div>
          </div>
        </div>
        <div className="w-[23.111rem] rounded-lg bg-white box-border flex flex-col items-start justify-start py-[1.222rem] px-[1.278rem] gap-[1.333rem] min-w-[416] max-w-full h-auto border-[1px] border-solid border-neutral-gray-ededed hover:bg-white hover:flex hover:w-[416px] hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:rounded-lg hover:py-[22px] hover:px-[23px] hover:box-border hover:min-w-[416] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed mq700:min-w-full mq900:flex-1 mq900:pt-[1.111rem] mq900:pb-[1.111rem] mq900:box-border">
          <OrderItem />
          <PromoInput />
        </div>
      </section>
    </div>
  );
};

export default ChackoutPage;
