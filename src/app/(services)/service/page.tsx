import ServiceHorizontalScroll from '@/components/service/ServiceHorizontalScroll';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Services - Liro Digital Agency",
    description: "Explore our comprehensive digital services including Brand Identity, Content Production, AI Portrait Creation, Web Design, and Social Media Management."
};

const ServicesPage = () => {
    return (
        <ServiceHorizontalScroll />
    );
};

export default ServicesPage;
