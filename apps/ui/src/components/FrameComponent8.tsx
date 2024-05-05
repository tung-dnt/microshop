import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type FrameComponentType = {
  vuesaxoutlinetruck?: string;
  step?: string;
  showStepperLineIcon?: boolean;

  /** Style props */
  propPadding?: CSSProperties['padding'];
  propHeight?: CSSProperties['height'];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  vuesaxoutlinetruck,
  step,
  showStepperLineIcon,
  propPadding,
  propHeight,
}) => {
  const deliveryStepsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    }
  }, [propPadding])

  const stepperLineIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    }
  }, [propHeight])

  return (
    <div
      className="w-[9.111rem] flex flex-col items-start justify-start pt-[0.667rem] px-[0rem] pb-[0rem] box-border h-auto gap-[0rem] [transform:rotate(0deg)] text-center text-[0.778rem] text-neutral-gray-9e9e9e font-web-button-lg hover:flex hover:w-[164px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-3 hover:px-0 hover:pb-0 hover:box-border"
      style={deliveryStepsStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-center gap-[0.222rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-center">
        <div className="flex flex-row items-center justify-center gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-center">
          <img
            className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
            alt=""
            src="/icons/stepper-line-2.svg"
          />
          <div className="h-[2.667rem] w-[2.667rem] rounded-81xl bg-neutral-gray-9e9e9e overflow-hidden shrink-0 flex flex-row items-center justify-center p-[0.444rem] box-border gap-[0.556rem] hover:bg-neutral-gray-9e9e9e hover:flex hover:w-12 hover:h-12 hover:flex-row hover:gap-[10px] hover:items-center hover:justify-center hover:rounded-81xl hover:p-2 hover:box-border">
            <img
              className="h-[1.778rem] w-[1.778rem] relative flex hover:flex hover:w-8 hover:h-8"
              alt=""
              src={vuesaxoutlinetruck}
            />
          </div>
          {showStepperLineIcon && (
            <img
              className="h-[0.083rem] w-[3.111rem] relative flex hover:flex hover:w-14 hover:h-[1.5px]"
              alt=""
              src="/icons/stepper-line-2.svg"
              style={stepperLineIconStyle}
            />
          )}
        </div>
        <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center">
          <div className="flex-1 relative font-medium flex hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-center hover:text-neutral-gray-9e9e9e hover:flex hover:flex-1">
            {step}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrameComponent
