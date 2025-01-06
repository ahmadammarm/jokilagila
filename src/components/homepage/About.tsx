'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Card } from "../ui/card"
import { Separator } from '../ui/separator'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { Button } from '../ui/button'

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
            offset: 120,
            delay: 50,
        })

        const handleRoute = () => {
            AOS.refresh()
        }

        window.addEventListener('popstate', handleRoute)

        window.addEventListener('scroll', () => {
            AOS.refresh()
        })

        return () => {
            window.removeEventListener('popstate', handleRoute)
            window.removeEventListener('scroll', () => {
                AOS.refresh()
            })
        }
    }, [])

    return (
        <div className="mt-20 md:mt-0 overflow-hidden">
            <div className="py-16 md:py-24 md:mt-0">
                <h1
                    className="text-4xl md:text-5xl font-bold text-center mt-10 mb-20 relative"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 px-4">
                    <div
                        className="flex items-center justify-center"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="bg-blue-950 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24">
                                <svg viewBox="0 0 100 100" className="text-blue-200 opacity-50">
                                    <path d="M100,0 C60,30 40,70 0,100 L100,100 Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative text-white">
                                Apa sih itu
                                <br />
                                <span className="text-blue-300 relative">
                                    Jokilagila Solutions?
                                </span>
                            </h2>
                            <p className="text-white text-lg relative z-10 mb-20">
                                Jokilagila Solutions adalah sebuah layanan jasa yang bergerak di bidang teknologi dan informasi yang berbasis di Indonesia.
                                Kami menyediakan layanan pembuatan website, desain UI / UX, pengembangan Internet of Things, dan desain grafis.
                            </p>
                            <div
                                className="flex justify-center relative z-10"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="absolute mt-10 -bottom-6 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 z-0" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center space-y-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                            Jokilagila Solutions
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Jokilagila Solutions hadir sebagai solusi bagi perusahaan, organisasi, dan individu yang membutuhkan layanan digital.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Kami berkomitmen untuk memberikan layanan terbaik dengan harga yang terjangkau dan kualitas yang terbaik.
                        </p>
                        <div
                            className="flex items-center space-x-4 mt-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <Image src="/aset-home/10.png" alt="layanan" width={100} height={20} />
                            <span className="text-blue-700 font-bold text-xl">
                                Layanan Terbaik
                            </span>
                        </div>
                        <div
                            className="flex items-center space-x-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/aset-home/11.png" alt="harga" width={100} height={20} />
                            <span className="text-blue-700 font-bold text-xl">
                                Harga Terjangkau
                            </span>
                        </div>
                        <Separator className="my-12 md:my-0" />
                        {/* <Link href="/tentang" data-aos="fade-up" data-aos-delay="300">
                            <Button>
                                Selengkapnya
                            </Button>
                        </Link> */}
                    </div>
                </div>

                <div className="bg-blue-900 py-16 md:py-24 px-4 md:px-14">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative mt-10"
                            data-aos="fade-up"
                        >
                            Layanan Kami
                        </h2>
                        <p className="text-center text-white mt-5 mb-16" data-aos="fade-up">
                            Siap melayani untuk mentransformasikan kebutuhan digital Anda dengan layanan berkualitas yang kami tawarkan di era modern ini
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                            {[
                                {
                                    nama: "Pengembangan Website",
                                    deskripsi: "Melayani untuk mewujudkan presence online Anda dengan website modern yang responsif, cepat, dan sesuai dengan kebutuhan Anda.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/layanan",
                                },
                                {
                                    nama: "Desain UI/UX",
                                    deskripsi: "Melayani untuk menciptakan pengalaman pengguna yang modern melalui desain UI/UX yang intuitif dan memukau.",
                                    imageUrl: "/aset-home/7.png",
                                    href: "/layanan",
                                },
                                {
                                    nama: "Internet of Things",
                                    deskripsi: "Melayani kebutuhan Anda dengan teknologi IoT canggih untuk otomatisasi dan efisiensi yang optimal.",
                                    imageUrl: "/aset-home/8.png",
                                    href: "/layanan",
                                },
                                {
                                    nama: "Desain Grafis",
                                    deskripsi: "Melayani Anda untuk menghadirkan identitas visual yang memukau melalui desain grafis modern dan kreatif.",
                                    imageUrl: "/aset-home/9.png",
                                    href: "/layanan",
                                },
                            ].map((item, index) => (
                                <Card key={index}
                                    className="relative flex flex-col items-center pt-16 bg-zinc-900 border-none mb-20"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.nama}
                                            width={200}
                                            height={200}
                                            className="hover:scale-125 transition-all ease-in-out duration-200"
                                        />
                                    </div>
                                    <div className="mt-14 text-center mb-10 px-6">
                                        <h3 className="text-2xl font-bold text-blue-600">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-bold px-4 py-2 rounded-lg bg-blue-700 text-white hover:opacity-75 transition-all ease-in-out duration-200"
                                        >
                                            Temukan Selengkapnya
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About