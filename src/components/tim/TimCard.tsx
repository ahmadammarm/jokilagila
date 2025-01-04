import { tim } from "@/constants/tim"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"



const TimCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 py-5">
        {tim.map((item, index) => (
            <Card key={index}>
                <CardContent className="flex justify-center items-center mt-6">
                    <Image src={item.foto} alt="" width={300} height={300} className="rounded-lg"/>
                </CardContent>
                <p className="text-center">
                    {item.nama}
                </p>
            </Card>
        ))}
    </div>
  )
}

export default TimCard
