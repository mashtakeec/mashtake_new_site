import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="news-page">
      <section className="page-hero">
        <h1>ニュース</h1>
        <p>Latest News</p>
      </section>
      
      <section className="news-content">
        <div className="section-inner">
          <h2>最新ニュース</h2>
          <p>
            ACESの最新情報をお届けします。新サービスのリリース、
            業界動向、イベント参加情報などをご覧いただけます。
          </p>
          
          <div className="news-filters">
            <button className="filter-btn active">すべて</button>
            <button className="filter-btn">お知らせ</button>
            <button className="filter-btn">プレスリリース</button>
            <button className="filter-btn">イベント</button>
            <button className="filter-btn">メディア掲載</button>
          </div>
          
          <div className="news-list">
            <article className="news-article featured">
              <time className="news-date">2024.08.25</time>
              <div className="news-category press">プレスリリース</div>
              <h3>新AI画像解析サービス「ACES Vision Pro」をリリース</h3>
              <p>
                製造業向けの次世代AI画像解析サービス「ACES Vision Pro」の提供を開始いたします。
                従来比50%の精度向上を実現し、リアルタイム品質検査が可能になりました。
              </p>
              <div className="news-tags">
                <span className="tag">AI</span>
                <span className="tag">画像解析</span>
                <span className="tag">製造業</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.20</time>
              <div className="news-category event">イベント</div>
              <h3>AI EXPO 2024に出展決定</h3>
              <p>
                9月15日-17日に開催されるAI EXPO 2024への出展が決定いたしました。
                最新のAIソリューションをデモンストレーションいたします。
              </p>
              <div className="news-tags">
                <span className="tag">展示会</span>
                <span className="tag">デモ</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.08.15</time>
              <div className="news-category media">メディア掲載</div>
              <h3>日経新聞にCEOインタビューが掲載されました</h3>
              <p>
                日本経済新聞の「AI企業の未来戦略」特集にて、弊社CEOのインタビュー記事が
                掲載されました。AIの民主化についての取り組みをご紹介しています。
              </p>
              <div className="news-tags">
                <span className="tag">インタビュー</span>
                <span className="tag">日経新聞</span>
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
              <h3>大手小売チェーンとの業務提携について</h3>
              <p>
                全国展開する大手小売チェーンA社との業務提携契約を締結いたします。
                需要予測AIシステムの導入により、売上向上と在庫最適化を支援いたします。
              </p>
              <div className="news-tags">
                <span className="tag">業務提携</span>
                <span className="tag">小売</span>
                <span className="tag">需要予測</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.30</time>
              <div className="news-category event">イベント</div>
              <h3>「AIビジネス活用セミナー」開催のお知らせ</h3>
              <p>
                9月5日（木）にオンラインセミナー「中小企業のためのAIビジネス活用」を開催いたします。
                参加費無料、先着100名様限定となっております。
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
              <h3>IT専門誌「Tech Innovation」に技術記事を寄稿</h3>
              <p>
                弊社のデータサイエンティストが「機械学習モデルの運用最適化」について
                技術記事を寄稿いたしました。実践的なMLOpsの知見を紹介しています。
              </p>
              <div className="news-tags">
                <span className="tag">技術記事</span>
                <span className="tag">MLOps</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.20</time>
              <div className="news-category announcement">お知らせ</div>
              <h3>新オフィス移転のお知らせ</h3>
              <p>
                業務拡大に伴い、8月1日より新オフィスへ移転いたします。
                より快適な環境でお客様へのサービス向上に努めてまいります。
              </p>
              <div className="news-tags">
                <span className="tag">移転</span>
                <span className="tag">オフィス</span>
              </div>
            </article>
            
            <article className="news-article">
              <time className="news-date">2024.07.15</time>
              <div className="news-category press">プレスリリース</div>
              <h3>Series Bラウンドで10億円の資金調達を完了</h3>
              <p>
                成長加速のため、Series Bラウンドにて10億円の資金調達を完了いたしました。
                R&D投資とエンジニア採用を強化し、事業拡大を目指します。
              </p>
              <div className="news-tags">
                <span className="tag">資金調達</span>
                <span className="tag">Series B</span>
                <span className="tag">採用</span>
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
        <div className="section-inner">
          <h2>ニュースレター登録</h2>
          <p>最新のニュースや技術情報をメールでお届けします</p>
          <div className="newsletter-form">
            <input type="email" placeholder="メールアドレスを入力" />
            <button className="subscribe-btn">登録</button>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="section-inner">
          <h2>お問い合わせ</h2>
          <p>取材・広報に関するお問い合わせは、こちらからご連絡ください。</p>
          <Link to="/contact" className="cta-button">お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default News;