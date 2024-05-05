import type { CSSProperties,FunctionComponent } from 'react'
import { useMemo } from 'react'

export type VideosCardType = {
  m2MacBookPro13UnboxingCom?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties['backgroundImage'];
  propPadding?: CSSProperties['padding'];
  propHeight?: CSSProperties['height'];
};

const VideosCard: FunctionComponent<VideosCardType> = ({
  m2MacBookPro13UnboxingCom,
  propBackgroundImage,
  propPadding,
  propHeight,
}) => {
  const videosCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    }
  }, [propBackgroundImage])

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    }
  }, [propPadding])

  const howToConnectContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    }
  }, [propHeight])

  return (
    <div
      className="rounded-lg flex flex-col items-start justify-start pt-[4.389rem] px-[0rem] pb-[0rem] box-border gap-[0.389rem] bg-[url('/public/videos-card1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full w-auto [align-self:unset] h-auto text-center text-[0.889rem] text-white font-web-button-lg hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[7px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-[79px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full"
      style={videosCardStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.111rem] box-border w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
        <img
          className="h-[2.667rem] w-[2.667rem] relative flex gap-[0rem] hover:flex hover:w-12 hover:h-12 hover:gap-[0px]"
          alt=""
          src="/icons/vuesaxboldplaycircle.svg"
        />
      </div>
      <div
        className="self-stretch rounded-t-none rounded-b-lg bg-gray-700 [backdrop-filter:blur(15px)] flex flex-row items-start justify-start pt-[0.556rem] px-[0.139rem] pb-[0.778rem] box-border max-w-full w-auto h-auto gap-[0.556rem] hover:bg-gray-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:rounded-t-none hover:rounded-b-lg hover:pt-2.5 hover:px-[2.5px] hover:pb-3.5 hover:box-border hover:[backdrop-filter:blur(15px)] hover:max-w-full"
        style={titleStyle}
      >
        <div
          className="flex-1 relative leading-[1.333rem] font-light flex max-w-full hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-center hover:text-white hover:flex hover:flex-1 hover:max-w-full"
          style={howToConnectContainerStyle}
        >
          <p className="m-0">{m2MacBookPro13UnboxingCom}</p>
        </div>
      </div>
    </div>
  )
}

export default VideosCard
