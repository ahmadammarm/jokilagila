"use client"

import HeaderBanner from "@/components/HeaderBanner";
import About from "@/components/homepage/About";
import Loading from "@/components/Loading";
import { useState } from "react";

export default function TentangPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <HeaderBanner title="Tentang Kami" imageUrl="/aset-home/banner-1.jpg" subtitle="Tentang Kami" link="Kembali" href="/" />
            <About />
        </div>
    )
}