import React from "react";
import MovieFam from "@/assets/movies-Fam.png";
import MoviesRat from "@/assets/movies-rat.png";
import MoviesDec from "@/assets/movies-dec.png";

const Carousel = () => {
    return (
        <section className="w-full flex items-center">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={MovieFam.src}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="">
                            ❮
                        </a>
                        <a href="#slide2" className="">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={MoviesRat.src}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="">
                            ❮
                        </a>
                        <a href="#slide3" className="">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={MoviesDec.src}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="">
                            ❮
                        </a>
                        <a href="#slide1" className="">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
    </section>
    );
};

export default Carousel;
