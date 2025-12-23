import React from 'react';
import Link from 'next/link';
import styles from './HomeMainFooter.module.scss';

const HomeMainFooter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/* Main Footer Content */}
            <div className={styles.footerMain}>
                <div className={styles.container}>
                    {/* Company Info & Description */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>LiroMATRIX</h4>
                        <p className={styles.description}>
                            We provide innovative solutions for your business needs. Discover how our services can help you grow and succeed in the digital world.
                        </p>
                        <Link href="#" className={styles.readMore}>
                            read more →
                        </Link>
                    </div>

                    {/* Discover Section */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Discover</h4>
                        <ul className={styles.footerLinks}>
                            {['Buy & Sell', 'Merchant', 'Giving back', 'Help & Support'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className={styles.footerLink}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Section */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>About</h4>
                        <ul className={styles.footerLinks}>
                            {['Staff', 'Team', 'Careers', 'Blog'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className={styles.footerLink}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Resources</h4>
                        <ul className={styles.footerLinks}>
                            {['Security', 'Global', 'Charts', 'Privacy'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className={styles.footerLink}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Social</h4>
                        <ul className={styles.footerLinks}>
                            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className={styles.footerLink}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>
                            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with ❤️ by <Link href="https://Liromatrix.com">Liromatrix</Link>
                        </p>
                        <div className={styles.footerBottomLinks}>
                            <Link href="#" className={styles.bottomLink}>Terms</Link>
                            <Link href="#" className={styles.bottomLink}>Privacy</Link>
                            <Link href="#" className={styles.bottomLink}>Compliances</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeMainFooter;
