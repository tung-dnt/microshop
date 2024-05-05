import { FunctionComponent, useMemo, CSSProperties } from "react";

export type ShippingMethodType = {
  radioButton?: string;
  expressShipping?: string;
  businessDays?: string;
  placeholder?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const ShippingMethod: FunctionComponent<ShippingMethodType> = ({
  radioButton,
  expressShipping,
  businessDays,
  placeholder,
  propBackgroundColor,
  propBorder,
  propMinWidth,
  propColor,
}) => {
  const shippingMethodStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const expressShippingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propMinWidth, propColor]);

  return (
    <div
      className="w-[31.111rem] rounded-lg bg-neutral-gray-f9f9f9 box-border flex flex-col items-start justify-start py-[0.333rem] px-[0.389rem] gap-[0.222rem] h-auto text-left text-[0.889rem] text-black font-web-button-lg border-[1px] border-solid border-neutral-gray-f6f6f6 hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[560px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:rounded-lg hover:py-1.5 hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-f6f6f6"
      style={shippingMethodStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.667rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[12px] hover:items-start hover:justify-start">
        <div className="flex flex-col items-start justify-start pt-[0.111rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0.5 hover:px-0 hover:pb-0 hover:box-border">
          <img
            className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
            alt=""
            src={radioButton}
          />
        </div>
        <div
          className="relative leading-[1.333rem] font-light flex min-w-[103] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:min-w-[103]"
          style={expressShippingStyle}
        >
          {expressShipping}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.778rem] box-border w-auto h-auto gap-[0rem] text-[0.778rem] text-neutral-gray-505050 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-0 hover:pr-0 hover:pl-8 hover:box-border">
        <div className="flex-1 relative font-light flex min-w-[166] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-505050 hover:flex hover:flex-1 hover:min-w-[166]">
          {businessDays}
        </div>
        <div className="flex-1 relative font-light text-right flex min-w-[166] whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-right hover:text-neutral-gray-505050 hover:flex hover:flex-1 hover:min-w-[166] hover:whitespace-nowrap">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
