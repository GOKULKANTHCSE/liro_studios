
import PortfolioHorizontalShowcase from '@/pages/portfolios/portfolio-horizontal-showcase/PortfolioHorizontalShowcase';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Liro - Portfolio Horizontal Showcase Light",
};

const page = () => {
    return (
        <PortfolioHorizontalShowcase />
    );
};

export default page;