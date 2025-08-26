import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <img 
                            src="/resources/images/aces-animation-logo.png" 
                            alt="ACES" 
                            className="logo-image"
                        />
                        <span className="logo-text">ACES</span>
                    </Link>

                    {/* Navegación Desktop */}
                    <nav className="nav-desktop">
                        <ul className="nav-menu">
                            <li>
                                <Link 
                                    to="/about" 
                                    className={isActive('/about') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    私たちについて
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link 
                                    to="/services" 
                                    className={isActive('/services') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    事業紹介
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/services/dx-partner" onClick={closeMobileMenu}>
                                            DXパートナーサービス
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/ai-software" onClick={closeMobileMenu}>
                                            AIソフトウェアサービス
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link 
                                    to="/projects" 
                                    className={isActive('/projects') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    実績
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/technologies" 
                                    className={isActive('/technologies') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    技術
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/careers" 
                                    className={isActive('/careers') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    採用情報
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/news" 
                                    className={isActive('/news') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    ニュース
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link 
                                    to="/company" 
                                    className={isActive('/company') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    会社案内
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/company/info" onClick={closeMobileMenu}>
                                            会社情報
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/company/members" onClick={closeMobileMenu}>
                                            メンバー
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/company/message" onClick={closeMobileMenu}>
                                            代表メッセージ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/company/downloads" onClick={closeMobileMenu}>
                                            資料ダウンロード
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    className={isActive('/contact') ? 'active' : ''}
                                    onClick={closeMobileMenu}
                                >
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Botón móvil */}
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Menú móvil */}
                <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu">
                        <li>
                            <Link to="/about" onClick={closeMobileMenu}>
                                私たちについて
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={closeMobileMenu}>
                                事業紹介
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={closeMobileMenu}>
                                実績
                            </Link>
                        </li>
                        <li>
                            <Link to="/technologies" onClick={closeMobileMenu}>
                                技術
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" onClick={closeMobileMenu}>
                                採用情報
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" onClick={closeMobileMenu}>
                                ニュース
                            </Link>
                        </li>
                        <li>
                            <Link to="/company" onClick={closeMobileMenu}>
                                会社案内
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMobileMenu}>
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;