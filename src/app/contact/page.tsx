// components/Contact.tsx
import React from "react";
import Image from "next/image";
import ContactImage from "../../../public/images/contact.jpg";

const Contact: React.FC = () => {
    return (
        <main className="bg-[#ECE3CE]">
            <div className="contact-container bg-gray-100 p-8 rounded-md shadow-md max-w-4xl mx-auto flex items-center mt-11">
                <div className="text-center pr-8">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        Sustainability Park Istra
                    </h1>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">Contact</h2>
                        <p className="text-gray-700">
                            For general inquiries, please email us at{" "}
                            <a
                                href="mailto:info@parkistra.com"
                                className="text-blue-500 hover:underline"
                            >
                                info@parkistra.com
                            </a>
                            .
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">For Volunteers</h2>
                        <p className="text-gray-700">
                            If you are interested in volunteering, please contact us at{" "}
                            <a
                                href="mailto:volunteers@parkistra.com"
                                className="text-blue-500 hover:underline"
                            >
                                volunteers@parkistra.com
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">Telephone</h2>
                        <p className="text-gray-700">
                            Reach us by phone at{" "}
                            <a href="tel:0038651212921" className="text-blue-500 hover:underline">
                                00 386 51 212 921
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Image
                        priority={true}
                        src={ContactImage}
                        alt="Contact Image"
                        className="rounded-full w-52 h-52 object-cover"
                    />
                </div>
            </div>
        </main>
    );
};

export default Contact;
