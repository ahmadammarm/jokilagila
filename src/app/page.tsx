import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center h-screen px-4">
            <Card className="p-5">
                <CardTitle className="text-center">
                    Maaf, Jokilagila masih dalam tahap pengembangan yaa
                </CardTitle>
                <CardContent>
                    <p className="text-center mt-5">
                        Jika ada pertanyaan, silahkan hubungi kami di
                    </p>
                    <div className="flex items-center justify-center mt-5">
                        <Link href="https://wa.me/6289697083392" target="blank">
                            <Button>
                                <PhoneIcon className="mr-2" size={16} /> Nomor Telepon Kami
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}