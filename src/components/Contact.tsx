"use client";

import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "./ui/button";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {

    AOS.init({
        duration: 1000,
            once: false,
            mirror: false,
            offset: 120,
            delay: 50,
    })


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pesan: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, pesan } = formData;

        if (!name || !email || !pesan) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Tolong isi semua field sebelum mengirim pesan.",
            });
            return;
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycby-TIGP5hd3qZDQkAWczflI3qVDorrRt3egys1dGRolltGTEX6xI5XdumXT7CQdFqiAvA/exec";

        try {
            const formDataObject = new FormData();
            formDataObject.append("name", name);
            formDataObject.append("email", email);
            formDataObject.append("pesan", pesan);

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formDataObject,
            });

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Pesan berhasil terkirim.",
                });

                setFormData({
                    name: "",
                    email: "",
                    pesan: "",
                });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (error) {
            console.error("Error!", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to send message.",
            });
        }
    };

    return (
        <div className="w-full mb-20 px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">Kontak Kami</h2>
            </div>

            <div className="container mx-auto">
                {/* Contact Form */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-14 text-center" data-aos="fade-up">
                        Kirim Pesan Anda melalui Form Berikut
                    </h3>
                    <form
                        onSubmit={formSubmit}
                        className="flex flex-col items-center w-full"
                        data-aos="fade-up"
                    >
                        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nama Anda"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Anda"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
                            />
                        </div>
                        <textarea
                            name="pesan"
                            id="message"
                            placeholder="Pesan Anda"
                            value={formData.pesan}
                            onChange={handleInputChange}
                            className="w-full max-w-4xl p-4 mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
                        ></textarea>
                        <Button
                            type="submit"
                            className="text-white px-6 py-3 rounded-lg mt-6 w-full max-w-xs"
                        >
                            Kirim Pesan
                        </Button>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default Contact;