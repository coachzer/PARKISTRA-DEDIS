import Image from "next/image";

const Carousel: React.FC = () => {
    return (
        <>
            <div className="carousel mx-auto max-w-screen-xl flex justify-items-center rounded-lg">
                <div id="slide1" className="carousel-item relative w-full h-[300px]">
                    <Image
                        src="http://parkistra.com/en/wp-content/uploads/2014/05/62RujCveti-x.jpg"
                        alt=""
                        fill={true}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-square">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-square">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[300px]">
                    <Image
                        src="http://parkistra.com/en/wp-content/uploads/2014/05/Panorama2-x.jpg"
                        alt=""
                        fill={true}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-square">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-square">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[300px]">
                    <Image
                        src="http://parkistra.com/en/wp-content/uploads/2014/05/100_9575-cut2.jpg"
                        alt=""
                        fill={true}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-square">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-square">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[300px]">
                    <Image
                        src="http://parkistra.com/en/wp-content/uploads/2014/05/IMG_7899-x2.jpg"
                        alt=""
                        fill={true}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-square">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-square">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
