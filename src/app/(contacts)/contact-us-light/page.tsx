import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Liro - Contact Us Light",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;