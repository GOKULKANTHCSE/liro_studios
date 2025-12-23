import ContactMain from '@/pages/contacts/contact/ContactMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Liro - Contact Main",
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;