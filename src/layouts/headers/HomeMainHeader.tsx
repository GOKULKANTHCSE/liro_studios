'use client';
import logo from "../../../public/assets/img/logo/logo.png";
import OffCanvasPanel from "@/components/offcanvas/OffCanvasPanel";
import useStickyHeader from "../../hooks/useStickyHeader"
import { ArrowSvg, ButtonBlurFilter } from "@/svg";
import NavMenus from "../subComponents/NavMenus";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const HomeMainHeader = ({ containerCls = "container-1750" }) => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const isSticky = useStickyHeader(20);
    return (
        <>
            <div className={`tp-header-area tp-header-ptb tp-header-blur sticky-white-bg
         header-transparent border-style-line tp-header-border ${isSticky ? 'header-sticky' : ''}`}>
                <div className={`container ${containerCls}`}>
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-6 col-6">
                            <div className="tp-header-logo">
                                <Link href="/">
                                    <Image width={120} src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 d-none d-xl-block">
                            <div className="tp-header-box text-center">
                                <div className={`tp-header-menu tp-header-dropdown dropdown-white-bg`}>
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenus />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-6">
                            <div className="tp-header-right d-flex align-items-center justify-content-end">
                                <div className="tp-header-btn-box ml-25 d-none d-md-flex">
                                    <Link href="/" className="tp-btn-black btn-red-bg">
                                        <span className="tp-btn-black-filter-blur">
                                            <ButtonBlurFilter filterId="buttonFilter" />
                                        </span>
                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#buttonFilter" }}>
                                            <span className="tp-btn-black-text">Start a Project</span>
                                            <span className="tp-btn-black-circle">
                                                <ArrowSvg />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="tp-header-bar ml-20 d-xl-none">
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default HomeMainHeader;
