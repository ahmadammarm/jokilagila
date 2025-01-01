"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/aset-home/banner-1.jpg",
            title: "Selamat datang di",
            titleHighlight: "Jokilagila Solutions",
            description: "Kami siap melayani untuk mengatasi permasalahan digital Anda dengan solusi yang tepat dan inovatif",
            buttonText: "Selengkapnya",
            buttonLink: "/tentang",
            imageUrl: "/aset-home/banner-1.jpg",
        },
        {
            image: "/aset-home/banner-2.jpg",
            title: "Melayani dalam",
            titleHighlight: "Berbagai Bidang",
            description: "Kami siap melayani dalam berbagai bidang seperti pembuatan website, desain UI / UX, Internet of Things, dan desain grafis",
            buttonText: "Jelajahi",
            buttonLink: "/layanan",
            imageUrl: "/aset-home/banner-2.jpg",
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                        currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className="w-full h-full flex items-center bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url('${slide.image}')`
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-80"></div>

                        <div className="container mx-auto relative mt-24 z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center md:gap-8">
                                <div 
                                    className="flex justify-center lg:justify-end md:mb-0 pr-0 md:pr-10 order-1 md:order-2" 
                                    data-aos="fade-left"
                                >
                                    <img
                                        className="w-[20rem] lg:w-[70%] rounded-[100%] transition-transform duration-500 hover:scale-105"
                                        src={slide.imageUrl}
                                        alt=""
                                        loading="lazy" 
                                    />
                                </div>
                                <div 
                                    className="text-center lg:text-left space-y-4 pl-0 md:pl-8 order-2 md:order-1" 
                                    data-aos="fade-right"
                                >
                                    <h1 className="text-white text-4xl lg:text-6xl font-bold cursor-default mb-10 px-3 font-sans">
                                        {slide.title} <span className="text-blue-600 font-sans">{slide.titleHighlight}</span>
                                    </h1>
                                    <p className="text-white text-lg lg:text-xl leading-relaxed font-medium cursor-default px-3 font-sans">
                                        {slide.description}
                                    </p>
                                    <Link href={slide.buttonLink} className="px-3 inline-block">
                                        <Button className="px-8 py-3 bg-blue-600 border-primary text-blue-50 font-bold rounded-lg hover:bg-white hover:text-primary transition duration-300 mt-10">
                                            {slide.buttonText}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <button
                                    onClick={prevSlide}
                                    className="transform bg-blue-600/50 p-2 rounded-full text-white hover:bg-blue-600 transition-colors z-20 mr-7"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="transform bg-blue-600/50 p-2 rounded-full text-white hover:bg-blue-600 transition-colors z-20"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;