import type { FunctionComponent } from 'react'

import Comment1 from '#/components/Comment1'
import Header1 from '#/components/Header1'
import ProductCard1 from '#/components/ProductCard1'
import ProductCard5 from '#/components/ProductCard5'
import VideosCard from '#/components/VideosCard'

const DesktopProduct: FunctionComponent = () => {
  return (
    <div className="relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.111rem] box-border gap-[3.111rem] leading-[normal] tracking-[normal] h-auto mq700:gap-[1.556rem_3.111rem]">
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] bottom-[48.5rem] left-[5.111rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[2] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        loading="lazy"
        alt=""
        src="/icons/carousel.svg"
      />
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] right-[5.111rem] bottom-[48.5rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[1] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        alt=""
        src="/icons/carousel-1.svg"
      />
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] top-[79.111rem] right-[5.111rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[1] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        alt=""
        src="/icons/carousel-1.svg"
      />
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] top-[79.111rem] left-[5.111rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[1] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        alt=""
        src="/icons/carousel.svg"
      />
      <main className="self-stretch flex flex-col items-start justify-start gap-[1.333rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <Header1 />
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[6rem] box-border gap-[122.056rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-center text-[1.111rem] text-black font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[2197px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[108px] hover:box-border hover:max-w-full mq700:gap-[122.056rem_30.5rem] mq700:pl-[1.5rem] mq700:pr-[1.5rem] mq700:box-border mq900:gap-[122.056rem_15.278rem]">
          <div className="ml-[-2627px] h-[10.167rem] w-[23.889rem] flex flex-col items-start justify-start pt-[5.611rem] px-[0rem] pb-[0rem] box-border max-w-full shrink-0 gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[430px] hover:h-[183px] hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[101px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full hover:shrink-0">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:1de1738] flex w-auto hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:shrink-0 hover:[debug_commit:1de1738]"
              loading="lazy"
              alt=""
              src="/images/image-184@2x.png"
            />
          </div>
          <div className="w-[68rem] flex flex-col items-start justify-start gap-[1.778rem] shrink-0 [debug_commit:1de1738] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1224px] hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full mq700:gap-[0.889rem_1.778rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.722rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-[1rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[49px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[2.722rem_1.333rem] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.611rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[47px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:min-w-full mq900:gap-[1.278rem_2.611rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2.222rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[40px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[1.111rem_2.222rem]">
                  <div className="w-[13.389rem] flex flex-row items-start justify-start h-auto gap-[0rem] hover:flex hover:w-[241px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start">
                    <div className="flex flex-row items-start justify-start py-[0.222rem] px-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-1 hover:px-0 hover:box-border">
                      <div className="relative font-light flex min-w-[50] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-neutral-gray-717171 hover:flex hover:min-w-[50]">
                        Home
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.167rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-[1.333rem] h-[1.333rem] relative object-contain flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                        loading="lazy"
                        alt=""
                        src="/icons/vuesaxoutlinearrowdown.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start py-[0.222rem] px-[0rem] box-border h-auto gap-[0rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-1 hover:px-0 hover:box-border">
                      <div className="relative font-light flex min-w-[75] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-neutral-gray-717171 hover:flex hover:min-w-[75]">
                        Products
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.167rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-[1.333rem] h-[1.333rem] relative object-contain flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                        alt=""
                        src="/icons/vuesaxoutlinearrowdown.svg"
                      />
                    </div>
                    <div className="flex-1 box-border flex flex-row items-start justify-start pt-[0.222rem] px-[0rem] pb-[0.111rem] h-auto gap-[0rem] text-primary border-b-[1px] border-solid border-primary hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:pt-1 hover:px-0 hover:pb-0.5 hover:box-border">
                      <div className="relative font-light flex min-w-[68] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-primary hover:flex hover:min-w-[68]">
                        Laptops
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.333rem] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-[1.111rem] text-black1 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.333rem] min-w-[322] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[322] hover:max-w-full">
                      <div className="self-stretch h-[18.778rem] rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-start p-[0.444rem] box-border gap-[0.667rem] bg-[url('/public/image3@3x.png')] bg-cover bg-no-repeat bg-[top] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[338px] hover:flex-col hover:gap-[12px] hover:items-start hover:justify-start hover:rounded-lg hover:p-2 hover:box-border">
                        <img
                          className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                          alt=""
                          src="/icons/vuesaxoutlineheart.svg"
                        />
                        <img
                          className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                          alt=""
                          src="/icons/vuesaxoutlinenotificationbing.svg"
                        />
                        <img
                          className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                          alt=""
                          src="/icons/vuesaxoutlinedirectboxsend.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[1.333rem] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq900:flex-wrap">
                        <div className="flex-1 rounded overflow-hidden flex flex-row items-start justify-start pt-[1.278rem] px-[1.611rem] pb-[1.333rem] box-border bg-[url('/public/subtract-button@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[20] bg-gray-600 h-auto gap-[0rem] border-[1px] border-solid border-neutral-gray-ededed hover:bg-gray-600 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded hover:pt-[23px] hover:px-[29px] hover:pb-6 hover:box-border hover:min-w-[20] hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
                          <img
                            className="h-[1.111rem] w-[1.111rem] relative bg-white flex hover:bg-white hover:flex hover:w-5 hover:h-5"
                            alt=""
                            src="/icons/subtract.svg"
                          />
                        </div>
                        <img
                          className="self-stretch w-[4.444rem] relative rounded max-h-full overflow-hidden shrink-0 object-cover min-h-[71] flex h-auto gap-[0rem] box-border border-[1px] border-solid border-neutral-gray-ededed hover:flex hover:w-20 hover:self-stretch hover:h-auto hover:gap-[0px] hover:rounded hover:box-border hover:min-h-[71] hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed"
                          loading="lazy"
                          alt=""
                          src="/images/frame-26086048@2x.png"
                        />
                        <img
                          className="self-stretch w-[4.444rem] relative rounded max-h-full overflow-hidden shrink-0 object-cover min-h-[71] flex h-auto gap-[0rem] box-border border-[1px] border-solid border-neutral-gray-ededed hover:flex hover:w-20 hover:self-stretch hover:h-auto hover:gap-[0px] hover:rounded hover:box-border hover:min-h-[71] hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed"
                          loading="lazy"
                          alt=""
                          src="/images/frame-26086020@2x.png"
                        />
                        <img
                          className="self-stretch w-[4.444rem] relative rounded max-h-full overflow-hidden shrink-0 object-cover min-h-[71] flex h-auto gap-[0rem] box-border border-[1px] border-solid border-neutral-gray-ededed hover:flex hover:w-20 hover:self-stretch hover:h-auto hover:gap-[0px] hover:rounded hover:box-border hover:min-h-[71] hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed"
                          loading="lazy"
                          alt=""
                          src="/images/frame-26086021@2x.png"
                        />
                        <img
                          className="self-stretch w-[4.444rem] relative rounded max-h-full overflow-hidden shrink-0 min-h-[71] bg-gray-600 flex h-auto gap-[0rem] box-border border-[1px] border-solid border-neutral-gray-ededed hover:bg-gray-600 hover:flex hover:w-20 hover:self-stretch hover:h-auto hover:gap-[0px] hover:rounded hover:box-border hover:min-h-[71] hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed"
                          loading="lazy"
                          alt=""
                          src="/icons/frame-26086022.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[19.056rem] flex flex-col items-start justify-start gap-[1.333rem] min-w-[343] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[343px] hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[343] hover:max-w-full mq700:flex-1 mq700:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                        <div className="h-[1.333rem] w-[19.056rem] absolute !m-[0] top-[0rem] left-[-0.222rem] font-medium flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black1 hover:flex hover:w-[343px] mq900:text-[0.889rem]">{` `}</div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[1.333rem] max-w-full h-auto z-[1] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
                            <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black1 hover:flex hover:self-stretch hover:w-auto mq900:text-[0.889rem]">
                              MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto text-[0.667rem] text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-start">
                              <div className="rounded bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center p-[0.167rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] hover:bg-primary-primary-500 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center hover:rounded hover:p-[3px] hover:box-border">
                                <img
                                  className="h-[1rem] w-[1rem] relative rounded-12xs-5 min-h-[18] bg-white flex hover:bg-white hover:flex hover:w-[18px] hover:h-[18px] hover:rounded-12xs-5 hover:min-h-[18]"
                                  alt=""
                                  src="/icons/star-icon.svg"
                                />
                                <div className="relative font-medium flex min-w-[19] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-white hover:flex hover:min-w-[19]">
                                  4.9
                                </div>
                              </div>
                              <img
                                className="self-stretch w-[0rem] relative max-h-full object-contain min-h-[25] flex h-auto box-border border-[1px] border-solid border-neutral-gray-717171 hover:flex hover:w-0 hover:self-stretch hover:h-auto hover:box-border hover:min-h-[25] hover:border-[1px] hover:border-solid hover:border-neutral-gray-717171"
                                alt=""
                                src="/icons/line-3.svg"
                              />
                              <div className="relative text-[0.778rem] font-medium text-neutral-gray-717171 flex min-w-[60] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[60]">
                                sold 125
                              </div>
                            </div>
                          </div>
                          <div className="w-[18.167rem] flex flex-row items-start justify-start gap-[1.778rem] max-w-full h-auto text-[0.667rem] text-neutral-gray-717171 hover:flex hover:w-[327px] hover:h-auto hover:flex-row hover:gap-[32px] hover:items-start hover:justify-start hover:max-w-full mq900:flex-wrap mq900:gap-[1.778rem_0.889rem]">
                            <div className="flex flex-row items-center justify-start gap-[0.222rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[4px] hover:items-center hover:justify-start">
                              <img
                                className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                                alt=""
                                src="/icons/vuesaxoutlineshop.svg"
                              />
                              <div className="relative font-medium flex min-w-[47] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[47]">
                                In Stock
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0.222rem] min-w-[60] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[4px] hover:items-center hover:justify-start hover:min-w-[60]">
                              <img
                                className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                                alt=""
                                src="/icons/vuesaxoutlineverify.svg"
                              />
                              <div className="relative font-medium flex min-w-[68] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[68]">
                                Guaranteed
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0.222rem] min-w-[65] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[4px] hover:items-center hover:justify-start hover:min-w-[65]">
                              <img
                                className="h-[1.111rem] w-[1.111rem] relative flex hover:flex hover:w-5 hover:h-5"
                                alt=""
                                src="/icons/vuesaxoutlinetruck.svg"
                              />
                              <div className="relative font-medium flex min-w-[76] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[76]">
                                Free Delivery
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[10.889rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.444rem] box-border gap-[1.111rem] h-auto [transform:rotate(0deg)] text-[0.889rem] text-black hover:flex hover:w-[196px] hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-2 hover:box-border">
                        <div className="w-[5.556rem] relative leading-[1.333rem] font-light flex items-center shrink-0 hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:w-[100px]">
                          Select color
                        </div>
                        <div className="h-[1.333rem] w-[3.111rem] flex flex-row items-start justify-start gap-[0.444rem] [transform:rotate(0deg)] hover:flex hover:w-14 hover:h-6 hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                          <div className="h-[1.333rem] w-[1.333rem] relative rounded-13xl bg-darkgray overflow-hidden shrink-0 flex gap-[0rem] hover:bg-darkgray hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:rounded-13xl" />
                          <img
                            className="h-[1.333rem] w-[1.333rem] relative rounded-13xl overflow-hidden shrink-0 bg-darkslategray-200 flex gap-[0rem] hover:bg-darkslategray-200 hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:rounded-13xl"
                            alt=""
                            src="/icons/select-color.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[16rem] flex flex-col items-start justify-start h-auto gap-[0rem] [transform:rotate(0deg)] text-[0.778rem] text-neutral-gray-717171 hover:flex hover:w-72 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                        <div className="self-stretch rounded overflow-hidden flex flex-col items-start justify-center w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-center hover:rounded">
                          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[3.167rem] pl-[0rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:pr-[57px] hover:pl-0 hover:box-border mq900:pr-[1.111rem] mq900:box-border">
                            <div className="flex-1 flex flex-row items-center justify-start py-[0.417rem] px-[0.444rem] box-border h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:px-2 hover:box-border">
                              <div className="relative font-medium flex min-w-[61] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[61]">
                                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                                  <li>brand</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start py-[0.417rem] pr-[0.444rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:pr-2 hover:pl-0 hover:box-border">
                              <div className="relative font-medium flex min-w-[39] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[39]">
                                Apple
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start w-auto [align-self:unset] h-auto gap-[0rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start">
                            <div className="w-[10.222rem] flex flex-row items-center justify-start py-[0.417rem] px-[0.444rem] box-border h-auto gap-[0.556rem] hover:flex hover:w-[184px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:px-2 hover:box-border">
                              <div className="relative font-medium flex min-w-[106] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[106]">
                                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                                  <li>{`Model Name `}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start py-[0.417rem] pr-[0.833rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:pr-[15px] hover:pl-0 hover:box-border">
                              <div className="relative font-medium flex min-w-[89] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[89]">
                                Macbook Pro
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[1.111rem] pl-[0rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:pr-5 hover:pl-0 hover:box-border">
                            <div className="flex-1 flex flex-row items-center justify-start py-[0.417rem] px-[0.444rem] box-border h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:px-2 hover:box-border">
                              <div className="relative font-medium flex min-w-[100] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[100]">
                                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                                  <li>Screen Size</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start py-[0.417rem] pr-[0.444rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:pr-2 hover:pl-0 hover:box-border">
                              <div className="relative font-medium flex min-w-[76] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[76]">
                                13.3 Inches
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[2.556rem] pl-[0rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:pr-[46px] hover:pl-0 hover:box-border mq900:pr-[1.111rem] mq900:box-border">
                            <div className="flex-1 flex flex-row items-center justify-start py-[0.417rem] px-[0.444rem] box-border h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:px-2 hover:box-border">
                              <div className="relative font-medium flex min-w-[118] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[118]">
                                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                                  <li>Hard Disk Size</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start py-[0.417rem] pr-[0.444rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:pr-2 hover:pl-0 hover:box-border">
                              <div className="relative font-medium flex min-w-[50] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[50]">
                                256 GB
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[2.778rem] pl-[0rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:py-0 hover:pr-[50px] hover:pl-0 hover:box-border mq900:pr-[1.111rem] mq900:box-border">
                            <div className="flex-1 flex flex-row items-center justify-start py-[0.417rem] px-[0.444rem] box-border h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-[7.5px] hover:px-2 hover:box-border">
                              <div className="relative font-medium flex min-w-[96] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[96]">
                                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                                  <li>CPU Model</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center py-[0.417rem] pr-[0.444rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[10px] hover:items-start hover:justify-center hover:py-[7.5px] hover:pr-2 hover:pl-0 hover:box-border">
                              <div className="relative font-medium flex min-w-[46] hover:font-medium hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[46]">
                                core i5
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[1.611rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] text-center text-primary hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[29px] hover:box-border">
                          <div className="rounded-lg flex flex-row items-start justify-start gap-[0.222rem] w-auto [align-self:unset] h-auto z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start hover:rounded-lg">
                            <div className="flex flex-col items-start justify-start pt-[0.194rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3.5px] hover:px-0 hover:pb-0 hover:box-border">
                              <div className="relative flex min-w-[75] hover:font-web-button-lg hover:text-sm hover:text-center hover:text-primary hover:flex hover:min-w-[75]">
                                Show More
                              </div>
                            </div>
                            <img
                              className="h-[1.333rem] w-[1.333rem] relative flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                              loading="lazy"
                              alt=""
                              src="/icons/vuesaxoutlinearrowcircleright.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="m-0 w-[44.889rem] flex flex-col items-start justify-start gap-[1.722rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[808px] hover:h-auto hover:flex-col hover:gap-[31px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[0.833rem_1.722rem]">
                  <div className="self-stretch h-[2.167rem] relative flex w-auto gap-[0rem] items-start justify-start [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-[39px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="absolute top-[2.111rem] left-[0rem] box-border w-[44.944rem] h-[0.056rem] flex border-t-[1px] border-solid border-neutral-gray-cbcbcb border-[1px] hover:flex hover:w-[809px] hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-cbcbcb" />
                    <div className="absolute top-[0rem] left-[0rem] box-border flex flex-row items-start justify-start pt-[0.444rem] px-[0.444rem] pb-[0.333rem] w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] border-b-[1px] border-solid border-primary hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:pt-2 hover:px-2 hover:pb-1.5 hover:box-border">
                      <div className="relative text-[1rem] font-light font-web-button-lg text-primary text-center flex hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-primary hover:flex">
                        Technical Details
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[10.167rem] flex flex-row items-start justify-start p-[0.444rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:p-2 hover:box-border">
                      <div className="relative text-[1rem] font-light font-web-button-lg text-black text-center flex hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-black hover:flex">
                        Similar Products
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[19.944rem] flex flex-row items-start justify-start p-[0.444rem] box-border w-auto [align-self:unset] h-auto gap-[0.556rem] z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:p-2 hover:box-border">
                      <div className="relative text-[1rem] font-light font-web-button-lg text-black text-center flex min-w-[91] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-center hover:text-black hover:flex hover:min-w-[91]">
                        Comments
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start max-w-full w-auto [align-self:unset] h-auto gap-[0rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:max-w-full">
                    <div className="flex flex-col items-start justify-start gap-[0.889rem] max-w-full w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:max-w-full">
                      <div className="relative text-[1.111rem] font-medium font-web-button-lg text-black text-center flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex mq900:text-[0.889rem]">
                        Technical Details
                      </div>
                      <div className="w-[44.889rem] overflow-x-auto flex flex-col items-center justify-center gap-[0.222rem] max-w-full h-auto hover:flex hover:w-[808px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-center hover:justify-center hover:max-w-full">
                        <div className="w-[44.889rem] rounded-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start h-auto gap-[0rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[56] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[56]">
                              Display
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start py-[0.889rem] pr-[1.944rem] pl-[0.667rem] box-border max-w-full w-auto [align-self:unset] h-auto gap-[0.556rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:pr-[35px] hover:pl-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex">
                              13.3-inch (diagonal) LED-backlit display with IPS
                              technology
                            </div>
                          </div>
                        </div>
                        <div className="w-[44.889rem] rounded-lg flex flex-row items-center justify-start h-auto gap-[0rem] hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[69] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[69]">
                              Graphics
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0.889rem] px-[0.667rem] box-border max-w-full h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:px-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex">
                              Apple 10-core GPU
                            </div>
                          </div>
                        </div>
                        <div className="w-[44.889rem] rounded-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start h-auto gap-[0rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[78] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[78]">
                              Processor
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0.889rem] px-[0.667rem] box-border max-w-full h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:px-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex min-w-[108] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex hover:min-w-[108]">
                              Apple M2 chip
                            </div>
                          </div>
                        </div>
                        <div className="w-[44.889rem] rounded-lg flex flex-row items-center justify-start h-auto gap-[0rem] hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[76] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[76]">
                              In the box
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0.889rem] px-[0.667rem] box-border max-w-full h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:px-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex">
                              67W USB-C Power Adapter, USB-C Charge Cable (2 m)
                            </div>
                          </div>
                        </div>
                        <div className="w-[44.889rem] rounded-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start h-auto gap-[0rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-neutral-gray-f9f9f9 flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:bg-neutral-gray-f9f9f9 hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[51] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[51]">
                              Height
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0.889rem] px-[0.667rem] box-border max-w-full h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:px-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex">
                              0.61 inch (1.56 cm)
                            </div>
                          </div>
                        </div>
                        <div className="w-[44.889rem] rounded-lg flex flex-row items-center justify-start h-auto gap-[0rem] hover:flex hover:w-[808px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-start hover:rounded-lg">
                          <div className="w-[17.333rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg flex flex-row items-center justify-start py-[1.028rem] px-[0.667rem] box-border h-auto gap-[0.556rem] hover:flex hover:w-[312px] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-none hover:rounded-bl-lg hover:py-[18.5px] hover:px-3 hover:box-border">
                            <div className="relative text-[0.889rem] font-medium font-web-button-lg text-neutral-gray-717171 text-left flex min-w-[46] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[46]">
                              Width
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0.889rem] px-[0.667rem] box-border max-w-full h-auto gap-[0.556rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-start hover:py-4 hover:px-3 hover:box-border hover:max-w-full">
                            <div className="relative text-[0.889rem] leading-[1.333rem] font-light font-web-button-lg text-neutral-gray-2d2d2d text-left flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-2d2d2d hover:flex">
                              11.97 inches (30.41 cm)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg flex flex-row items-center justify-center gap-[0.222rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[4px] hover:items-center hover:justify-center hover:rounded-lg">
                      <div className="relative text-[0.778rem] font-web-button-lg text-primary text-center flex min-w-[75] hover:font-web-button-lg hover:text-sm hover:text-center hover:text-primary hover:flex hover:min-w-[75]">
                        Show More
                      </div>
                      <img
                        className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
                        alt=""
                        src="/icons/vuesaxoutlinearrowcircledown.svg"
                      />
                    </div>
                  </div>
                </form>
                <div className="relative text-[1.111rem] font-medium text-black flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex mq900:text-[0.889rem]">
                  Similar Products
                </div>
              </div>
              <div className="w-[17.333rem] flex flex-col items-start justify-start pt-[3.889rem] px-[0rem] pb-[0rem] box-border min-w-[312] h-auto gap-[0rem] [transform:rotate(0deg)] text-left text-[0.889rem] text-black hover:flex hover:w-[312px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[70px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[312] mq700:pt-[2.5rem] mq700:box-border mq450:flex-1">
                <div className="self-stretch rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] flex flex-col items-start justify-start p-[1.333rem] box-border gap-[0.889rem] w-auto h-auto hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:rounded-lg hover:p-6 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] mq900:pt-[1.111rem] mq900:pb-[1.111rem] mq900:box-border">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[0.222rem] w-auto h-auto text-[1.111rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-center hover:justify-center">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.111rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between">
                      <div className="relative font-medium flex min-w-[96] whitespace-nowrap hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:min-w-[96] hover:whitespace-nowrap mq900:text-[0.889rem]">
                        $ 1299.00
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0.111rem] w-auto [align-self:unset] h-auto text-[0.889rem] text-secondary hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-start">
                        <img
                          className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
                          alt=""
                          src="/icons/vuesaxbolddiscountshape.svg"
                        />
                        <div className="relative font-medium flex min-w-[39] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-secondary hover:flex hover:min-w-[39]">
                          -12%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[7.444rem] pl-[0rem] box-border gap-[0.444rem] w-auto h-auto text-[0.778rem] text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:py-0 hover:pr-[134px] hover:pl-0 hover:box-border mq900:pr-[1.111rem] mq900:box-border">
                      <div className="relative font-light flex min-w-[60] hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[60]">
                        last price
                      </div>
                      <div className="relative font-light flex min-w-[62] whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[62] hover:whitespace-nowrap">
                        $ 1410,87
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.278rem] box-border gap-[0.833rem] w-auto h-auto text-neutral-gray-444444 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[15px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[5px] hover:box-border">
                    <div className="self-stretch h-[1.222rem] flex flex-row items-start justify-start py-[0.056rem] px-[0rem] box-border gap-[0.222rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[22px] hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start hover:py-px hover:px-0 hover:box-border">
                      <img
                        className="h-[1.111rem] w-[1.111rem] relative min-h-[20] flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px] hover:min-h-[20]"
                        alt=""
                        src="/icons/radiobutton.svg"
                      />
                      <div className="mt-[-1.5px] h-[1.278rem] flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0rem] hover:flex hover:flex-1 hover:h-[23px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-0 hover:box-border">
                        <div className="relative leading-[1.333rem] font-light flex min-w-[67] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-444444 hover:flex hover:min-w-[67]">
                          Pay Now
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.222rem] w-auto h-auto text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.222rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start">
                        <div className="flex flex-col items-start justify-start pt-[0.056rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                          <img
                            className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                            alt=""
                            src="/icons/radiobutton-2.svg"
                          />
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start h-auto gap-[0rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start">
                          <div className="h-[1.222rem] w-[6.889rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[0rem] hover:flex hover:w-[124px] hover:h-[22px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                            <div className="w-[7.778rem] relative leading-[1.333rem] font-light flex shrink-0 [debug_commit:1de1738] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:w-[140px] hover:shrink-0 hover:[debug_commit:1de1738]">
                              Buy in installments
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.333rem] box-border w-auto h-auto gap-[0.556rem] text-[0.667rem] text-neutral-gray-444444 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:py-0 hover:px-6 hover:box-border">
                        <div className="relative font-light flex hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-444444 hover:flex">
                          choose your installments period
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.444rem] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start">
                      <div className="flex-1 rounded bg-primary-primary-25 box-border overflow-hidden flex flex-col items-start justify-start py-[0.278rem] px-[0.389rem] h-auto gap-[0rem] text-primary-primary-400 border-[1px] border-solid border-primary-primary-400 hover:bg-primary-primary-25 hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:rounded hover:py-[5px] hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-primary-primary-400">
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.833rem] pl-[0.861rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[15px] hover:pl-[15.5px] hover:box-border">
                          <div className="relative font-light flex min-w-[12] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-primary-primary-400 hover:flex hover:min-w-[12]">
                            3
                          </div>
                        </div>
                        <div className="relative text-[0.667rem] font-light flex min-w-[43] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-primary-primary-400 hover:flex hover:min-w-[43]">
                          Months
                        </div>
                      </div>
                      <div className="flex-1 rounded bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[0.278rem] px-[0.389rem] h-auto gap-[0rem] border-[1px] border-solid border-neutral-gray-ededed hover:bg-white hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:rounded hover:py-[5px] hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.889rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-4 hover:box-border">
                          <div className="relative font-light flex min-w-[11] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-neutral-gray-444444 hover:flex hover:min-w-[11]">
                            6
                          </div>
                        </div>
                        <div className="relative text-[0.667rem] font-light text-neutral-gray-717171 flex min-w-[43] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[43]">
                          Months
                        </div>
                      </div>
                      <div className="flex-1 rounded bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[0.278rem] px-[0.389rem] h-auto gap-[0rem] border-[1px] border-solid border-neutral-gray-ededed hover:bg-white hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:rounded hover:py-[5px] hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.611rem] pl-[0.639rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[11px] hover:pl-[11.5px] hover:box-border">
                          <div className="relative font-light flex min-w-[20] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-neutral-gray-444444 hover:flex hover:min-w-[20]">
                            12
                          </div>
                        </div>
                        <div className="relative text-[0.667rem] font-light text-neutral-gray-717171 flex min-w-[43] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[43]">
                          Months
                        </div>
                      </div>
                      <div className="flex-1 rounded bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[0.278rem] px-[0.389rem] h-auto gap-[0rem] border-[1px] border-solid border-neutral-gray-ededed hover:bg-white hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:rounded hover:py-[5px] hover:px-[7px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.611rem] pl-[0.639rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[11px] hover:pl-[11.5px] hover:box-border">
                          <div className="relative font-light flex min-w-[20] hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-neutral-gray-444444 hover:flex hover:min-w-[20]">
                            18
                          </div>
                        </div>
                        <div className="relative text-[0.667rem] font-light text-neutral-gray-717171 flex min-w-[43] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[43]">
                          Months
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-[0rem] text-[0.778rem] text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start">
                      <div className="relative font-light flex min-w-[56] whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-sm hover:text-left hover:text-black hover:flex hover:min-w-[56] hover:whitespace-nowrap">{`$433.00 `}</div>
                      <div className="flex flex-col items-start justify-start pt-[0.056rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] text-[0.667rem] text-neutral-gray-717171 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                        <div className="relative font-light flex min-w-[41] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[41]">
                          /Month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto [transform:rotate(0deg)] text-center text-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="self-stretch rounded-lg bg-primary flex flex-row items-start justify-center py-[0.806rem] px-[1.111rem] box-border w-auto h-auto gap-[0.444rem] hover:bg-primary hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-center hover:rounded-lg hover:py-[14.5px] hover:px-5 hover:box-border">
                      <div className="relative flex min-w-[68] hover:font-web-button-lg hover:text-base hover:text-center hover:text-white hover:flex hover:min-w-[68]">
                        Buy Now
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-center py-[0.667rem] px-[1.111rem] w-auto h-auto gap-[0.444rem] text-primary border-[2px] border-solid border-primary hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-center hover:rounded-lg hover:py-3 hover:px-5 hover:box-border hover:border-[2px] hover:border-solid hover:border-primary">
                      <div className="relative flex min-w-[86] hover:font-web-button-lg hover:text-base hover:text-center hover:text-primary hover:flex hover:min-w-[86]">
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.889rem] box-border gap-[1.333rem] grid-cols-[repeat(4,_minmax(216px,_1fr))] w-auto h-auto [transform:rotate(0deg)] hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-4 hover:box-border hover:grid-cols-[repeat(4,_minmax(216px,_1fr))] mq700:grid-cols-[minmax(216px,_1fr)] mq450:justify-center mq450:grid-cols-[repeat(2,_minmax(216px,_374px))]">
              <ProductCard5
                image="/images/image4@2x.png"
                title="Apple 2022 MacBook Pro Laptop with M2 chip 14-inch"
              />
              <ProductCard1
                image="/images/image-12@2x.png"
                title="Apple 2022 MacBook Air Laptop with M2 chip"
                newPrice="$1399,00"
                emptyStar="4.5"
                ellipseDiv
                ellipseDiv1
                showDiscountDot
                lastPriceHeight="5.889rem"
                rateBackgroundColor="#101010"
                ratingStarsBackgroundColor="#717171"
                starIconBackgroundColor="#ededed"
                propMinWidth="1.563rem"
              />
              <ProductCard1
                image="/images/image-22@2x.png"
                title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch"
                newPrice="$1299.00"
                emptyStar="4.5"
                ellipseDiv1
                showDiscountDot
                lastPriceHeight="5.333rem"
                ratingStarsBackgroundColor="#fff"
                starIconBackgroundColor="#b5b5b5"
                propMinWidth="1.563rem"
              />
              <ProductCard1
                image="/images/image-31@2x.png"
                title="Apple 2022 MacBook Air Laptop with M2 chip"
                newPrice="$1099.00"
                emptyStar="4.5"
                ellipseDiv
                ellipseDiv1
                showDiscountDot
                div
                lastPriceHeight="6.639rem"
                rateBackgroundColor="#fddbc9"
                ratingStarsBackgroundColor="#464646"
                starIconBackgroundColor="#00578c"
                emptyStarWidth="unset"
                emptyStarMinWidth="11"
                propMinWidth="1.563rem"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.667rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[1.333rem_2.667rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.333rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap">
                <div className="w-[16rem] flex flex-col items-start justify-start gap-[1.333rem] h-auto hover:flex hover:w-72 hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.333rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start">
                    <div className="relative font-medium flex min-w-[104] hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex hover:min-w-[104] mq900:text-[0.889rem]">
                      Comments
                    </div>
                    <div className="self-stretch relative text-[1rem] font-light text-left flex w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                      leave your comments here for other customers
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start w-auto h-auto gap-[1.778rem] text-left text-[0.889rem] text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start mq900:gap-[0.889rem_1.778rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.667rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[12px] hover:items-start hover:justify-start">
                      <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row items-start justify-start py-[0.111rem] px-[1.278rem] w-auto h-auto gap-[0rem] text-[0.778rem] border-[1px] border-solid border-neutral-gray-9e9e9e hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-lg hover:py-0.5 hover:px-[23px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-9e9e9e">
                        <div className="flex-1 relative flex hover:font-web-button-lg hover:text-sm hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:flex-1">
                          Share your thoughts about this product here
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg box-border flex flex-row items-center justify-center py-[0.667rem] px-[1.111rem] w-auto h-auto gap-[0.444rem] text-center text-primary border-[2px] border-solid border-primary hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-5 hover:box-border hover:border-[2px] hover:border-solid hover:border-primary">
                        <div className="relative flex min-w-[74] hover:font-web-button-lg hover:text-base hover:text-center hover:text-primary hover:flex hover:min-w-[74]">
                          Comment
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] w-auto h-auto text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start">
                        <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                          By feature
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center gap-[1.333rem] w-auto h-auto text-[0.667rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-center hover:justify-center">
                          <div className="flex-1 flex flex-col items-start justify-center gap-[0.944rem] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[17px] hover:items-start hover:justify-center">
                            <div className="relative font-light flex min-w-[89] hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-black hover:flex hover:min-w-[89]">
                              Battery charge
                            </div>
                            <div className="self-stretch relative font-light flex w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                              Monitor
                            </div>
                            <div className="self-stretch relative font-light flex w-auto hover:font-light hover:font-web-button-lg hover:text-xs hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                              Lightness
                            </div>
                          </div>
                          <div className="w-[7rem] flex flex-col items-start justify-start gap-[1.778rem] h-auto hover:flex hover:w-[126px] hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start">
                            <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative gap-[0.556rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-0 hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-0 hover:box-border">
                              <img
                                className="h-[0.167rem] w-[0.444rem] absolute !m-[0] top-[0rem] left-[6.556rem] flex box-border border-[3px] border-solid border-neutral-gray-cbcbcb hover:flex hover:w-2 hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-neutral-gray-cbcbcb"
                                alt=""
                                src="/icons/line-22.svg"
                              />
                              <img
                                className="h-[0.167rem] w-[6.556rem] absolute !m-[0] top-[0rem] left-[0rem] flex box-border border-[3px] border-solid border-secondary hover:flex hover:w-[118px] hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-secondary"
                                alt=""
                                src="/icons/line-23.svg"
                              />
                            </div>
                            <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative gap-[0.556rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-0 hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-0 hover:box-border">
                              <img
                                className="h-[0.167rem] w-[0.333rem] absolute !m-[0] top-[0rem] left-[6.667rem] flex box-border border-[3px] border-solid border-neutral-gray-cbcbcb hover:flex hover:w-1.5 hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-neutral-gray-cbcbcb"
                                alt=""
                                src="/icons/line-23-1.svg"
                              />
                              <img
                                className="h-[0.167rem] w-[6.722rem] absolute !m-[0] top-[0rem] left-[0rem] flex box-border border-[3px] border-solid border-secondary hover:flex hover:w-[121px] hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-secondary"
                                alt=""
                                src="/icons/line-24.svg"
                              />
                            </div>
                            <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative gap-[0.556rem] w-auto hover:flex hover:self-stretch hover:w-auto hover:h-0 hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-0 hover:box-border">
                              <img
                                className="h-[0.167rem] w-[1.278rem] absolute !m-[0] top-[0rem] left-[5.722rem] flex box-border border-[3px] border-solid border-neutral-gray-cbcbcb hover:flex hover:w-[23px] hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-neutral-gray-cbcbcb"
                                alt=""
                                src="/icons/line-24-1.svg"
                              />
                              <img
                                className="h-[0.167rem] w-[5.778rem] absolute !m-[0] top-[0rem] left-[0rem] flex box-border border-[3px] border-solid border-secondary hover:flex hover:w-[104px] hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-secondary"
                                alt=""
                                src="/icons/line-23-2.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[0.722rem] w-auto [align-self:unset] h-auto text-right text-[0.889rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[13px] hover:items-end hover:justify-start">
                            <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-right hover:text-black hover:flex hover:min-w-[25]">
                              4.8
                            </div>
                            <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-right hover:text-black hover:flex hover:min-w-[25]">
                              4.9
                            </div>
                            <div className="relative font-medium text-center flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-center hover:text-black hover:flex hover:min-w-[25]">
                              4.3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.667rem] px-[0rem] pb-[0rem] box-border min-w-[593] max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] text-left hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-12 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[593] hover:max-w-full mq450:pt-[1.722rem] mq450:box-border mq450:min-w-full mq900:pt-[1.111rem] mq900:box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.444rem] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:max-w-full">
                    <Comment1
                      ellipse398="/images/ellipse-398@2x.png"
                      jimmySmith="Gabriel"
                      may282023="July 28, 2023"
                      prop="4.8"
                      thisMacbookAirAtFirstFeel="I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs."
                      prop1="15"
                      prop2="2"
                    />
                    <Comment1
                      ellipse398="/images/ellipse-398-1@2x.png"
                      jimmySmith="Jimmy Smith"
                      may282023="May 28, 2023"
                      prop="5.0"
                      thisMacbookAirAtFirstFeel="This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it."
                      prop1="8"
                      prop2="0"
                      propPadding="0rem 0rem 0rem 42.444rem"
                      propFlex="unset"
                      propMinWidth="10"
                    />
                    <div className="self-stretch rounded-lg bg-neutral-gray-f9f9f9 box-border flex flex-col items-end justify-start py-[0.778rem] px-[0.833rem] gap-[0.667rem] max-w-full w-auto h-auto border-[1px] border-solid border-neutral-gray-ededed hover:bg-neutral-gray-f9f9f9 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[12px] hover:items-end hover:justify-start hover:rounded-lg hover:py-3.5 hover:px-[15px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-gray-ededed">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0.889rem] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-start hover:max-w-full mq450:flex-wrap">
                        <img
                          className="h-[3.333rem] w-[3.333rem] relative rounded-[50%] object-cover flex box-border border-[1px] border-solid border-neutral-gray-717171 hover:flex hover:w-[60px] hover:h-[60px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-717171"
                          alt=""
                          src="/images/ellipse-398-2@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-between min-w-[523] [row-gap:20px] max-w-full gap-[0rem] h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-between hover:min-w-[523] hover:[row-gap:20px] hover:max-w-full mq450:flex-wrap mq450:min-w-full">
                          <div className="w-[41.722rem] flex flex-col items-start justify-start gap-[0.222rem] max-w-full h-auto hover:flex hover:w-[751px] hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:max-w-full">
                            <div className="self-stretch relative font-medium flex w-auto hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto mq900:text-[0.889rem]">
                              sarah Anderson
                            </div>
                            <div className="self-stretch relative text-[0.667rem] font-medium text-neutral-gray-9e9e9e flex w-auto hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-9e9e9e hover:flex hover:self-stretch hover:w-auto">
                              April 20, 2023
                            </div>
                          </div>
                          <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-[0.389rem] px-[0.444rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] text-[0.667rem] text-white hover:bg-primary-primary-500 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-center hover:justify-center hover:rounded-lg hover:py-[7px] hover:px-2 hover:box-border">
                            <img
                              className="h-[1rem] w-[1rem] relative rounded-12xs-5 min-h-[18] bg-white flex hover:bg-white hover:flex hover:w-[18px] hover:h-[18px] hover:rounded-12xs-5 hover:min-h-[18]"
                              alt=""
                              src="/icons/star-icon.svg"
                            />
                            <div className="relative font-medium flex min-w-[19] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-white hover:flex hover:min-w-[19]">
                              4.2
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-center gap-[0.444rem] w-auto h-auto text-[0.889rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-end hover:justify-center">
                        <div className="self-stretch relative leading-[1.333rem] font-light flex overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical] w-auto hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto">
                          <p className="m-0">{`This was my first personal Mac purchase. We are using a combination of Mac & PC at work and while my PC skills are good the Mac side needs work.`}</p>
                          <p className="m-0">
                            So far I like the experience, although not all my
                            apps will run on the Mac, I am finding workarounds.
                          </p>
                          <p className="m-0">One person found this helpful</p>
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
                        <div className="self-stretch h-[1.333rem] flex flex-row items-center justify-end py-[0rem] pr-[0rem] pl-[41.833rem] box-border gap-[0.667rem] w-auto text-neutral-gray-717171 hover:flex hover:self-stretch hover:w-auto hover:h-6 hover:flex-row hover:gap-[12px] hover:items-center hover:justify-end hover:py-0 hover:pr-0 hover:pl-[753px] hover:box-border mq450:pl-[20.889rem] mq450:box-border mq900:pl-[1.111rem] mq900:box-border">
                          <div className="flex-1 rounded-lg flex flex-row items-center justify-center py-[0.667rem] px-[0rem] box-border h-auto gap-[0.444rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-0 hover:box-border">
                            <img
                              className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
                              alt=""
                              src="/icons/vuesaxoutlinelike.svg"
                            />
                          </div>
                          <div className="flex-1 relative leading-[1.333rem] font-light flex min-w-[21] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-717171 hover:flex hover:flex-1 hover:min-w-[21]">
                            34
                          </div>
                          <img
                            className="h-[1.333rem] w-[0rem] relative object-contain flex box-border border-[1px] border-solid border-neutral-gray-717171 hover:flex hover:w-0 hover:h-6 hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-717171"
                            alt=""
                            src="/icons/line-10.svg"
                          />
                          <div className="flex-1 rounded-lg flex flex-row items-center justify-center py-[0.667rem] px-[0rem] box-border h-auto gap-[0.444rem] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-3 hover:px-0 hover:box-border">
                            <img
                              className="h-[1.333rem] w-[1.333rem] relative flex hover:flex hover:w-6 hover:h-6"
                              alt=""
                              src="/icons/vuesaxoutlinedislike.svg"
                            />
                          </div>
                          <div className="relative leading-[1.333rem] font-light flex min-w-[10] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-717171 hover:flex hover:min-w-[10]">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative font-medium flex hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex mq900:text-[0.889rem]">
                Frequently bought together
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.889rem] box-border gap-[1.333rem] grid-cols-[repeat(4,_minmax(216px,_1fr))] w-auto h-auto [transform:rotate(0deg)] text-left text-[0.889rem] hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-4 hover:box-border hover:grid-cols-[repeat(4,_minmax(216px,_1fr))] mq700:grid-cols-[minmax(216px,_1fr)] mq450:justify-center mq450:grid-cols-[repeat(2,_minmax(216px,_374px))]">
              <div className="h-[19.278rem] rounded-lg bg-white shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)] flex flex-col items-start justify-start p-[0.889rem] box-border relative gap-[0.889rem] w-auto [align-self:unset] text-primary-primary-500 hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-[347px] hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_20px_-1px_rgba(113,_113,_113,_0.2)]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:gap-[0px]"
                  alt=""
                  src="/images/image-41@2x.png"
                />
                <img
                  className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-dodgerblue hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue"
                  alt=""
                  src="/icons/line-3.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
                  <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-primary-primary-500 hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
                    Laptop sleeve for macBook pro M2 MNEJ3 LLA 13.3 inch
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                    <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                        <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                          $39.20
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
                      <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
                        <img
                          className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                          alt=""
                          src="/icons/star.svg"
                        />
                        <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]">
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[1.333rem] h-[1.333rem] absolute !m-[0] top-[0.889rem] left-[0.889rem] flex z-[1] hover:flex hover:w-6 hover:h-6"
                  alt=""
                  src="/icons/heart.svg"
                />
              </div>
              <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] w-auto [align-self:unset] h-auto hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
                <div className="self-stretch h-[10.556rem] relative bg-[url('/public/image5@3x.png')] bg-cover bg-no-repeat bg-[top] flex w-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-[190px] hover:gap-[0px]" />
                <img
                  className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
                  alt=""
                  src="/icons/line-3-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
                  <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">{`StarTech.com Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air`}</div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                    <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                        <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                          $23.26
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
                      <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
                        <img
                          className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                          alt=""
                          src="/icons/star.svg"
                        />
                        <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]">
                          4.6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductCard1
                image="/images/image-51@2x.png"
                title="Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook"
                newPrice="$63.26"
                emptyStar="4.6"
                ellipseDiv
                ellipseDiv1
                showDiscountDot
                lastPriceHeight="5.889rem"
                rateBackgroundColor="#253b80"
                ratingStarsBackgroundColor="#f25c5c"
                starIconBackgroundColor="#8b8b8b"
                propMinWidth="1.563rem"
              />
              <div className="rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)] overflow-hidden flex flex-col items-start justify-start p-[0.889rem] box-border gap-[0.861rem] w-auto [align-self:unset] h-auto hover:bg-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[15.5px] hover:items-start hover:justify-start hover:rounded-lg hover:p-4 hover:box-border hover:shadow-[-2px_2px_15px_-1px_rgba(113,_113,_113,_0.12)]">
                <div className="self-stretch flex flex-row items-start justify-start pt-[0.778rem] px-[1.056rem] pb-[0.833rem] box-border w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:pt-3.5 hover:px-[19px] hover:pb-[15px] hover:box-border">
                  <img
                    className="h-[8.944rem] flex-1 relative rounded-lg max-w-full overflow-hidden object-contain flex gap-[0rem] hover:flex hover:flex-1 hover:h-[161px] hover:gap-[0px] hover:rounded-lg"
                    alt=""
                    src="/images/image-6@2x.png"
                  />
                </div>
                <img
                  className="self-stretch h-[0.056rem] relative max-w-full overflow-hidden shrink-0 flex w-auto box-border border-[1px] border-solid border-darkslategray-400 hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400"
                  alt=""
                  src="/icons/line-3-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.889rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start">
                  <div className="self-stretch relative leading-[1.333rem] font-light flex items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-auto h-[2.944rem] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-[53px]">
                    Belkin USB C to VGA + Charge Adapter - USB C to VGA Cable
                    for MacBook Pro
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-[0rem] [row-gap:20px] w-auto h-auto text-[1rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-end hover:justify-between hover:[row-gap:20px]">
                    <div className="w-[7.111rem] flex flex-col items-center justify-start h-auto gap-[0rem] hover:flex hover:w-32 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start w-auto h-auto gap-[0rem] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-center hover:justify-start">
                        <div className="self-stretch relative font-light flex whitespace-nowrap w-auto hover:font-light hover:font-web-button-lg hover:text-lg hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:whitespace-nowrap">
                          $23.26
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.111rem] flex flex-row items-center justify-end h-auto gap-[0.889rem] text-[0.889rem] text-primary-primary-500 hover:flex hover:w-32 hover:h-auto hover:flex-row hover:gap-[16px] hover:items-center hover:justify-end">
                      <div className="flex flex-row items-center justify-end gap-[0.111rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[2px] hover:items-center hover:justify-end">
                        <img
                          className="h-[1.333rem] w-[1.333rem] relative rounded-11xs-2 bg-primary-primary-500 flex hover:bg-primary-primary-500 hover:flex hover:w-6 hover:h-6 hover:rounded-11xs-2"
                          alt=""
                          src="/icons/star.svg"
                        />
                        <div className="relative font-medium flex min-w-[25] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-primary-primary-500 hover:flex hover:min-w-[25]">
                          4.6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.778rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[0.889rem_1.778rem]">
              <div className="relative font-medium flex min-w-[80] hover:font-medium hover:font-web-button-lg hover:text-xl hover:text-center hover:text-black hover:flex hover:min-w-[80] mq900:text-[0.889rem]">
                Reviews
              </div>
              <div className="self-stretch grid flex-row items-start justify-start gap-[1.333rem] max-w-full grid-cols-[repeat(3,_minmax(294px,_1fr))] w-auto h-auto [transform:rotate(0deg)] text-[0.889rem] text-white hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full hover:grid-cols-[repeat(3,_minmax(294px,_1fr))] mq700:grid-cols-[minmax(294px,_1fr)] mq450:justify-center mq450:grid-cols-[repeat(2,_minmax(294px,_510px))]">
                <div className="rounded-lg flex flex-col items-start justify-start pt-[4.389rem] px-[0rem] pb-[0rem] box-border gap-[0.389rem] bg-[url('/public/videos-card@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[7px] hover:items-start hover:justify-start hover:rounded-lg hover:pt-[79px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.111rem] box-border w-auto h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                    <img
                      className="h-[2.667rem] w-[2.667rem] relative flex gap-[0rem] hover:flex hover:w-12 hover:h-12 hover:gap-[0px]"
                      loading="lazy"
                      alt=""
                      src="/icons/vuesaxboldplaycircle.svg"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-lg bg-gray-700 [backdrop-filter:blur(15px)] flex flex-row items-start justify-start py-[1.194rem] px-[0.139rem] box-border whitespace-nowrap max-w-full w-auto h-auto gap-[0.556rem] hover:bg-gray-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:rounded-t-none hover:rounded-b-lg hover:py-[21.5px] hover:px-[2.5px] hover:box-border hover:[backdrop-filter:blur(15px)] hover:whitespace-nowrap hover:max-w-full">
                    <div className="h-[1.611rem] flex-1 relative leading-[1.333rem] font-light flex max-w-full hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-center hover:text-white hover:flex hover:flex-1 hover:h-[29px] hover:max-w-full">
                      MacBook Pro 2022 Review: Apple's M2 Revs Up
                    </div>
                  </div>
                </div>
                <VideosCard m2MacBookPro13UnboxingCom="M2 MacBook Pro 13 Unboxing, Comparison and First Look" />
                <VideosCard
                  m2MacBookPro13UnboxingCom="M2 MacBook Pro 13 Review - Don't Choose Wrong!"
                  propBackgroundImage="url('/videos-card2@3x.png')"
                  propPadding="1.194rem 0.139rem"
                  propHeight="1.611rem"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] bottom-[27.333rem] left-[5.111rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[1] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        alt=""
        src="/icons/carousel.svg"
      />
      <img
        className="w-[1.778rem] h-[1.778rem] absolute !m-[0] right-[5.111rem] bottom-[27.333rem] rounded-81xl overflow-hidden shrink-0 flex gap-[0.556rem] p-[1.333rem] box-border z-[1] hover:flex hover:w-8 hover:h-8 hover:gap-[10px] hover:rounded-81xl hover:p-6 hover:box-border"
        alt=""
        src="/carousel-1.svg"
      />
      <footer className="self-stretch h-[19.278rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border max-w-full w-auto gap-[0rem] text-left text-[0.889rem] text-neutral-gray-cbcbcb font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-[347px] hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[54px] hover:box-border hover:max-w-full mq450:h-auto mq900:pb-[1.944rem] mq900:box-border">
        <div className="self-stretch h-[16.278rem] relative bg-primary-primary-900 shrink-0 [debug_commit:1de1738] max-w-full flex w-auto gap-[0rem] hover:bg-primary-primary-900 hover:flex hover:self-stretch hover:w-auto hover:h-[293px] hover:gap-[0px] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full mq450:h-auto mq450:min-h-[293]">
          <div className="absolute top-[0.667rem] left-[calc(50%_-_612px)] w-[68rem] h-[15.389rem] overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[5.222rem] box-border gap-[3.889rem] max-w-full hover:flex hover:w-[1224px] hover:h-[277px] hover:flex-col hover:gap-[70px] hover:items-start hover:justify-start hover:pt-9 hover:px-0 hover:pb-[94px] hover:box-border hover:max-w-full mq450:h-auto">
            <img
              className="w-[2.222rem] h-[2.222rem] absolute !m-[0] right-[1.111rem] bottom-[2.444rem] rounded-29xl overflow-hidden shrink-0 bg-primary-primary-50 flex gap-[0rem] hover:bg-primary-primary-50 hover:flex hover:w-10 hover:h-10 hover:gap-[0px] hover:rounded-29xl"
              loading="lazy"
              alt=""
              src="/icons/back-to-up-bottun.svg"
            />
            <div className="w-[63.333rem] flex flex-row items-start justify-between py-[0rem] pr-[1.111rem] pl-[0rem] box-border shrink-0 [debug_commit:1de1738] gap-[1.111rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1140px] hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-0 hover:box-border hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.778rem] pl-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-3.5 hover:pl-0 hover:box-border">
                <div className="flex flex-col items-start justify-start py-[0rem] px-[0.111rem] box-border gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:py-0 hover:px-0.5 hover:box-border">
                  <div className="relative font-medium text-white flex min-w-[73] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-white hover:flex hover:min-w-[73]">
                    Company
                  </div>
                  <div className="relative leading-[1.333rem] font-light flex min-w-[66] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[66]">
                    about us
                  </div>
                  <div className="relative leading-[1.333rem] font-light flex min-w-[33] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[33]">
                    blog
                  </div>
                  <div className="relative leading-[1.333rem] font-light flex min-w-[53] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[53]">
                    returns
                  </div>
                  <div className="relative leading-[1.333rem] font-light flex min-w-[91] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[91]">{`order status `}</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] px-[0.111rem] box-border gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:py-0 hover:px-0.5 hover:box-border">
                <div className="relative font-medium text-white flex min-w-[30] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-white hover:flex hover:min-w-[30]">
                  Info
                </div>
                <div className="relative leading-[1.333rem] font-light flex min-w-[105] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[105]">
                  How it works?
                </div>
                <div className="relative leading-[1.333rem] font-light flex min-w-[97] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[97]">
                  our promises
                </div>
                <div className="relative leading-[1.333rem] font-light flex min-w-[30] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[30]">
                  FAQ
                </div>
              </div>
              <div className="w-[17.611rem] flex flex-col items-start justify-start py-[0rem] pr-[2.167rem] pl-[0rem] box-border h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[317px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[39px] hover:pl-0 hover:box-border">
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.111rem] box-border gap-[0.444rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:py-0 hover:px-0.5 hover:box-border">
                  <div className="relative font-medium text-white flex min-w-[84] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-white hover:flex hover:min-w-[84]">
                    Contact us
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.222rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start">
                    <div className="flex flex-col items-start justify-start pt-[0.111rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0.5 hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                        alt=""
                        src="/icons/vuesaxoutlinelocation.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[1.333rem] font-light flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:flex-1">
                      123 Main Street, Anytown,USA
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0.139rem] px-[0rem] box-border gap-[0.222rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start hover:py-[2.5px] hover:px-0 hover:box-border">
                    <div className="flex flex-col items-start justify-start pt-[0.111rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0.5 hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                        alt=""
                        src="/icons/vuesaxoutlinecallcalling.svg"
                      />
                    </div>
                    <div className="relative leading-[1.333rem] font-light flex hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex">
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.222rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start">
                    <div className="flex flex-col items-start justify-start pt-[0.111rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0.5 hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-[1.111rem] h-[1.111rem] relative flex gap-[0rem] hover:flex hover:w-5 hover:h-5 hover:gap-[0px]"
                        alt=""
                        src="/icons/vuesaxoutlinesmsedit.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[1.333rem] font-light flex whitespace-nowrap hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:flex-1 hover:whitespace-nowrap">
                      TechHeimSupport@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[16rem] flex flex-col items-start justify-start gap-[0.889rem] h-auto [transform:rotate(0deg)] text-white hover:flex hover:w-72 hover:h-auto hover:flex-col hover:gap-[16px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <div className="w-[13.056rem] flex flex-row items-start justify-start py-[0rem] px-[0.111rem] box-border h-auto gap-[0.444rem] hover:flex hover:w-[235px] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start hover:py-0 hover:px-0.5 hover:box-border">
                  <div className="w-[16.167rem] relative font-medium flex shrink-0 [debug_commit:1de1738] hover:font-medium hover:font-web-button-lg hover:text-base hover:text-left hover:text-white hover:flex hover:w-[291px] hover:shrink-0 hover:[debug_commit:1de1738]">
                    Sign up for News and updates
                  </div>
                </div>
                <div className="self-stretch rounded-lg box-border overflow-hidden flex flex-row items-start justify-between py-[0.556rem] pr-[0.722rem] pl-[0.611rem] gap-[1.111rem] w-auto h-auto text-neutral-gray-f9f9f9 border-[1px] border-solid border-neutral-gray-f9f9f9 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:rounded-lg hover:py-2.5 hover:pr-[13px] hover:pl-[11px] hover:box-border hover:border-[1px] hover:border-solid hover:border-neutral-gray-f9f9f9">
                  <div className="flex flex-row items-start justify-start gap-[0.444rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-start">
                    <img
                      className="h-[1.333rem] w-[1.333rem] relative min-h-[24] flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                      alt=""
                      src="/icons/vuesaxoutlineuser-1.svg"
                    />
                    <div className="flex flex-row items-start justify-start w-auto [align-self:unset] h-auto gap-[0.222rem] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[4px] hover:items-start hover:justify-start">
                      <div className="relative leading-[1.333rem] font-light flex min-w-[113] hover:font-light hover:font-web-button-lg hover:text-base hover:leading-[24px] hover:text-left hover:text-neutral-gray-f9f9f9 hover:flex hover:min-w-[113]">
                        E-mail Address
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[1.333rem] w-[1.333rem] relative min-h-[24] flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                    alt=""
                    src="/icons/vuesaxoutlinearrowright.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.889rem] w-auto [align-self:unset] h-auto z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[16px] hover:items-start hover:justify-start">
                  <img
                    className="h-[1.778rem] w-[1.778rem] relative overflow-hidden shrink-0 min-h-[32] flex gap-[0rem] hover:flex hover:w-8 hover:h-8 hover:gap-[0px] hover:min-h-[32]"
                    loading="lazy"
                    alt=""
                    src="/icons/facebook.svg"
                  />
                  <img
                    className="h-[1.778rem] w-[1.778rem] relative overflow-hidden shrink-0 min-h-[32] flex gap-[0rem] hover:flex hover:w-8 hover:h-8 hover:gap-[0px] hover:min-h-[32]"
                    loading="lazy"
                    alt=""
                    src="/icons/twitter.svg"
                  />
                  <img
                    className="h-[1.778rem] w-[1.778rem] relative overflow-hidden shrink-0 min-h-[32] flex gap-[0rem] hover:flex hover:w-8 hover:h-8 hover:gap-[0px] hover:min-h-[32]"
                    alt=""
                    src="/icons/instagram.svg"
                  />
                  <img
                    className="h-[1.778rem] w-[1.778rem] relative overflow-hidden shrink-0 min-h-[32] flex gap-[0rem] hover:flex hover:w-8 hover:h-8 hover:gap-[0px] hover:min-h-[32]"
                    alt=""
                    src="/icons/youtube.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[59.778rem] flex flex-row items-start justify-between pt-[0rem] pb-[3.333rem] pr-[1.111rem] pl-[0rem] box-border shrink-0 [debug_commit:1de1738] max-w-full gap-[1.111rem] h-auto [transform:rotate(0deg)] hover:flex hover:w-[1076px] hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:pt-0 hover:pb-[60px] hover:pr-5 hover:pl-0 hover:box-border hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full mq450:flex-wrap">
              <img
                className="self-stretch w-[7.778rem] relative max-h-full min-h-[24] flex h-auto gap-[0rem] hover:flex hover:w-[140px] hover:self-stretch hover:h-auto hover:gap-[0px] hover:min-h-[24]"
                loading="lazy"
                alt=""
                src="/icons/partners.svg"
              />
              <div className="h-[1.333rem] w-[44.611rem] flex flex-col items-start justify-start pt-[1.056rem] px-[0rem] pb-[0rem] box-border max-w-full gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[803px] hover:h-6 hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[19px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full">
                <img
                  className="self-stretch h-[20.056rem] relative max-w-full overflow-hidden shrink-0 bg-royalblue flex w-auto [filter:blur(200px)] hover:bg-royalblue hover:flex hover:self-stretch hover:w-auto hover:h-[361px] hover:[filter:blur(200px)]"
                  loading="lazy"
                  alt=""
                  src="/icons/ellipse.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute right-[7.111rem] bottom-[11.389rem] rounded-29xl bg-primary-primary-50 w-[2.222rem] h-[2.222rem] flex flex-row items-center justify-center py-[0.333rem] px-[0.444rem] box-border gap-[0.556rem] z-[2] hover:bg-primary-primary-50 hover:flex hover:w-10 hover:h-10 hover:flex-row hover:gap-[10px] hover:items-center hover:justify-center hover:rounded-29xl hover:py-1.5 hover:px-2 hover:box-border">
            <img
              className="h-[1.333rem] w-[1.333rem] relative rounded-13xl flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:rounded-13xl"
              alt=""
              src="/icons/vuesaxoutlinemessagequestion.svg"
            />
          </div>
        </div>
        <div className="self-stretch bg-primary-primary-900 box-border overflow-hidden flex flex-row flex-wrap items-start justify-between py-[0.889rem] pr-[6.611rem] pl-[6.028rem] min-h-[58] shrink-0 [debug_commit:1de1738] max-w-full gap-[1.111rem] w-auto h-auto text-[0.667rem] border-t-[2px] border-solid border-primary-primary-900 hover:bg-primary-primary-900 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap hover:gap-[20px] hover:items-start hover:justify-between hover:py-4 hover:pr-[119px] hover:pl-[108.5px] hover:box-border hover:min-h-[58] hover:shrink-0 hover:[debug_commit:1de1738] hover:max-w-full mq700:pl-[3rem] mq700:pr-[3.278rem] mq700:box-border mq900:pl-[1.111rem] mq900:pr-[1.111rem] mq900:box-border">
          <div className="flex flex-row items-start justify-start gap-[0.5rem] w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[9px] hover:items-start hover:justify-start">
            <img
              className="h-[1.333rem] w-[1.333rem] relative flex gap-[0rem] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
              alt=""
              src="/icons/vuesaxlinearcopyright.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border w-auto [align-self:unset] h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[4.5px] hover:px-0 hover:pb-0 hover:box-border">
              <div className="relative font-medium flex min-w-[98] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[98]">{`2023 Tech Heim. `}</div>
            </div>
          </div>
          <div className="w-[26.611rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[479px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[4.5px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.111rem] w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between mq700:flex-wrap">
              <div className="relative font-medium flex min-w-[88] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[88]">
                cookie settings
              </div>
              <div className="relative font-medium flex min-w-[80] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[80]">
                Privacy Policy
              </div>
              <div className="relative font-medium flex min-w-[126] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[126]">{`Terms and Conditions `}</div>
              <div className="relative font-medium flex min-w-[41] hover:font-medium hover:font-web-button-lg hover:text-xs hover:text-left hover:text-neutral-gray-cbcbcb hover:flex hover:min-w-[41]">{`Imprint `}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DesktopProduct
