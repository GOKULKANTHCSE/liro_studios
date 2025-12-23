import mobileMenuData from '@/data/header-menu/mobileMenuData';
import logo from "../../../public/assets/img/logo/logo.png";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainMobileMenu = () => {
    return (
        <>
            <div className="tp-mobile-menu-logo">
                <Link href="/">
                    <Image width={120} src={logo} alt="logo" />
                </Link>
            </div>
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