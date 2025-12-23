import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Liro - About Creative light",
};

const page = () => {

    return (
        <AboutCreativeMain />
    );
};

export default page;