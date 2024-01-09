import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <div className='z-[-30]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='h-[70vh]'><img src="https://i.ibb.co/GRvD1kz/blouse-2597205.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='h-[70vh]'><img src="https://i.ibb.co/8D3B5Nr/ian-dooley-TT-ROx-Wj9n-A-unsplash.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='h-[70vh]'><img src="https://i.ibb.co/6P8QmwG/parker-burchfield-tv-G4-Wvjgs-EY-unsplash-1.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='h-[70vh]'><img src="https://i.ibb.co/n8ZPF3c/young-woman-1745173.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='h-[70vh]'><img src="https://i.ibb.co/tJBwXXR/benjamin-voros-Tn-No84-AJJ5-A-unsplash.jpg" alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;