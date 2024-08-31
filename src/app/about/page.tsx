import React from "react";
import Head from "next/head";
import p1Photo from "../../../public/images/project1ParkIstra.jpeg";
import p2Photo from "../../../public/images/project2ParkIstra.jpeg";
import p3Photo from "../../../public/images/project3ParkIstra.jpeg";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <main className="bg-[#ECE3CE]">
            <div className="support-us-container bg-gray-100 rounded-md shadow-md max-w-4xl mx-auto p-8 mt-11 mb-11">
                <h1 className="text-5xl text-center font-bold mb-6 text-gray-800">
                    Welcome to Park Istra
                </h1>
                <p className="text-gray-700 mb-6">
                    Park Istra is a passionate charity organization located in the breathtaking
                    inland of Istria. Our unwavering mission is to contribute to the well-being of
                    the local population and champion sustainable development throughout the region.
                    Our diverse range of activities spans from assisting the socially deprivileged
                    to safeguarding cultural and natural heritage, conducting educational programs,
                    and supporting sustainable initiatives in Slovenian Istria and beyond.
                </p>

                <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
                    Our Commitment
                </h2>
                <p className="text-gray-700 mb-6">
                    At Park Istra, we take pride in supporting ideas and projects that have a
                    lasting positive impact on our region and beyond. Our dedicated team works
                    tirelessly to make a difference in the lives of those we serve, focusing on
                    long-term benefits for the community.
                </p>

                <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
                    Volunteer Center
                </h2>
                <p className="text-gray-700 mb-6">
                    In 2019, we established the Park Istra Volunteer Center in the charming village
                    of Kastelec, the only center of its kind in Slovenia and beyond. With the
                    capacity to host up to twenty volunteers at any given time, the center actively
                    addresses the daily needs and challenges of the local environment. We organize
                    multiple volunteer actions daily, offering our hardworking hands to assist those
                    in need. To date, we`ve conducted approximately 3500 volunteering actions,
                    hosting over 1200 volunteers from 56 countries who have collectively donated
                    over 100,000 hours of their time.
                </p>

                <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
                    Awards and Recognition
                </h2>
                <p className="text-gray-700 mb-6">
                    Our commitment to excellence has not gone unnoticed. In 2021, one of Park
                    Istra&apos;s projects received a nomination for the prestigious Salto Award,
                    recognizing it as one of the top five volunteering projects in Europe. In 2019,
                    Petra Matos, the founder of Park Istra, was honored with a national award for
                    outstanding achievements in volunteering. Furthermore, in 2017, Park Istra was
                    bestowed with the esteemed Energy Globe Award Slovenia for environmental
                    excellence, along with the recognition as an organization working in the public
                    interest.
                </p>

                <p className="text-gray-700 mb-6">
                    In the same year, Petra Matos was nominated for the national award of Slovenian
                    Woman of the Year, a testament to her inspiring leadership and dedication to
                    making a positive impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image
                        priority={true}
                        src={p1Photo}
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <Image
                        priority={true}
                        src={p2Photo}
                        alt="Image 2"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <Image
                        priority={true}
                        src={p3Photo}
                        alt="Image 3"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
            </div>
        </main>
    );
};

export default About;
