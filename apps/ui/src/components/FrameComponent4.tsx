import type { FunctionComponent } from 'react'

import ProductCard1 from './ProductCard1'
import ProductCard5 from './ProductCard5'
import ProductCard6 from './ProductCard6'

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[1.333rem] grid-cols-[repeat(4,_minmax(216px,_1fr))] w-auto h-auto [transform:rotate(0deg)] text-center text-[0.889rem] text-neutral-gray-505050 font-web-button-lg hover:grid hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:grid-cols-[repeat(4,_minmax(216px,_1fr))] mq700:grid-cols-[minmax(216px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(216px,_374px))]">
      <ProductCard5
        image="/images/image-3@2x.png"
        title={`Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French`}
      />
      <ProductCard6 />
      <ProductCard1
        image="/images/image-4@2x.png"
        title={`Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French`}
        newPrice="$ 2490,87"
        emptyStar="4.9"
        ellipseDiv
        ellipseDiv1
        lastPriceHeight="5.333rem"
        rateBackgroundColor="#101010"
        ratingStarsBackgroundColor="#c6c5ca"
        propMinWidth="1.563rem"
      />
      <ProductCard1
        image="/images/image-5@2x.png"
        title={`Trust Gaming GXT 488 Forze PS4 & PS5 Headset with Official PlayStation License, Over-Ear, Fold-Up Mic & Adjustable Headband, 3.5mm Audio Jack, Wired Gaming Headset - Red`}
        newPrice="$ 346.00"
        emptyStar="4.6"
        ellipseDiv
        ellipseDiv1
        showDiscountDot
        lastPriceHeight="5.889rem"
        rateBackgroundColor="#101010"
        ratingStarsBackgroundColor="#fff"
        starIconBackgroundColor="#c91433"
        propMinWidth="1.563rem"
      />
    </div>
  )
}

export default FrameComponent4
