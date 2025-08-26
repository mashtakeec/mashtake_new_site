import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {
        // Scroll suave para enlaces internos
        const handleSmoothScroll = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleSmoothScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
        };
    }, []);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                <span className="title-line">アルゴリズムで、</span>
                                <span className="title-line">シンプルな社会を</span>
                            </h1>
                            <p className="hero-subtitle">
                                ACESは、アルゴリズムを用いて事業開発を行うAI事業会社です。
                                <br />
                                ヒトの知見や業務をデジタル化する「AIトランスフォーメーション事業」を通して、
                                <br />
                                「シンプルな社会」の実現を目指しています。
                            </p>
                            <div className="hero-buttons">
                                <Link to="/about" className="btn btn-primary">
                                    私たちについてもっと知る
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    お問い合わせ
                                </Link>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-animation">
                                <img 
                                    src="/resources/images/aces-animation-logo.png" 
                                    alt="ACES Animation" 
                                    className="hero-logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Vision & Mission</h2>
                    </div>
                    <div className="vision-mission-content">
                        <div className="vision-card">
                            <h3>Vision</h3>
                            <p>アルゴリズムで、シンプルな社会を</p>
                        </div>
                        <div className="mission-card">
                            <h3>Mission</h3>
                            <p>ヒトの知見と業務をDeep Learningを用いてAI化し、デジタルでの事業開発を推進しています。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">事業紹介</h2>
                        <p className="section-subtitle">
                            ヒトの知見と業務をDeep Learningを用いてAI化し、デジタルでの事業開発を推進しています。
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="icon-dx-partner"></i>
                            </div>
                            <h3>DX Partner Service</h3>
                            <h4>DXパートナーサービス</h4>
                            <p>
                                事業・業界を変えたいと立ち上がった人とともに、AI専門家集団がプロジェクトを通じて、
                                さまざまな業界のDX推進をお手伝いします。
                            </p>
                            <Link to="/services/dx-partner" className="service-link">
                                詳しく見る →
                            </Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="icon-ai-software"></i>
                            </div>
                            <h3>AI Software Service</h3>
                            <h4>AIソフトウェアサービス</h4>
                            <p>
                                さまざまな業種のパートナーとDX推進を行う中で得た知見とAIアルゴリズムを利用した
                                ソフトウェアを開発し、提供しています。
                            </p>
                            <Link to="/services/ai-software" className="service-link">
                                詳しく見る →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">実績</h2>
                        <p className="section-subtitle">
                            AIアルゴリズムを軸にDXを推進、支援してきたパートナーとの実績を紹介します。
                        </p>
                        <p className="section-description">
                            保険、金融、小売、介護、人材、建設、スポーツなど、事業・業界を変えたいと立ち上がった
                            パートナーのみなさまと併走して、数多くのDXプロジェクトを推進しています。
                        </p>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/resources/images/j-power02-20220622-181632-20220622-181632.png" alt="J-POWER" />
                            </div>
                            <div className="project-content">
                                <h3>J-POWER</h3>
                                <h4>ヒトの行動特定労災リスクをAIで軽減</h4>
                                <p>危険予知高度化と安全管理システム構築を目指す電源開発とACESの取り組みとは</p>
                                <Link to="/projects/j-power" className="project-link">
                                    実績を見る
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/resources/images/namco.png" alt="バンダイナムコ研究所" />
                            </div>
                            <div className="project-content">
                                <h3>株式会社バンダイナムコ研究所</h3>
                                <h4>モーションキャプチャ</h4>
                                <p>モーションAI技術の研究開発に活用可能なモーションデータセットを販売します</p>
                                <Link to="/projects/namco" className="project-link">
                                    実績を見る
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/resources/images/aces-animation-logo.png" alt="ACES ChatHub" />
                            </div>
                            <div className="project-content">
                                <h3>ACES ChatHub</h3>
                                <h4>大規模モデルChatGPTをセキュアに利活用</h4>
                                <p>できる法人向けチャットボットAIプラットフォーム「ACES ChatHub」を提供開始しました</p>
                                <Link to="/projects/chat-hub" className="project-link">
                                    実績を見る
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects-more">
                        <Link to="/projects" className="btn btn-outline">
                            すべての実績を見る
                        </Link>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">クライアント企業</h2>
                        <p className="section-subtitle">
                            ACESと共に歩んできた企業を紹介します。
                        </p>
                        <p className="section-description">
                            私たちは各業界をリードする企業のDXプロジェクトにAIパートナーとして伴走することで、
                            業界変革を推進しています。
                        </p>
                    </div>
                    <div className="clients-grid">
                        <div className="client-logo">
                            <img src="/resources/images/smbc-20240419-184915-20240419-184915.jpg" alt="SMBC" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/sompo.png" alt="SOMPO" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/daido-logo-20220621-120421.png" alt="大同生命" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/tv-asahi-20220623-134324-20220623-134324.png" alt="テレビ朝日" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/namco.png" alt="バンダイナムコ研究所" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/tvtokyo.png" alt="テレビ東京" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/j-power02-20220622-181632-20220622-181632.png" alt="J-POWER" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/zoff-2.png" alt="ZOFF" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/lead.png" alt="LEAD" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/jfe.png" alt="JFEエンジニアリング" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/aba.png" alt="ABA" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/hitowa.png" alt="ヒトワ" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/kyodonews.png" alt="共同通信デジタル" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/gaora.png" alt="GAORA" />
                        </div>
                        <div className="client-logo">
                            <img src="/resources/images/komehyo-logo-20240912-162837-20240912-162837.png" alt="コメヒョー" />
                        </div>
                    </div>
                    <div className="clients-more">
                        <p>and more...</p>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="technologies-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">技術</h2>
                        <p className="section-subtitle">
                            最先端アルゴリズムを独自モジュール化し、提供しています。
                        </p>
                        <p className="section-description">
                            アカデミアをバックグラウンドに持つ優秀なエンジニアが最先端アルゴリズムを独自のモジュールにして
                            提供することで、実現場への技術検証・適用を高速で実現しています。
                        </p>
                    </div>
                    <div className="technologies-grid">
                        <div className="technology-card">
                            <div className="technology-number">01</div>
                            <h3>コミュニケーションの科学</h3>
                            <h4>Communication Intelligence</h4>
                            <p>
                                人と人、人とシステムのコミュニケーションを科学的に分析し、
                                最適な相互作用を実現する技術です。
                            </p>
                        </div>
                        <div className="technology-card">
                            <div className="technology-number">02</div>
                            <h3>ヒトの行動・属性のデジタル再現</h3>
                            <h4>Human Digital Twin</h4>
                            <p>
                                人の行動パターンや属性をデジタル上で再現し、
                                予測や最適化に活用する技術です。
                            </p>
                        </div>
                        <div className="technology-card">
                            <div className="technology-number">03</div>
                            <h3>モビリティデータの分析</h3>
                            <h4>Mobility Intelligence</h4>
                            <p>
                                移動データを分析し、交通最適化や都市計画に
                                活用する技術です。
                            </p>
                        </div>
                    </div>
                    <div className="technologies-more">
                        <Link to="/technologies" className="btn btn-outline">
                            すべての技術を見る
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2>私たちと一緒に働きませんか？</h2>
                            <p>
                                ACESでは、一緒に働くプロフェッショナルな仲間を募集しています。
                                アルゴリズムを用いて人の働き方に「余白」をつくり、シンプルな社会をつくっていきませんか。
                            </p>
                            <div className="cta-buttons">
                                <Link to="/careers" className="btn btn-primary">
                                    ACESのメンバーを見る
                                </Link>
                                <Link to="/careers" className="btn btn-secondary">
                                    採用情報を見る
                                </Link>
                            </div>
                        </div>
                        <div className="cta-image">
                            <img src="/resources/images/career-bg-01.jpg" alt="Careers" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bottom-cta">
                <div className="container">
                    <div className="bottom-cta-grid">
                        <div className="cta-card downloads">
                            <div className="cta-card-content">
                                <h3>資料ダウンロード</h3>
                                <p>会社紹介や実績、技術に関する情報など、各種資料のダウンロードはこちらからどうぞ。</p>
                                <Link to="/company/downloads" className="btn btn-outline">
                                    資料ダウンロード
                                </Link>
                            </div>
                            <div className="cta-card-image">
                                <img src="/resources/images/cta-download-bg.jpg" alt="Downloads" />
                            </div>
                        </div>
                        <div className="cta-card contact">
                            <div className="cta-card-content">
                                <h3>お問い合わせ</h3>
                                <p>ご協業のご相談、採用、取材に関するお問い合わせなど、お気軽にご連絡ください。</p>
                                <Link to="/contact" className="btn btn-primary">
                                    お問い合わせ
                                </Link>
                            </div>
                            <div className="cta-card-image">
                                <img src="/resources/images/cta-contact-bg.jpg" alt="Contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;