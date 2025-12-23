"use client";

import servicesData from '@/data/serviceData';
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Get the first 5 main services for the showcase
const serviceItems = servicesData.slice(0, 5).map((service) => ({
    id: `tp-service-${service.id}`,
    img: service.image,
    title: service.title,
    link: `/service-details-light?id=${service.id}`,
    description: service.description,
}));

const ServiceHorizontalScroll = () => {
    const defaultId = serviceItems[0].id;
    const [activeId, setActiveId] = React.useState<string>(defaultId);

    function handleActive(id: string) {
        setActiveId(id);
    }

    function handleDeactive() {
        setActiveId(defaultId);
    }

    return (
        <main>
            {/* -- service showcase area start -- */}
            <div className="tp-port-slider-area">
                <div className="tp-port-slider-main p-relative">
                    {/* Background Images */}
                    <div
                        id="tp-port-slider-wrap"
                        className={activeId}
                    >
                        {serviceItems.map((item) => (
                            <div key={item.id} className={`tp-port-slider-thumb ${item.id}`}>
                                {item.img && <Image src={item.img} alt={item.title} />}
                            </div>
                        ))}
                    </div>

                    {/* Service Titles */}
                    <div className="tp-port-slider-content-wrap z-index-5">
                        <div className="tp-port-slider-content">
                            {serviceItems.map((item) => (
                                <h4
                                    key={item.id}
                                    className={`tp-port-slider-title ${activeId === item.id ? "active" : ""
                                        }`}
                                    rel={item.id}
                                    onMouseEnter={() => handleActive(item.id)}
                                    onMouseLeave={handleDeactive}
                                >
                                    <Link href={item.link}>{item.title}</Link>
                                </h4>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* -- service showcase area end -- */}
        </main>
    );
};

export default ServiceHorizontalScroll;
