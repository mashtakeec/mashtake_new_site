import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Content animation
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">会社概要</h1>
            <p className="hero-subtitle">About MASHTAKE</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content" ref={contentRef}>
        
        {/* Three Main Sections */}
        <section className="about-main-sections">
          <div className="container">
            <div className="main-sections-grid">
              
              {/* Philosophy Section */}
              <div className="main-section philosophy-section">
                <div className="section-header">
                  <h3 className="section-label">Philosophy</h3>
                  <h2 className="section-title">企業理念</h2>
                </div>
                <div className="section-content">
                  <p className="section-description">
                    MASHTAKEは、AI技術とWEB技術を融合したデジタルソリューションで、
                    お客様とともに新たなビジネスを創造し、一人ひとりの豊かさを向上していきます。
                  </p>
                  <div className="section-link">
                    <span>企業理念を見る</span>
                  </div>
                </div>
                <div className="section-image">
                       <img src="/resources/images/mashtake-logo.png" alt="企業理念" />
                </div>
              </div>

              {/* Message Section */}
              <div className="main-section message-section">
                <div className="section-header">
                  <h3 className="section-label">Message</h3>
                  <h2 className="section-title">代表のご挨拶</h2>
                </div>
                <div className="section-content">
                  <p className="section-description">
                    MASHTAKEはAI導入が進む海外諸国に日本の中小企業が遅れを取ることなく、
                    国内企業の生産性向上をAI技術×WEB技術でサポートいたします。
                  </p>
                  <div className="section-link">
                    <span>代表のご挨拶を見る</span>
                  </div>
                </div>
                <div className="section-image">
                  <img src="/resources/images/mashtake-logo.png" alt="代表取締役" />
                </div>
              </div>

              {/* Company Section */}
              <div className="main-section company-section">
                <div className="section-header">
                  <h3 className="section-label">Company</h3>
                  <h2 className="section-title">会社詳細</h2>
                </div>
                <div className="section-content">
                  <p className="section-description">
                    変化するビジネス環境に適応し、競争力を維持・向上させるために、
                    AI技術とWEB技術を駆使した独自のプログラムを提供。企業の成長と技術的進歩を支援します。
                  </p>
                  <div className="section-link">
                    <span>会社詳細を見る</span>
                  </div>
                </div>
                <div className="section-image">
                  <img src="/resources/images/mashtake-logo.png" alt="会社詳細" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hero Message Section */}
        <section className="hero-message-section">
          <div className="container">
            <div className="hero-message-content">
              <h2 className="hero-message-title">AI・デジタルで、共に明日を描く。</h2>
              <div className="hero-message-text">
                <p>私たちMASHTAKEは、</p>
                <p>AI導入が進む海外諸国に日本の中小企業が遅れを取ることなく、</p>
                <p>国内企業の生産性向上をAI技術×WEB技術でサポートいたします。</p>
              </div>
              <div className="hero-message-buttons">
                <a href="/contact" className="hero-btn primary">
                  <span className="btn-title">お問い合わせ</span>
                  <span className="btn-description">事業規模やニーズをお伺いし、最適な導入のお手伝いを専門チームがいたします。</span>
                </a>
                <a href="/services" className="hero-btn secondary">
                  <span className="btn-title">サービス紹介</span>
                  <span className="btn-description">MASHTAKEのサービスが分かる詳細情報。プロダクトの詳細や導入実績なども。</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="company-info-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-content">
                <h2>会社概要</h2>
                <div className="company-details">
                  <div className="detail-item">
                    <dt>会社名</dt>
                    <dd>MASHTAKE株式会社</dd>
                  </div>
                  <div className="detail-item">
                    <dt>設立</dt>
                    <dd>2016年2月24日</dd>
                  </div>
                  <div className="detail-item">
                    <dt>所在地</dt>
                    <dd>〒542-0081 大阪府大阪市中央区南船場2丁目11-20 GATO三休橋ビル8階東</dd>
                  </div>
                  <div className="detail-item">
                    <dt>事業内容</dt>
                    <dd>企業向けAI研修・活用サポート、企業向け「AIサーバー」販売、AIシステム開発、WEB広告の企画及び立案並びに製作、WEBシステムの企画立案並びに製作、ブロックチェーン関連システム開発、アーティスト支援、農業支援</dd>
                  </div>
                  <div className="detail-item">
                    <dt>代表取締役</dt>
                    <dd>松村肇</dd>
                  </div>
                  <div className="detail-item">
                    <dt>資本金</dt>
                    <dd>3,690,000円</dd>
                  </div>
                  <div className="detail-item">
                    <dt>電話番号</dt>
                    <dd>06-4708-8655</dd>
                  </div>
                </div>
              </div>
              
              <div className="achievements">
                <h3>実績・認定</h3>
                <ul className="achievement-list">
                  <li>
                    <span className="achievement-year">2023</span>
                    <span className="achievement-title">AI技術革新賞受賞</span>
                  </li>
                  <li>
                    <span className="achievement-year">2022</span>
                    <span className="achievement-title">DX推進企業認定</span>
                  </li>
                  <li>
                    <span className="achievement-year">2021</span>
                    <span className="achievement-title">ISO27001認証取得</span>
                  </li>
                  <li>
                    <span className="achievement-year">2020</span>
                    <span className="achievement-title">プライバシーマーク取得</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;