import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import lottie from 'lottie-web';
import WhoWeAre from '../components/WhoWeAre';
import Technologies from '../components/Technologies';
import News from '../components/News';
import Careers from '../components/Careers';
import FinalSections from '../components/FinalSections';

const Home = () => {
    const scrambleRef1 = useRef(null);
    const scrambleRef2 = useRef(null);
    const scrambleRef3 = useRef(null);
    const scrambleRef4 = useRef(null);
    const motionBgRef = useRef(null);

    useEffect(() => {
        // スクランブルテキストエフェクト
        const scrambleText = (element, finalText, duration = 2) => {
            const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            let frame = 0;
            const frameRate = 30;
            const totalFrames = duration * frameRate;
            
            const animate = () => {
                let scrambledText = '';
                for (let i = 0; i < finalText.length; i++) {
                    if (frame / totalFrames > i / finalText.length) {
                        scrambledText += finalText[i];
                    } else {
                        scrambledText += chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                element.textContent = scrambledText;
                
                if (frame < totalFrames) {
                    frame++;
                    requestAnimationFrame(animate);
                } else {
                    element.textContent = finalText;
                }
            };
            
            animate();
        };

        // アニメーション開始
        const startAnimations = () => {
            setTimeout(() => scrambleText(scrambleRef1.current, 'アルゴリズムで、', 1.5), 500);
            setTimeout(() => scrambleText(scrambleRef2.current, '人の働き方に余白をつくる。', 2), 1000);
            setTimeout(() => scrambleText(scrambleRef3.current, 'Vision', 1), 2000);
            setTimeout(() => scrambleText(scrambleRef4.current, 'Mission', 1), 2200);
        };

        // Lottie背景アニメーション（SVGデータを模擬）
        const createBackgroundAnimation = () => {
            if (motionBgRef.current) {
                // 幾何学的な背景を作成
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 1920 1080');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.style.position = 'absolute';
                svg.style.top = '0';
                svg.style.left = '0';
                svg.style.zIndex = '1';

                // 背景パス1
                const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path1.setAttribute('d', 'M619.40771484375,-544 C619.40771484375,-544 -962,-544 -962,-544 C-962,-544 -963,544 -963,544 C-963,544 -3.3308920860290527,542.1386108398438 -3.3308920860290527,542.1386108398438 C-3.3308920860290527,542.1386108398438 619.40771484375,-544 619.40771484375,-544z');
                path1.setAttribute('fill', '#fcfcfc');
                path1.setAttribute('transform', 'translate(960, 540)');

                // 背景パス2
                const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path2.setAttribute('d', 'M961.25,-324.3614501953125 C961.25,-324.3614501953125 465.0522155761719,542.43115234375 465.0522155761719,542.43115234375 C465.0522155761719,542.43115234375 963,543.5 963,543.5 C963,543.5 961.25,-324.3614501953125 961.25,-324.3614501953125z');
                path2.setAttribute('fill', '#fcfcfc');
                path2.setAttribute('transform', 'translate(960, 540)');

                svg.appendChild(path1);
                svg.appendChild(path2);
                motionBgRef.current.appendChild(svg);

                // GSAPアニメーション
                gsap.to(path1, {
                    rotation: 360,
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "center"
                });

                gsap.to(path2, {
                    rotation: -360,
                    duration: 25,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "center"
                });
            }
        };

        startAnimations();
        createBackgroundAnimation();

        // Vision/Mission タブ切り替え
        const handleTabSwitch = () => {
            const visionTab = scrambleRef3.current;
            const missionTab = scrambleRef4.current;

            if (visionTab && missionTab) {
                visionTab.style.color = '#e9e9e9';
                missionTab.style.color = '#4b4b4b';

                const switchToMission = () => {
                    gsap.to(visionTab, { color: '#4b4b4b', duration: 0.5 });
                    gsap.to(missionTab, { color: '#e9e9e9', duration: 0.5 });
                };

                const switchToVision = () => {
                    gsap.to(visionTab, { color: '#e9e9e9', duration: 0.5 });
                    gsap.to(missionTab, { color: '#4b4b4b', duration: 0.5 });
                };

                // 5秒ごとに切り替え
                let isVision = true;
                setInterval(() => {
                    if (isVision) {
                        switchToMission();
                    } else {
                        switchToVision();
                    }
                    isVision = !isVision;
                }, 5000);
            }
        };

        setTimeout(handleTabSwitch, 3000);

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
            {/* Hero Section - ACES Style */}
            <section className="main-visual">
                <div className="text-container">
                    <p ref={scrambleRef1} className="copy-text"></p>
                    <p ref={scrambleRef2} className="copy-text"></p>
                    <div className="desc-container">
                        <span ref={scrambleRef3} className="text-vision"></span>
                        <span className="line"></span>
                        <span ref={scrambleRef4} className="text-mission"></span>
                    </div>
                </div>
                <div ref={motionBgRef} className="motionbg">
                    {/* SVG背景アニメーションがここに動的に追加される */}
                </div>
            </section>

            {/* Who We Are Section */}
            <WhoWeAre />

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-en">Services</h2>
                        <span className="section-title-jp">事業紹介</span>
                        <p className="section-subtitle">
                            ヒトの知見と業務をDeep Learningを用いてAI化し、デジタルでの事業開発を推進しています。
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card dx-partner-card">
                            <h3>DX Partner Service</h3>
                            <h4>DXパートナーサービス</h4>
                            <p>
                                事業・業界を変えたいと立ち上がった人とともに、AI専門家集団がプロジェクトを通じて、
                                さまざまな業界のDX推進をお手伝いします。
                            </p>
                        </div>
                        <div className="service-card ai-software-card">
                            <h3>AI Software Service</h3>
                            <h4>AIソフトウェアサービス</h4>
                            <p>
                                さまざまな業種のパートナーとDX推進を行う中で得た知見とAIアルゴリズムを利用した
                                ソフトウェアを開発し、提供しています。
                            </p>
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

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-en">Projects</h2>
                        <span className="section-title-jp">実績</span>
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
                        <h2 className="section-title-en">Our Clients</h2>
                        <span className="section-title-jp">クライアント企業</span>
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
                        <h2 className="section-title-en">Technologies</h2>
                        <span className="section-title-jp">技術</span>
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
                                    資料をダウンロード
                                </Link>
                            </div>
                            <div className="cta-card-bg downloads-bg"></div>
                        </div>
                        <div className="cta-card contact">
                            <div className="cta-card-content">
                                <h3>お問い合わせ</h3>
                                <p>ご質問やご相談など、お気軽にお問い合わせください。専門スタッフが対応いたします。</p>
                                <Link to="/contact" className="btn btn-outline">
                                    お問い合わせ
                                </Link>
                            </div>
                            <div className="cta-card-bg contact-bg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuevas secciones añadidas */}
            <Technologies />
            <News />
            <Careers />
            <FinalSections />
        </div>
    );
};

export default Home;

