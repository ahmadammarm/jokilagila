'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Jokilagila"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="text-2xl font-bold text-blue-500">
                                Jokilagila
                            </div>
                        </div>
                        <p className="text-gray-300 mt-4 max-w-md">
                            Jokilagila Solutions adalah sebuah layanan jasa yang bergerak di bidang teknologi dan informasi yang berbasis di Indonesia.
                            Kami menyediakan layanan pembuatan website, desain UI / UX, pengembangan Internet of Things, dan desain grafis.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link href="https://instagram.com/jokilagila" className="hover:text-blue-500 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-blue-500 pb-2 mb-4">Menu</h3>
                        <ul className="space-y-2">
                            {[
                                { href: '/', label: 'Beranda' },
                                { href: '/tentang', label: 'Tentang' },
                                { href: '/layanan', label: 'Layanan' },
                                { href: '/tim', label: 'Tim' },
                                { href: '/kontak', label: 'Kontak' }
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-blue-500 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-blue-500 pb-2 mb-4">Layanan</h3>
                        <ul className="space-y-2">
                            {[
                                'Pengembangan Website',
                                'Desain UI/UX',
                                'Internet of Things',
                                'Desain Grafis'
                            ].map((item) => (
                                <li>
                                    <Link
                                        href={`/layanan`}
                                        className="text-gray-300 hover:text-blue-500 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-blue-500 pb-2 mb-4">Informasi</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/tentang"
                                    className="text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tim"
                                    className="text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    Tim Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontak"
                                    className="text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Jokilagila Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer