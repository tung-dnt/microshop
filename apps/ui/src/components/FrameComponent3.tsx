import type { FunctionComponent } from 'react'
import { Button } from '@chakra-ui/react'

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.111rem] box-border max-w-full w-auto h-auto gap-[0rem] [transform:rotate(0deg)] text-left text-[3.556rem] text-primary-primary-700 font-web-button-lg hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border hover:max-w-full">
      <div className="w-[68rem] flex flex-row items-start justify-center gap-[4.278rem] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1224px] hover:h-auto hover:flex-row hover:gap-[77px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[4.278rem_1.056rem] mq450:gap-[4.278rem_2.111rem] mq900:flex-wrap">
        <div className="w-[23.278rem] flex flex-col items-start justify-start pt-[3.056rem] px-[0rem] pb-[0rem] box-border min-w-[419] max-w-full h-auto gap-[0rem] [transform:rotate(0deg)] hover:flex hover:w-[419px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[55px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[419] hover:max-w-full mq700:pt-[2rem] mq700:box-border mq450:min-w-full mq900:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6.111rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[110px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[3.056rem_6.111rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.778rem] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[50px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq700:gap-[1.389rem_2.778rem]">
              <h1 className="m-0 w-[18.722rem] relative text-inherit font-semibold font-inherit flex max-w-full hover:font-semibold hover:font-web-button-lg hover:text-45xl hover:text-left hover:text-primary-primary-700 hover:flex hover:w-[337px] hover:max-w-full mq700:text-[2.111rem] mq900:text-[2.833rem]">
                Tech Heim
              </h1>
              <h1 className="m-0 self-stretch relative text-[1.778rem] font-medium font-inherit flex w-auto hover:font-medium hover:font-web-button-lg hover:text-13xl hover:text-left hover:flex hover:self-stretch hover:w-auto mq700:text-[1.056rem] mq900:text-[1.444rem]">
                <span>{`"Join the `}</span>
                <span className="text-secondary">digital revolution</span>
                <span>"</span>
              </h1>
            </div>
            <Button
              className="w-[16rem] h-[3.111rem] bg-secondary flex flex-row gap-[0.444rem] items-start justify-center rounded-lg py-[1.028rem] px-[5.222rem] box-border hover:bg-secondary hover:flex hover:w-72 hover:h-14 hover:flex-row hover:gap-[8px] hover:items-start hover:justify-center hover:rounded-lg hover:py-[18.5px] hover:px-[94px] hover:box-border mq700:pl-[1.111rem] mq700:pr-[1.111rem] mq700:box-border"
              colorScheme="orange"
              variant="solid"
              w="288px"
            >
              Expore More
            </Button>
          </div>
        </div>
        <img
          className="h-[24.611rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[473] flex gap-[0rem] hover:flex hover:flex-1 hover:h-[443px] hover:gap-[0px] hover:min-w-[473] hover:max-w-full mq450:min-w-full"
          loading="lazy"
          alt=""
          src="/images/frame-26086938@2x.png"
        />
      </div>
    </div>
  )
}

export default FrameComponent3
