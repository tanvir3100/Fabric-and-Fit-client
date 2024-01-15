
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/navigation';


const Testimonial = () => {
    return (
        <div className="px-5 md:px-12 lg:px-32 mx-auto mt-10">
            <div className="divider text-2xl mb-20">Customers Review</div>
            <div className=" w-4/5 mx-auto p-10">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={true}
                    history={{
                        key: 'slide',
                    }}
                    modules={[Navigation]}
                    className="mySwiper mb-10"
                >
                    <div>
                        <SwiperSlide >
                            <div className="flex flex-col justify-center items-center text-center px-16 space-y-5">
                                ami
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper >
            </div >
        </div>
    );
};

export default Testimonial;