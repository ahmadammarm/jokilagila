"use client"

import Loading from "@/components/Loading";
import PerbaikanCard from "@/components/PerbaikanCard";
import { useState } from "react";

export default function LayananPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return <Loading />
    }


    return (
        <div>
            <PerbaikanCard title="Halaman Layanan" />
        </div>
    )
}