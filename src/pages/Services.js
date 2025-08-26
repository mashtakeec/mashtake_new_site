import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero">
        <h1>事業紹介</h1>
        <p>Our Services</p>
      </section>
      
      <section className="services-content">
        <div className="section-inner">
          <h2>サービス一覧</h2>
          <p>
            ACESでは、AI・アルゴリズム技術を活用した幅広いサービスを提供しています。
            お客様のビジネス課題に最適なソリューションをご提案いたします。
          </p>
          
          <div className="services-grid">
            <div className="service-card detailed">
              <div className="service-icon">🤖</div>
              <h3>DXパートナーサービス</h3>
              <p>
                企業のデジタルトランスフォーメーションを包括的に支援します。
                現状分析から戦略策定、実装まで一貫してサポートいたします。
              </p>
              <ul>
                <li>DX戦略コンサルティング</li>
                <li>業務プロセス最適化</li>
                <li>システム導入支援</li>
                <li>従業員研修・教育</li>
              </ul>
            </div>
            
            <div className="service-card detailed">
              <div className="service-icon">🧠</div>
              <h3>AIソフトウェアサービス</h3>
              <p>
                最先端のAI技術を活用したカスタムソフトウェアの開発・提供を行います。
                機械学習からディープラーニングまで幅広く対応いたします。
              </p>
              <ul>
                <li>予測分析システム</li>
                <li>自然言語処理</li>
                <li>画像認識・解析</li>
                <li>推薦システム</li>
              </ul>
            </div>
            
            <div className="service-card detailed">
              <div className="service-icon">📊</div>
              <h3>データ分析サービス</h3>
              <p>
                ビッグデータの収集・分析・活用を通じて、データドリブンな経営をサポートします。
                可視化から予測まで包括的に対応いたします。
              </p>
              <ul>
                <li>データ収集・整備</li>
                <li>統計分析・可視化</li>
                <li>予測モデリング</li>
                <li>レポーティング</li>
              </ul>
            </div>
            
            <div className="service-card detailed">
              <div className="service-icon">⚙️</div>
              <h3>アルゴリズム開発</h3>
              <p>
                お客様の具体的な課題に対して、最適化されたアルゴリズムを開発します。
                効率化から自動化まで、幅広いニーズにお応えします。
              </p>
              <ul>
                <li>最適化アルゴリズム</li>
                <li>スケジューリング</li>
                <li>ルーティング最適化</li>
                <li>自動化システム</li>
              </ul>
            </div>
          </div>
          
          <div className="service-process">
            <h3>サービス提供プロセス</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>ヒアリング</h4>
                  <p>お客様の課題やご要望を詳しくお聞きします</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>提案・設計</h4>
                  <p>最適なソリューションを提案・設計します</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>開発・実装</h4>
                  <p>専門チームが開発・実装を行います</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>運用・保守</h4>
                  <p>継続的な運用・保守サポートを提供します</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="section-inner">
          <h2>サービスに関するお問い合わせ</h2>
          <p>ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
          <Link to="/contact" className="cta-button">お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;