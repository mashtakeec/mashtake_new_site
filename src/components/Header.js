import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                            src="/resources/images/mashtake-logo.png" 
                            alt="MASHTAKE" 
                            className="logo-image"
                        />
                        <span className="logo-text">MASHTAKE</span>
                    </Link>

                    {/* Navegación Desktop */}
                    <nav className="nav-desktop">
                        <ul className="nav-menu">
                            <li>
                                <Link 
                                    to="/about" 
                                    className={`nav-button ${isActive('/about') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">私たちについて</span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link 
                                    to="/services" 
                                    className={`nav-button ${isActive('/services') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">事業紹介</span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/services#ai-services" onClick={closeMobileMenu}>
                                            AI ソリューション
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services#web-services" onClick={closeMobileMenu}>
                                            デジタルマーケティング
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services#other-services" onClick={closeMobileMenu}>
                                            イノベーション事業
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link 
                                    to="/projects" 
                                    className={`nav-button ${isActive('/projects') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">実績</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/technologies" 
                                    className={`nav-button ${isActive('/technologies') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">技術</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/careers" 
                                    className={`nav-button ${isActive('/careers') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">採用情報</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/news" 
                                    className={`nav-button ${isActive('/news') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">ニュース</span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link 
                                    to="/company" 
                                    className={`nav-button ${isActive('/company') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">会社案内</span>
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
                                    className={`nav-button ${isActive('/contact') ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-text">お問い合わせ</span>
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