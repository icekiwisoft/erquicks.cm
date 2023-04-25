
import Navbar from '../navbar/navbar';

import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay ,Pagination,Navigation, EffectFade, EffectCards,EffectCube} from 'swiper';
import back1 from '../../images/img1.jpg';
import back2 from '../../images/img7.jpg';
import back3 from '../../images/img9.jpg';
import back4 from '../../images/img10.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cards';


function HeaderCarrousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <Swiper
          style={{
              maxHeight:'100%'
          }}
          modules={[Autoplay,Pagination,Navigation,EffectFade,EffectCards] }
          pagination={{clickable:true}}
  
          effect="fade"
          autoplay={{delay:2000}}
    >
          <SwiperSlide>
              <img src={ back1} width="100%"/>
      </SwiperSlide>
          <SwiperSlide>
          <img src={ back2} width="100%"/>
      </SwiperSlide>
          <SwiperSlide>
          <img src={ back3} width="100%"/>
      </SwiperSlide>
          <SwiperSlide>
          <img src={ back4} width="100%"/>
      </SwiperSlide>
      ...
    </Swiper>

  )
  
};

export default function Header()
{
    return (
        <header>

            <Navbar />
            <HeaderCarrousel/>

        </header>
    )
}