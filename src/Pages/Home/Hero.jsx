// import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3cNJZmL/replicate-prediction-i3ic66dbpobvaayrqjifxlnpue.png)' }}>
                {/* <div className="hero-overlay bg-opacity-40"></div> */}
                <div className="flex items-start justify-start w-4/5">
                    {/* <div className="w-full">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Hello there</h1>
                        <h1 className="mb-5 text-3xl lg:text-4xl text-white font-bold">We Are Fabric & Fit</h1>
                        <h1 className='text-amber-300 mt-5 text-3xl lg:text-4xl font-bold'>
                            <Typewriter words={['Where Fashion', 'Meets Comfort in', 'Every Thread!']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </h1>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;