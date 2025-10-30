import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import lottie from 'lottie-web';
import WhoWeAre from '../components/WhoWeAre';
import Technologies from '../components/Technologies';
import News from '../components/News';
import Careers from '../components/Careers';
import FinalSections from '../components/FinalSections';

const Home = () => {
    const motionBgRef = useRef(null);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    // Projects data
    const projectsData = [
        {
            id: 'workshop',
            title: '大規模モデルを体験し、考える、\nワークショップ型プロジェクト',
            description: 'AIエキスパートによる大規模モデル勉強・体験会と\nワークショップがセットになった\n"活用指針検討プロジェクト"の提供を開始',
            tag: 'ChatGPT/生成AIのビジネス活用推進プログラムを提供開始しました',
            image: '/resources/images/j-power02-20220622-181632-20220622-181632.png',
            link: '/projects/workshop'
        },
        {
            id: 'namco',
            title: 'モーションAI技術の研究開発に活用可能な\nモーションデータセットを販売します',
            description: 'バンダイナムコ研究所と共同で開発した\n高品質なモーションデータセットを\n研究開発用途で提供開始',
            tag: 'バンダイナムコ研究所との共同プロジェクト',
            image: '/resources/images/namco.png',
            link: '/projects/namco'
        },
        {
            id: 'chathub',
            title: 'MASHTAKE、ChatGPTをセキュアに利活用できる\n法人向けチャットボットAIプラットフォーム',
            description: 'セキュリティとプライバシーを重視した\n企業向けChatGPTプラットフォーム\n「MASHTAKE ChatHub」の提供を開始',
            tag: '法人向けセキュアAIプラットフォーム',
            image: '/resources/images/mashtake-logo.png',
            link: '/projects/chat-hub'
        }
    ];

    // Featured project state
    const [featuredProject, setFeaturedProject] = useState(projectsData[0]);

    // Handle project card click
    const handleProjectClick = (project) => {
        setFeaturedProject(project);
    };

    // Handle featured project click
    const handleFeaturedClick = () => {
        navigate(featuredProject.link);
    };

    useEffect(() => {
        // Slider drag functionality
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        if (slider) {
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });

            // Touch events for mobile
            slider.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('touchmove', (e) => {
                const x = e.touches[0].pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });
        }

        // Scramble animation removed - using static text instead

        // 背景アニメーション - 円と円弧
        const createBackgroundAnimation = () => {
            if (motionBgRef.current) {
                // SVG要素を作成
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 1920 1080');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.style.position = 'absolute';
                svg.style.top = '0';
                svg.style.left = '0';
                svg.style.zIndex = '1';

                // 最奥の円（一番大きい）
                const bgCircle0 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                bgCircle0.setAttribute('id', 'bg-circle-0');
                bgCircle0.setAttribute('cx', '960');
                bgCircle0.setAttribute('cy', '540');
                bgCircle0.setAttribute('r', '900');
                bgCircle0.setAttribute('fill', '#fcfcfc');
                bgCircle0.setAttribute('fill-opacity', '0.6');

                // 背景円1（呼吸アニメーション）
                const bgCircle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                bgCircle1.setAttribute('id', 'bg-circle-1');
                bgCircle1.setAttribute('cx', '960');
                bgCircle1.setAttribute('cy', '540');
                bgCircle1.setAttribute('r', '800');
                bgCircle1.setAttribute('fill', '#fcfcfc');
                bgCircle1.setAttribute('fill-opacity', '0.7');

                // 背景円2（呼吸アニメーション）
                const bgCircle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                bgCircle2.setAttribute('id', 'bg-circle-2');
                bgCircle2.setAttribute('cx', '960');
                bgCircle2.setAttribute('cy', '540');
                bgCircle2.setAttribute('r', '650');
                bgCircle2.setAttribute('fill', '#fcfcfc');
                bgCircle2.setAttribute('fill-opacity', '0.8');

                // 回転する円弧1（ブルー、1/3が欠けた円）
                const rotatingArc1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                rotatingArc1.setAttribute('id', 'rotating-arc-1');
                rotatingArc1.setAttribute('cx', '960');
                rotatingArc1.setAttribute('cy', '540');
                rotatingArc1.setAttribute('r', '850');
                rotatingArc1.setAttribute('fill', 'none');
                rotatingArc1.setAttribute('stroke', '#4a90e2');
                rotatingArc1.setAttribute('stroke-width', '4');
                rotatingArc1.setAttribute('stroke-dasharray', '3560 1780'); // 2/3が線、1/3が空白

                // 回転する円弧2（パープル、1/4が欠けた円）
                const rotatingArc2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                rotatingArc2.setAttribute('id', 'rotating-arc-2');
                rotatingArc2.setAttribute('cx', '960');
                rotatingArc2.setAttribute('cy', '540');
                rotatingArc2.setAttribute('r', '725');
                rotatingArc2.setAttribute('fill', 'none');
                rotatingArc2.setAttribute('stroke', '#9b59b6');
                rotatingArc2.setAttribute('stroke-width', '5');
                rotatingArc2.setAttribute('stroke-dasharray', '3420 1140'); // 3/4が線、1/4が空白

                // 回転する円弧3（ティール、1/2が欠けた円）
                const rotatingArc3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                rotatingArc3.setAttribute('id', 'rotating-arc-3');
                rotatingArc3.setAttribute('cx', '960');
                rotatingArc3.setAttribute('cy', '540');
                rotatingArc3.setAttribute('r', '600');
                rotatingArc3.setAttribute('fill', 'none');
                rotatingArc3.setAttribute('stroke', '#1abc9c');
                rotatingArc3.setAttribute('stroke-width', '3');
                rotatingArc3.setAttribute('stroke-dasharray', '1885 1885'); // 1/2が線、1/2が空白

                svg.appendChild(bgCircle0);
                svg.appendChild(bgCircle1);
                svg.appendChild(bgCircle2);
                svg.appendChild(rotatingArc1);
                svg.appendChild(rotatingArc2);
                svg.appendChild(rotatingArc3);
                motionBgRef.current.appendChild(svg);

                // GSAPアニメーション
                // 最奥の円のゆっくりした呼吸
                gsap.to(bgCircle0, {
                    scale: 1.1,
                    duration: 12,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    transformOrigin: "50% 50%"
                });

                // 背景円1の呼吸アニメーション
                gsap.to(bgCircle1, {
                    scale: 1.2,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    transformOrigin: "50% 50%"
                });

                // 背景円2の呼吸アニメーション
                gsap.to(bgCircle2, {
                    scale: 1.15,
                    duration: 10,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    transformOrigin: "50% 50%"
                });

                // 円弧1の回転アニメーション（時計回り、ゆっくり）
                gsap.to(rotatingArc1, {
                    rotation: 360,
                    duration: 50,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%"
                });

                // 円弧2の回転アニメーション（反時計回り、中速）
                gsap.to(rotatingArc2, {
                    rotation: -360,
                    duration: 35,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%"
                });

                // 円弧3の回転アニメーション（時計回り、速い）
                gsap.to(rotatingArc3, {
                    rotation: 360,
                    duration: 25,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%"
                });
            }
        };

        createBackgroundAnimation();

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
            {/* Hero Section - MASHTAKE Style */}
            <section className="main-visual">
                <div className="text-container">
                    <h1 className="hero-main-catch">Be what's possible.</h1>
                    <p className="hero-sub-catch">常識を超えた先に、答えがある。</p>
                    <div className="hero-vision-mission">
                        <span className="vision-text">Vision</span>
                        <span className="divider-line"></span>
                        <span className="mission-text">Mission</span>
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
                        <h4 className="section-subtitle">
                            5年後の当たり前を、今から始める。<br />
                            AIネイティブな組織と人材を育てます。
                        </h4>
                    </div>
                    <div className="services-grid">
                        <div className="service-card ai-education-card">
                            <h3>AI Education & Training</h3>
                            <h4>AI教育・研修サービス</h4>
                            <p>
                                企業向けAI研修とAi-BOWコミュニティ運営。<br />
                                実践的なカリキュラムで、AI人材を育成し、組織と個人の成長を支援します。
                            </p>
                        </div>
                        <div className="service-card development-card">
                            <h3>Development & Implementation</h3>
                            <h4>開発・実装サービス</h4>
                            <p>
                                AIシステム開発、WEBシステム構築、ブロックチェーン実装まで。<br />
                                最新技術を活用し、ビジネス課題を解決するシステムを提供します。
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
                            <h3>VISION</h3>
                            <h4 className="vision-title">AIと共に、人がもっと人らしくなれる世界へ</h4>
                            <div className="vision-description">
                                <p>効率化できることは、AIに任せる。</p>
                                <p>人は、人にしかできないことに集中する。</p>
                                <p>温かさ、創造性、つながり。</p>
                                <p>そんな本質的な価値が中心の社会へ。</p>
                            </div>
                        </div>
                        <div className="mission-card">
                            <h3>MISSION</h3>
                            <h4 className="mission-title">AI時代の人間力を、共に創る。</h4>
                            <div className="mission-description">
                                <p>教育で恐れを自信に変え、</p>
                                <p>開発で作業を創造に変え、</p>
                                <p>コミュニティで個人を仲間につなげる。</p>
                                <p className="mission-conclusion">AIとの共存で生まれる新しい時間を、<br />人間らしさの追求に使える社会を実現します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                {/* Header section with 2-column layout */}
                <div className="container">
                    <div className="projects-header">
                        <div className="projects-header-left">
                            <h2 className="section-title-en">Projects</h2>
                            <span className="section-title-jp">実績</span>
                        </div>
                        <div className="projects-header-right">
                            <h4 className="section-subtitle">
                                100を超えるWEB制作・デジタルマーケティングの実績。<br />
                                そこで培った知見を、AI時代に活かす。
                            </h4>
                            <p className="section-description">
                                WEB広告、サイト制作、システム開発で多くの企業を支援。<br />
                                今、その経験にAI技術を掛け合わせ、<br />
                                新しい価値を生み出しています。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured project - full width */}
                <div className="featured-project" onClick={handleFeaturedClick}>
                    <div className="featured-project-image">
                        <img src={featuredProject.image} alt={featuredProject.title} />
                        <div className="featured-project-overlay">
                            <div className="featured-project-content">
                                <h3 className="featured-project-title">
                                    {featuredProject.title.replace(/\n/g, ' ')}
                                </h3>
                                <p className="featured-project-description">
                                    {featuredProject.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < featuredProject.description.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                            <div className="featured-project-tag">
                                {featuredProject.tag}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project cards slider */}
                <div className="projects-slider-wrapper">
                    <div className="projects-slider" ref={sliderRef}>
                        {projectsData.map((project, index) => (
                            <div 
                                key={project.id} 
                                className={`project-card ${featuredProject.id === project.id ? 'active' : ''}`}
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className="project-card-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-card-content">
                                    <p className="project-card-description">
                                        {project.title.split('\n').map((line, lineIndex) => (
                                            <React.Fragment key={lineIndex}>
                                                {line}
                                                {lineIndex < project.title.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    {project.description && (
                                        <div className="project-card-subtitle">
                                            {project.description.split('\n').map((line, lineIndex) => (
                                                <React.Fragment key={lineIndex}>
                                                    {line}
                                                    {lineIndex < project.description.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                    <div className="project-card-logos">
                                        <img src="/resources/images/mashtake-logo.png" alt="MASHTAKE" className="mashtake-logo" />
                                        {project.id === 'namco' && (
                                            <img src="/resources/images/namco.png" alt="Bandai Namco Research" className="partner-logo" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                    
                <div className="container">
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
                        <h2 className="section-title-en">Our Clients — MASH Test</h2>
                        <span className="section-title-jp">クライアント企業</span>
                        <p className="section-subtitle">
                            MASHと共に歩んできた企業を紹介します。
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

