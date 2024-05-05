import type { FunctionComponent } from 'react'

import CategoriesContainer from '#/components/CategoriesContainer'
import FrameComponent from '#/components/FrameComponent'
import FrameComponent2 from '#/components/FrameComponent2'
import MainFooter from '#/components/MainFooter'
import Policy from '#/components/Policy'

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.111rem] box-border gap-[1.667rem] leading-[normal] tracking-[normal] h-auto">
      <FrameComponent2 />
      <div className="w-[6.556rem] h-[6.556rem] absolute !m-[0] top-[119.278rem] right-[30.722rem] rounded-[50%] box-border [transform:rotate(-90deg)] [transform-origin:0_0] opacity-[0.5] flex z-[1] border-[20px] border-solid border-white hover:flex hover:w-[118px] hover:h-[118px] hover:[transform:rotate(-90deg)] hover:box-border hover:border-[20px] hover:border-solid hover:border-white" />
      <div className="w-[6.556rem] h-[6.556rem] absolute !m-[0] top-[97.833rem] left-[21.5rem] rounded-[50%] box-border [transform:rotate(-90deg)] [transform-origin:0_0] opacity-[0.5] flex z-[1] border-[20px] border-solid border-white hover:flex hover:w-[118px] hover:h-[118px] hover:[transform:rotate(-90deg)] hover:box-border hover:border-[20px] hover:border-solid hover:border-white" />
      <div className="w-[6.556rem] h-[6.556rem] absolute !m-[0] top-[102rem] left-[2.111rem] rounded-[50%] box-border [transform:rotate(-90deg)] [transform-origin:0_0] opacity-[0.5] flex z-[1] border-[20px] border-solid border-white hover:flex hover:w-[118px] hover:h-[118px] hover:[transform:rotate(-90deg)] hover:box-border hover:border-[20px] hover:border-solid hover:border-white" />
      <main className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.111rem] box-border max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border hover:max-w-full">
        <section className="w-[68rem] flex flex-col items-start justify-start gap-[2.667rem] max-w-full h-auto [transform:rotate(0deg)] text-left text-[1.111rem] text-black font-web-button-lg hover:flex hover:w-[1224px] hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[1.333rem_2.667rem]">
          <CategoriesContainer />
          <FrameComponent />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.111rem] pl-[0.056rem] box-border max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0.5 hover:pl-px hover:box-border hover:max-w-full">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[1.111rem] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[20px] hover:items-end hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq900:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.3rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[5.400000000000006px] hover:box-border">
                <div className="flex flex-row items-start justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <img
                    className="self-stretch w-[2.222rem] relative max-h-full min-h-[34] flex h-auto gap-[0rem] hover:flex hover:w-10 hover:self-stretch hover:h-auto hover:gap-[0px] hover:min-h-[34]"
                    loading="lazy"
                    alt=""
                    src="/icons/icon.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[2.8000000000000114px] hover:px-0 hover:pb-0 hover:box-border">
                    <div className="relative leading-[1.556rem] font-light flex hover:font-light hover:font-web-button-lg hover:text-xl hover:leading-[28px] hover:text-left hover:text-black hover:flex mq700:text-[0.889rem] mq700:leading-[1.222rem]">
                      Latest and Greatest Tech
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <img
                  className="h-[2.433rem] w-[2.222rem] relative flex gap-[0rem] hover:flex hover:w-10 hover:h-[43.8px] hover:gap-[0px]"
                  alt=""
                  src="/icons/icon-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.439rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[7.900000000000006px] hover:px-0 hover:pb-0 hover:box-border">
                  <div className="relative leading-[1.556rem] font-light flex min-w-[98] hover:font-light hover:font-web-button-lg hover:text-xl hover:leading-[28px] hover:text-left hover:text-black hover:flex hover:min-w-[98] mq700:text-[0.889rem] mq700:leading-[1.222rem]">
                    Guarantee
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.411rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[7.400000000000006px] hover:box-border">
                <div className="flex flex-row items-start justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <img
                    className="self-stretch w-[3.444rem] relative max-h-full min-h-[31] flex h-auto gap-[0rem] hover:flex hover:w-[62px] hover:self-stretch hover:h-auto hover:gap-[0px] hover:min-h-[31]"
                    loading="lazy"
                    alt=""
                    src="/icons/frame-26086041.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.072rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[1.3000000000000114px] hover:px-0 hover:pb-0 hover:box-border">
                    <div className="relative leading-[1.556rem] font-light flex hover:font-light hover:font-web-button-lg hover:text-xl hover:leading-[28px] hover:text-left hover:text-black hover:flex mq700:text-[0.889rem] mq700:leading-[1.222rem]">
                      Free Shipping over 1000$
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] text-[1rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <img
                  className="h-[2.5rem] w-[2.222rem] relative flex gap-[0rem] hover:flex hover:w-10 hover:h-[45px] hover:gap-[0px]"
                  alt=""
                  src="/icons/icon-2.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.639rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[11.5px] hover:px-0 hover:pb-0 hover:box-border">
                  <div className="relative font-light flex min-w-[111] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:min-w-[111]">
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch h-[19.278rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border max-w-full w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-[347px] hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[54px] hover:box-border hover:max-w-full mq700:pb-[1.944rem] mq700:box-border mq900:h-auto">
        <MainFooter />
        <Policy />
      </footer>
    </div>
  )
}

export default LandingPage
