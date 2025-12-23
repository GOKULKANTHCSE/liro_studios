import ErrorMain from '@/pages/error/ErrorMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Liro - Not Found Page",
};

const page = () => {
    return (
        <ErrorMain />
    );
};

export default page;