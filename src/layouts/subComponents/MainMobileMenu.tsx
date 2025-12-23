import mobileMenuData from '@/data/header-menu/mobileMenuData';
import React from 'react';
import Link from 'next/link';

const MainMobileMenu = () => {
    return (
        <>
            <ul>
                {mobileMenuData.map((menuItem) => (
                    <li key={menuItem.id}>
                        <Link href={menuItem.link}>
                            {menuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MainMobileMenu;