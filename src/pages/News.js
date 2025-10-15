import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const News = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const newsListRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );

    // News articles animation
    gsap.fromTo(newsListRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="news-page">
      <section className="news-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">ニュース</h1>
            <p className="hero-subtitle">Latest News</p>
            <div className="hero-description">
              <p>MASHTAKEの最新情報をお届けします。</p>
              <p>新サービスのリリース、業界動向、イベント参加情報などをご覧いただけます。</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="news-content">
        <div className="container" ref={contentRef}>
          <h2>最新ニュース</h2>
          <p>
            MASHTAKEの最新情報をお届けします。新サービスのリリース、
            業界動向、イベント参加情報などをご覧いただけます。
          </p>
          
          <div className="news-filters">
            <button className="filter-btn active">すべて</button>
            <button className="filter-btn">お知らせ</button>
            <button className="filter-btn">プレスリリース</button>
            <button className="filter-btn">イベント</button>
            <button className="filter-btn">メディア掲載</button>
          </div>
          
          <div className="news-list" ref={newsListRef}>
            <article className="news-article featured">
              <div className="featured-content">
                <time className="news-date">2024.08.25</time>
                <div className="news-category press">プレスリリース</div>
                <h3>AI研修プログラム「MASHTAKE AI Academy」を開始</h3>
                <p>
                  企業向けAI研修プログラム「MASHTAKE AI Academy」の提供を開始いたしました。
                  実務に直結するAIスキルを短期間で習得できるカリキュラムを提供します。
                  中小企業から大企業まで、幅広い規模の企業様にご利用いただけるプログラムとなっております。
                </p>
                <div className="news-tags">
                  <span className="tag">AI研修</span>
                  <span className="tag">教育</span>
                  <span className="tag">スキルアップ</span>
                </div>
              </div>
              <div className="featured-image">
                <img src="/resources/images/services/ai-training.svg" alt="MASHTAKE AI Academy" />
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.20</time>
              <div className="news-category event">イベント</div>
              <h3>Digital Marketing EXPO 2024に出展決定</h3>
              <p>
                10月15日-17日に開催されるDigital Marketing EXPO 2024への出展が決定いたしました。
                AIとWEB技術を融合したデジタルマーケティングソリューションを展示いたします。
              </p>
              <div className="news-tags">
                <span className="tag">デジタルマーケティング</span>
                <span className="tag">展示会</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.15</time>
              <div className="news-category media">メディア掲載</div>
              <h3>日経新聞に代表取締役インタビューが掲載されました</h3>
              <p>
                日本経済新聞の「中小企業のDX推進」特集にて、弊社代表取締役のインタビュー記事が
                掲載されました。AIとWEB技術を活用した中小企業支援について語っています。
              </p>
              <div className="news-tags">
                <span className="tag">インタビュー</span>
                <span className="tag">DX推進</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.10</time>
              <div className="news-category announcement">お知らせ</div>
              <h3>夏季休業のお知らせ</h3>
              <p>
                誠に勝手ながら、8月13日（火）～8月16日（金）まで夏季休業とさせていただきます。
                お問い合わせの返信は8月19日（月）以降となります。
              </p>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.05</time>
              <div className="news-category press">プレスリリース</div>
              <h3>大手製造業とのAIシステム開発業務提携を締結</h3>
              <p>
                大手製造業とのAIシステム開発に関する業務提携契約を締結いたしました。
                生産性向上と品質管理の高度化を目指したカスタムAIソリューションを提供します。
              </p>
              <div className="news-tags">
                <span className="tag">業務提携</span>
                <span className="tag">製造業</span>
                <span className="tag">AIシステム</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.30</time>
              <div className="news-category event">イベント</div>
              <h3>「AIシステム開発セミナー」開催のお知らせ</h3>
              <p>
                11月10日（日）にオンラインセミナー「中小企業のためのAIシステム開発入門」を開催いたします。
                参加費無料、先着150名様限定です。
              </p>
              <div className="news-tags">
                <span className="tag">セミナー</span>
                <span className="tag">オンライン</span>
                <span className="tag">無料</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.25</time>
              <div className="news-category media">メディア掲載</div>
              <h3>Web技術専門誌「Digital Trends」に技術記事を寄稿</h3>
              <p>
                弊社のエンジニアが「AIとWeb技術の融合によるデジタルマーケティング革新」について
                技術記事を寄稿いたしました。実践的なデジタルソリューションの知見を紹介しています。
              </p>
              <div className="news-tags">
                <span className="tag">技術記事</span>
                <span className="tag">デジタルマーケティング</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.20</time>
              <div className="news-category announcement">お知らせ</div>
              <h3>新サービス「MASHTAKE AI Server」の提供開始</h3>
              <p>
                企業向け高性能AIサーバー「MASHTAKE AI Server」の提供を開始いたしました。
                GPU搭載で高速AI処理を実現し、カスタム構成にも対応しています。
              </p>
              <div className="news-tags">
                <span className="tag">AIサーバー</span>
                <span className="tag">GPU</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.15</time>
              <div className="news-category press">プレスリリース</div>
              <h3>ブロックチェーン関連サービスの提供開始</h3>
              <p>
                ブロックチェーン技術を活用したシステム開発サービスの提供を開始いたしました。
                NFTプラットフォームやDApps開発など、次世代Webサービスを提供します。
              </p>
              <div className="news-tags">
                <span className="tag">ブロックチェーン</span>
                <span className="tag">NFT</span>
                <span className="tag">DApps</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.10</time>
              <div className="news-category announcement">お知らせ</div>
              <h3>プライバシーポリシー改定のお知らせ</h3>
              <p>
                個人情報保護法の改正に伴い、プライバシーポリシーを改定いたします。
                8月1日より新しいポリシーが適用となります。
              </p>
            </article>
          </div>
          
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">次へ</button>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="container">
          <h2>ニュースレター登録</h2>
          <p>最新のニュースや技術情報をメールでお届けします</p>
          <div className="newsletter-form">
            <input type="email" placeholder="メールアドレスを入力" />
            <button className="subscribe-btn">登録</button>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>お問い合わせ</h2>
          <p>取材・広報に関するお問い合わせは、こちらからご連絡ください。</p>
          <Link to="/contact" className="cta-button">お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default News;