

const PhotoText = ({ header, image }) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60 w-[50%] mx-auto h-[40%]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[50%] mx-auto h-[40%]">
                        <h1 className="text-3xl text-white">{header}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoText;