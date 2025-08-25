import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ✅ Corrected import for Swiper v11+
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import CaseStudy from '../shared/ui/CaseStudy';
import { caseStudies } from '../../data/Casestudy';

// Define the prop types of each case study if not already defined
type CaseStudyType = {
  imageUrl: string;
  alt?: string;
  quote: string;
  author: string;
  role: string;
  title: string;
  description: string;
  buttonText: string;
};

const CaseStudyCarousel: React.FC = () => {
  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
      >
        {caseStudies.map((item: CaseStudyType, index: number) => (
          <SwiperSlide key={index}>
            <CaseStudy {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudyCarousel;
