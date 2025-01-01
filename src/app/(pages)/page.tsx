"use client"

import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import { useState } from "react";



export default function HomePage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Banner />
        </div>
    )
}