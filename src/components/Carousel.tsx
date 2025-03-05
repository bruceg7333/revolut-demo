import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/swiper-bundle.css';
import '../styles/carousel.scss'
import { Pagination } from 'swiper/modules';

interface CardData {
  image: string;
  amount: string;
  currency: string;
  summary: string;
}

const Carousel: React.FC = () => {
  const cards: CardData[] = [
    { image: 'https://assets.revolut.com/published-assets-v3/aec7863b-7660-4c6d-bd0b-021b41cceee5/27f2d874-8592-4dbe-85ec-14389754bfbc.webp', amount: '300', currency: 'GBP', summary: 'Transaction Summary 3' },
    { image: 'https://assets.revolut.com/published-assets-v3/98884e6b-1786-44f4-baaf-8ad8a79c1b46/43091c24-6fec-4549-a716-53903e09b93f.webp', amount: '100', currency: 'USD', summary: 'Transaction Summary 1' },
    { image: 'https://assets.revolut.com/published-assets-v3/aec7863b-7660-4c6d-bd0b-021b41cceee5/27f2d874-8592-4dbe-85ec-14389754bfbc.webp', amount: '300', currency: 'GBP', summary: 'Transaction Summary 4' },
    { image: 'https://assets.revolut.com/published-assets-v3/ed84e44f-09bf-426b-a6e6-fa12db3807a4/22de535d-9edd-45a1-97f5-51c4a48ed576.webp', amount: '200', currency: 'EUR', summary: 'Transaction Summary 2' },
    { image: 'https://assets.revolut.com/published-assets-v3/aec7863b-7660-4c6d-bd0b-021b41cceee5/27f2d874-8592-4dbe-85ec-14389754bfbc.webp', amount: '300', currency: 'GBP', summary: 'Transaction Summary 5' },
  ];

  return (
    <div className="carousel-container">
    <Swiper
        loop={true}
        spaceBetween={10} // 卡片间距
        pagination={{ clickable: true, el: '.swiper-pagination',  }} // 导航点
        breakpoints={{
          320: {
            slidesPerView: 2, // 平板显示 2 个卡片
            centeredSlides: false
          },
          1024: {
            slidesPerView: 3, // 桌面显示 3 个卡片
            centeredSlides: true
          },
        }}
        modules={[Pagination]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
       {/* 自定义 pagination 容器 */}
        <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;