import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type Comment1Type = {
  ellipse398?: string;
  jimmySmith?: string;
  may282023?: string;
  prop?: string;
  thisMacbookAirAtFirstFeel?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propPadding?: CSSProperties['padding'];
  propFlex?: CSSProperties['flex'];
  propMinWidth?: CSSProperties['minWidth'];
};

const Comment1: FunctionComponent<Comment1Type> = ({
  ellipse398,
  jimmySmith,
  may282023,
  prop,
  thisMacbookAirAtFirstFeel,
  prop1,
  prop2,
  propPadding,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    }
  }, [propPadding])

  const emptyFeedbackStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    }
  }, [propFlex, propMinWidth])

  return (
    <div className="self-stretch rounded-lg bg-neutral-gray-f9f9f9 box-border flex flex-col items-end justify-start py-[0.778rem] px-[0.833rem] gap-[0.667rem] max-w-full w-auto h-auto text-left text-[1.111rem] text-black font-web-button-lg border-[1px] border-solid border-neutral-gray-ededed hover:bg-neutral-gray-f9f9f9 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[12px] hover:items-end hover:justify-start hover:rounded-lg hover:py-3.5 hover:px-[15px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
      <div className="self-stretch flex flex-row items-center justify-start gap-[0.889rem] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-start hover:max-w-full mq450:flex-wrap">
        <img
          className="h-[3.333rem] w-[3.333rem] relative rounded-[50%] object-cover flex box-border border-[1px] border-solid border-neutral-gray-717171 hover:flex hover:w-[60px] hover:h-[60px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-717171"
          loading="lazy"
          alt=""
          src={ellipse398}
        />
        <div className="flex-1 flex flex-row items-center justify-between min-w-[523] [row-gap:20px] max-w-full gap-[0rem] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-between hover:min-w-[523] hover:[row-gap:20px] hover:max-w-full mq450:flex-wrap mq450:min-w-full">
          <div className="w-[41.722rem] flex flex-col items-start justify-start gap-[0.222rem] max-w-full h-auto hover:flex hover:w-[751px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:max-w-full">
            <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto mq900:text-[0.889rem]">
              {jimmySmith}
            </div>
            <div className="self-stretch relative text-[0.667rem] font-medium text-neutral-gray-9e9e9e flex w-auto hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto">
              {may282023}
            </div>
          </div>
          <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-[0.389rem] px-[0.444rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] text-[0.667rem] text-white hover:bg-primary-primary-500 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center hover:rounded-lg hover:py-[7px] hover:px-2 hover:box-border">
            <img
              className="h-[1rem] w-[1rem] relative rounded-12xs-5 min-h-[18] bg-white flex hover:bg-white hover:flex hover:w-[18px] hover:h-[18px] hover:rounded-12xs-5 hover:min-h-[18]"
              alt=""
              src="/icons/star-icon.svg"
            />
            <div className="relative font-medium flex min-w-[19] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-white hover:flex hover:min-w-[19]">
              {prop}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-center gap-[0.444rem] w-auto h-auto text-[0.889rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-end hover:justify-center">
        <div className="self-stretch relative leading-[1.333rem] font-light flex overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
          {thisMacbookAirAtFirstFeel}
        </div>
        <div className="rounded-lg flex flex-row items-center justify-center py-[0.667rem] px-[0.583rem] box-border gap-[0.444rem] w-auto [align-self:unset] h-auto text-center text-[0.778rem] text-primary hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-[10.5px] hover:box-border">
          <div className="relative flex min-w-[75] hover:font-web-button-lg hover:text-sm hover:text-center hover:text-primary hover:flex hover:min-w-[75]">
            Show More
          </div>
          <img
            className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
            alt=""
            src="/icons/vuesaxoutlinearrowdown-2.svg"
          />
        </div>
        <div
          className="self-stretch h-[1.333rem] flex flex-row items-center justify-end py-[0rem] pr-[0rem] pl-[42.056rem] box-border gap-[0.667rem] w-auto text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-6 hover:flex-row hover:gap-[12px] hover:items-center hover:justify-end hover:py-0 hover:pr-0 hover:pl-[757px] hover:box-border mq450:pl-[21rem] mq450:box-border mq900:pl-[1.111rem] mq900:box-border"
          style={frameDivStyle}
        >
          <div className="flex-1 rounded-lg flex flex-row items-center justify-center py-[0.667rem] px-[0rem] box-border h-auto gap-[0.444rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-0 hover:box-border">
            <img
              className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
              loading="lazy"
              alt=""
              src="/icons/vuesaxoutlinelike.svg"
            />
          </div>
          <div
            className="flex-1 relative leading-[1.333rem] font-light flex min-w-[17] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-717171 hover:flex hover:flex-1 hover:min-w-[17]"
            style={emptyFeedbackStyle}
          >
            {prop1}
          </div>
          <img
            className="h-[1.333rem] w-[0rem] relative object-contain flex box-border border-[1px] border-solid border-neutral-gray-717171 hover:flex hover:w-0 hover:h-6 hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-717171"
            alt=""
            src="/icons/line-10.svg"
          />
          <div className="flex-1 rounded-lg flex flex-row items-center justify-center py-[0.667rem] px-[0rem] box-border h-auto gap-[0.444rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-0 hover:box-border">
            <img
              className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
              loading="lazy"
              alt=""
              src="/icons/vuesaxoutlinedislike.svg"
            />
          </div>
          <div className="relative leading-[1.333rem] font-light flex min-w-[10] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[10]">
            {prop2}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment1
