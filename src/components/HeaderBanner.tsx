import Link from "next/link"
import React from "react"

interface HeaderBannerProps {
    title: string
    imageUrl: string
    href: string
    link: string
    subtitle: string
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({
    title,
    imageUrl,
    href,
    link,
    subtitle
}) => {
  return (
    <div className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full parallax" style={{
            backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'
        }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <div className="rounded-lg mb-10 bg-white p-5">
                    <Link href={href} className="text-blue-700 text-lg font-bold transition-all ease-in-out duration-200 font-serif mr-2 hover:opacity-80">
                        {link}
                    </Link>
                    <span className="text-black font-serif font-bold text-lg">
                      /  {subtitle}
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                    {title}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default HeaderBanner