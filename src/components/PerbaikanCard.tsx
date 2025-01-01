import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import Link from 'next/link'
import { Button } from './ui/button'
import { PhoneIcon } from 'lucide-react'


interface PerbaikanCardProps {
    title: string
}

const PerbaikanCard: React.FC<PerbaikanCardProps> = ({
    title
}) => {
    return (
        <div className="flex items-center justify-center h-screen px-4">
            <Card className="p-5">
                <CardTitle className="text-center">
                    Maaf, {title} masih dalam tahap pengembangan yaa
                </CardTitle>
                <CardContent>
                    <p className="text-center mt-5">
                        Jika ada pertanyaan, silahkan hubungi kami di
                    </p>
                    <div className="flex items-center justify-center mt-5">
                        <Link href="https://wa.me/6289697083392" target="blank">
                            <Button className="bg-blue-600">
                                <PhoneIcon className="mr-2" size={16} /> Nomor Telepon Kami
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PerbaikanCard
