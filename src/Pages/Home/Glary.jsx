import { Fade } from "react-awesome-reveal";

const Glary = () => {
    return (
        <div className="my-10 px-5 md:px-12 lg:px-32 mx-auto">
            <div>
                <div className="divider text-2xl my-10">Photo Glary</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
                <Fade direction="left">
                    <div className="h-full w-full">
                        <img className="h-full w-full" src="https://i.ibb.co/ZB8vJ26/chris-murray-YGz-EX5y-LKe-A-unsplash.jpg" alt="" />
                    </div>
                </Fade>
                <div className="col-span-2">
                    <Fade direction="right">
                        <img className="h-full w-full" src="https://i.ibb.co/ZLYqZws/wesley-tingey-3m-Gn-YRUNIck-unsplash.jpg" alt="" />
                    </Fade>
                </div>
                <div className="">
                    <Fade direction="left" className="h-full">
                        <img className="h-full w-full" src="https://i.ibb.co/nCWXjVS/chuttersnap-R2y-Gogv8-NZM-unsplash.jpg" alt="" />
                    </Fade>
                </div>
                <div className="row-span-2" >
                    <Fade direction="right" className="h-full">
                        <img className="h-full w-full" src="https://i.ibb.co/LQ0tsS0/taylor-y-Ha9ezs-CE-unsplash.jpg" alt="" />
                    </Fade>
                </div>
                <div className="row-span-2">
                    <Fade direction="up" className="h-full">
                        <img src="https://i.ibb.co/25rkq2s/toa-heftiba-f-La-B8-Ll-EMNo-unsplash.jpg" alt="" />
                    </Fade>
                </div>
                <div>
                    <Fade direction="right" className="h-full">
                        <img className="h-full w-full" src="https://i.ibb.co/s9VgWnV/kirill-balobanov-RIEi-EBQg-Oe-E-unsplash.jpg" alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Glary;