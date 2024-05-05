import { FunctionComponent, useMemo, CSSProperties } from "react";

export type CategoryType = {
  image?: string;
  accessories?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Category: FunctionComponent<CategoryType> = ({
  image,
  accessories,
  propMinWidth,
}) => {
  const accessoriesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-row items-start justify-start py-[0.444rem] px-[1rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-center text-[0.889rem] text-neutral-gray-2d2d2d font-web-button-lg hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:rounded-lg hover:py-2 hover:px-[18px] hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
      <div className="flex-1 flex flex-col items-center justify-start gap-[0.444rem] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[8px] hover:items-center hover:justify-start">
        <img
          className="w-[8.222rem] h-[8.222rem] relative object-cover flex hover:flex hover:w-[148px] hover:h-[148px]"
          loading="lazy"
          alt=""
          src={image}
        />
        <div
          className="relative leading-[1.333rem] font-light flex min-w-[91] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-center hover:text-neutral-gray-2d2d2d hover:flex hover:min-w-[91]"
          style={accessoriesStyle}
        >
          {accessories}
        </div>
      </div>
    </div>
  );
};

export default Category;
