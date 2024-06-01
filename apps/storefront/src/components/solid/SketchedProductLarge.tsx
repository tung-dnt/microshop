/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'

type SketchedProductLargeProps = {
  name: string;
  image: string;
  title: string;
  description: string;
}

const SketchedProductLarge: Component<SketchedProductLargeProps> = (props) => {
  const { name, image, title, description } = props

  const renderProductName = () => {
    const splittedName = name.split(' ')
    const firstWord = splittedName[0]
    if (splittedName.length <= 1) return <span class='text-white'>{firstWord}</span>

    const restName = splittedName.filter((_, index) => index !== 0).join(' ')
    return <><span>{`${firstWord} `}</span><span class="text-white">{restName}</span></>
  }

  const renderProductImage = () => (
    <>
      <img
        class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt={name}
        src={image}
      />
      <img
        class="w-[130px] h-3 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-1.svg"
      />
      <img
        class="w-[130px] h-3 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-1.svg"
      />
      <img
        class="w-[130px] h-3 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-1.svg"
      />
    </>
  )

  const renderCountDowner = () => (
    <div class="flex-1 flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
      <div class="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-0.5 px-[7px] gap-[2px] min-w-[37px] max-w-[49px] border-[1px] border-solid border-black">
        <div class="self-stretch relative font-medium">
          8
        </div>
        <div class="relative text-sm font-light inline-block min-w-[33px]">
          Days
        </div>
      </div>
      <div class="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-0.5 px-[7px] gap-[2px] min-w-[37px] max-w-[49px] border-[1px] border-solid border-black">
        <div class="self-stretch relative font-medium">
          8
        </div>
        <div class="relative text-sm font-light inline-block min-w-[33px]">
          Days
        </div>
      </div>
      <div class="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-0.5 px-[7px] gap-[2px] min-w-[37px] max-w-[49px] border-[1px] border-solid border-black">
        <div class="self-stretch relative font-medium">
          8
        </div>
        <div class="relative text-sm font-light inline-block min-w-[33px]">
          Days
        </div>
      </div>
      <div class="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-0.5 px-[7px] gap-[2px] min-w-[37px] max-w-[49px] border-[1px] border-solid border-black">
        <div class="self-stretch relative font-medium">
          8
        </div>
        <div class="relative text-sm font-light inline-block min-w-[33px]">
          Days
        </div>
      </div>
    </div>
  )

  const renderRegisterButton = () => (
    <>
      <div class="rounded-lg bg-primary flex flex-row items-start justify-start py-[14.5px] px-4 gap-[8px]">
        <img
          class="h-6 w-6 relative hidden"
          alt=""
          src="/vuesaxoutlineshoppingcart.svg"
        />
        <div class="relative inline-block min-w-[102px]">
          Register Now
        </div>
        <img
          class="h-6 w-6 relative hidden"
          alt=""
          src="/vuesaxoutlineshoppingcart.svg"
        />
      </div>
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-500" />
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-500" />
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-500" />
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-500" />
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-600" />
      <div class="h-1 w-1 relative rounded-[50%] bg-gray-600" />
    </>
  )

  const sketchDecorator = () => (
    <>
      <img
        class="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-4.svg"
      />
      <img
        class="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-4.svg"
      />
      <img
        class="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-4.svg"
      />
      <img
        class="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-4.svg"
      />
      <img
        class="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-4.svg"
      />
    </>
  )

  return (
    <div class="h-[420px] flex-1 rounded-lg [background:linear-gradient(-73.01deg,_#b0e9c9,_#1fb6cf_48%,_#1975b9)] overflow-hidden flex flex-row items-start justify-start pt-6 px-6 pb-[37px] box-border gap-[20.7px] max-w-full z-[1] mq450:h-auto mq825:pt-5 mq825:pb-6 mq825:box-border mq825:min-w-full">
      <div class="h-[418px] w-[378.3px] flex flex-col items-start justify-start gap-[59px] max-w-[calc(100%_-_282px)] mq450:gap-[29px] mq825:max-w-full">
        <div class="flex flex-row items-start justify-start py-0 px-6">
          <h3 class="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi">
            {renderProductName()}
          </h3>
        </div>
        <div class="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
          {renderProductImage()}
        </div>
      </div>
      <div class="w-[261px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-base mq825:hidden">
        <div class="self-stretch flex flex-col items-start justify-start gap-[27px]">
          <div class="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-1.5">
            {renderCountDowner()}
          </div>
          <div class="self-stretch flex flex-col items-start justify-start gap-[7px] text-xl">
            <div class="relative font-medium mq450:text-base">
              {title}
            </div>
            <div class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] text-left text-base text-neutral-gray-2d2d2d">
              <div class="flex-1 relative leading-[24px] font-light">{description}</div>
            </div>
          </div>
          <div class="w-[244px] flex flex-col items-end justify-start gap-[4px] text-white">
            <div class="flex flex-row items-end justify-start gap-[4.2px] mq450:flex-wrap">
              {renderRegisterButton()}
            </div>
            {sketchDecorator()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SketchedProductLarge
