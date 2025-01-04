"use client"

import HeaderBanner from "@/components/HeaderBanner";
import Loading from "@/components/Loading";
import PerbaikanCard from "@/components/PerbaikanCard";
import TimCard from "@/components/tim/TimCard";
import { useState } from "react";

export default function TimPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            {/* <PerbaikanCard title="Halaman Tim" /> */}
            <HeaderBanner title="Tim Kami" subtitle="Tim Kami" link="Beranda" href="/" imageUrl="/aset-home/banner-2.jpg"  />
            {/* <TimCard /> */}
        </div>
    )
}