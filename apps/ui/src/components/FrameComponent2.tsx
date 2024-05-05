import { FunctionComponent } from "react";
import Header from "./Header";
import FrameComponent3 from "./FrameComponent3";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] text-left text-[3.556rem] text-primary-primary-700 font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[18px] hover:box-border hover:max-w-full">
      <div className="flex-1 bg-white flex flex-col items-start justify-start gap-[0.056rem] max-w-full h-auto hover:bg-white hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[1px] hover:items-start hover:justify-start hover:max-w-full">
        <Header />
        <FrameComponent3 />
      </div>
    </div>
  );
};

export default FrameComponent2;
