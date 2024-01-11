import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/c1TPFsh/efren-barahona-Gw-Id-Zix-Bnu-Y-unsplash.jpg)' }}>
                {/* <div className="hero-overlay bg-opacity-40"></div> */}
                <div className="flex items-start justify-start">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <h1 className="mb-5 text-4xl text-white font-bold">We Are Offering You</h1>
                        <h1 className='text-amber-300 mt-5 text-4xl font-bold'>
                            <Typewriter words={['50% OFF On Our', 'Winter Products!']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;