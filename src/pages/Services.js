import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Services animation
    gsap.fromTo(servicesRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: "power2.out" }
    );

    // Handle anchor links
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">サービス紹介</h1>
            <p className="hero-subtitle">Our Services</p>
            <div className="hero-description">
              <p>AI・デジタルで、ビジネスを変革する。</p>
              <p>MASHTAKEは、AI技術とWEB技術を融合した包括的なデジタルソリューションで、お客様のビジネス成長を支援します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <div className="services-content" ref={servicesRef}>
        
        {/* AI Services Section */}
        <section id="ai-services" className="service-category ai-services">
          <div className="container">
            <div className="category-header">
              <h2 className="category-title">AIソリューション</h2>
              <p className="category-description">最先端のAI技術で企業の競争力を向上させます</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card featured">
                <div className="service-image">
                  <img src="/resources/images/services/ai-training.jpg" alt="企業向けAI研修・活用サポート" />
                </div>
                <div className="service-content">
                  <h3>企業向けAI研修・活用サポート</h3>
                <p>AI技術の導入から活用まで、企業の AI 変革を包括的にサポートします。</p>
                <ul className="service-features">
                  <li>AI基礎研修プログラム</li>
                  <li>業界別AI活用事例紹介</li>
                  <li>AI導入コンサルティング</li>
                  <li>継続的な技術サポート</li>
                </ul>
                  <div className="service-benefits">
                    <span className="benefit-tag">効率化</span>
                    <span className="benefit-tag">競争力向上</span>
                    <span className="benefit-tag">人材育成</span>
                  </div>
                </div>
              </div>

              <div className="service-card featured">
                <div className="service-image">
                  <img src="/resources/images/services/ai-server.jpg" alt="企業向けAIサーバー販売" />
                </div>
                <div className="service-content">
                  <h3>企業向け「AIサーバー」販売</h3>
                <p>高性能なAI専用サーバーで、企業のAI処理能力を大幅に向上させます。</p>
                <ul className="service-features">
                  <li>GPU搭載高性能サーバー</li>
                  <li>カスタム構成対応</li>
                  <li>設置・設定サポート</li>
                  <li>保守・メンテナンス</li>
                </ul>
                  <div className="service-benefits">
                    <span className="benefit-tag">高性能</span>
                    <span className="benefit-tag">カスタム対応</span>
                    <span className="benefit-tag">安心サポート</span>
                  </div>
                </div>
              </div>

              <div className="service-card featured">
                <div className="service-image">
                  <img src="/resources/images/services/ai-development.jpg" alt="AIシステム開発" />
                </div>
                <div className="service-content">
                  <h3>AIシステム開発</h3>
                <p>お客様の具体的な課題に対して、カスタムAIシステムを開発・提供します。</p>
                <ul className="service-features">
                  <li>機械学習モデル開発</li>
                  <li>自然言語処理システム</li>
                  <li>画像認識・解析システム</li>
                  <li>予測分析システム</li>
                </ul>
                  <div className="service-benefits">
                    <span className="benefit-tag">オーダーメイド</span>
                    <span className="benefit-tag">最新技術</span>
                    <span className="benefit-tag">実用性重視</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEB Services Section */}
        <section id="web-services" className="service-category web-services">
          <div className="container">
            <div className="category-header">
              <h2 className="category-title">デジタルマーケティング</h2>
              <p className="category-description">デジタルマーケティングとWEBシステムでビジネスを加速</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src="/resources/images/services/web-advertising.jpg" alt="WEB広告の企画・製作" />
                </div>
                <div className="service-content">
                  <h3>WEB広告の企画・製作</h3>
                <p>効果的なデジタル広告で、ターゲット顧客にリーチします。</p>
                  <ul className="service-features">
                    <li>広告戦略立案</li>
                    <li>クリエイティブ制作</li>
                    <li>運用・最適化</li>
                    <li>効果測定・分析</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/resources/images/services/web-development.jpg" alt="WEBシステムの企画・製作" />
                </div>
                <div className="service-content">
                  <h3>WEBシステムの企画・製作</h3>
                <p>ビジネスニーズに合わせたWEBシステムを企画・開発します。</p>
                  <ul className="service-features">
                    <li>要件定義・設計</li>
                    <li>フロントエンド開発</li>
                    <li>バックエンド開発</li>
                    <li>システム運用・保守</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section id="other-services" className="service-category other-services">
          <div className="container">
            <div className="category-header">
              <h2 className="category-title">その他のサービス</h2>
              <p className="category-description">多様な分野で社会貢献を目指します</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src="/resources/images/services/blockchain.jpg" alt="ブロックチェーン関連システム開発" />
                </div>
                <div className="service-content">
                  <h3>ブロックチェーン関連システム開発</h3>
                <p>分散型技術を活用した次世代システムを開発します。</p>
                  <ul className="service-features">
                    <li>スマートコントラクト開発</li>
                    <li>DApps開発</li>
                    <li>NFTプラットフォーム構築</li>
                    <li>セキュリティ監査</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/resources/images/services/artist-support.jpg" alt="アーティスト支援" />
                </div>
                <div className="service-content">
                  <h3>アーティスト支援</h3>
                <p>クリエイターの活動をデジタル技術でサポートします。</p>
                  <ul className="service-features">
                    <li>作品デジタル化支援</li>
                    <li>オンライン販売プラットフォーム</li>
                    <li>プロモーション支援</li>
                    <li>著作権管理システム</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img src="/resources/images/services/agriculture-support.jpg" alt="農業支援" />
                </div>
                <div className="service-content">
                  <h3>農業支援</h3>
                <p>農業分野のデジタル化を通じて持続可能な農業を支援します。</p>
                  <ul className="service-features">
                    <li>スマート農業システム</li>
                    <li>作物管理アプリ</li>
                    <li>流通プラットフォーム</li>
                    <li>データ分析・予測</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="service-process-section">
          <div className="container">
            <div className="process-header">
              <h2 className="section-title">サービス提供プロセス</h2>
              <p className="section-description">お客様のニーズに合わせた最適なソリューションを提供するための4つのステップ</p>
            </div>
            
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>ヒアリング・分析</h4>
                  <p>お客様の現状課題とご要望を詳しくお聞きし、最適なソリューションを検討します。</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>提案・設計</h4>
                  <p>分析結果を基に、具体的なソリューションプランを提案・設計いたします。</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>開発・実装</h4>
                  <p>専門チームが最新技術を活用して、高品質なシステムを開発・実装します。</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>運用・サポート</h4>
                  <p>導入後も継続的な運用サポートと改善提案で、長期的な成功を支援します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>サービスに関するお問い合わせ</h2>
              <p>AI・デジタル技術でビジネスを変革しませんか？<br/>お客様のニーズに合わせた最適なソリューションをご提案いたします。</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">お問い合わせ</Link>
                <Link to="/about" className="cta-button secondary">会社概要</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;