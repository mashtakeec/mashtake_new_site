import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="page-hero">
        <h1>実績</h1>
        <p>Our Projects</p>
      </section>
      
      <section className="projects-content">
        <div className="section-inner">
          <h2>プロジェクト実績</h2>
          <p>
            ACESが手がけた主要なプロジェクトをご紹介いたします。
            様々な業界のお客様とともに、革新的なソリューションを創り上げてきました。
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-category">製造業</div>
              <h3>製造ライン最適化システム</h3>
              <p>
                大手製造企業の生産ラインにAI技術を導入し、生産効率を30%向上させました。
                機械学習による品質予測と最適化アルゴリズムを組み合わせたシステムです。
              </p>
              <div className="project-tags">
                <span className="tag">AI</span>
                <span className="tag">最適化</span>
                <span className="tag">IoT</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-category">金融</div>
              <h3>リスク分析プラットフォーム</h3>
              <p>
                金融機関向けのリスク分析システムを構築。膨大な取引データから
                リスクパターンを自動検出し、意思決定を支援します。
              </p>
              <div className="project-tags">
                <span className="tag">機械学習</span>
                <span className="tag">データ分析</span>
                <span className="tag">フィンテック</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-category">小売</div>
              <h3>需要予測・在庫最適化</h3>
              <p>
                小売チェーンの需要予測精度を大幅に改善。機械学習モデルにより
                在庫コストを20%削減し、売上機会損失を最小化しました。
              </p>
              <div className="project-tags">
                <span className="tag">予測分析</span>
                <span className="tag">在庫管理</span>
                <span className="tag">ビッグデータ</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-category">物流</div>
              <h3>配送ルート最適化</h3>
              <p>
                物流企業の配送ルートを最適化するシステムを開発。リアルタイムの
                交通状況と配送条件を考慮し、燃料コストを15%削減しました。
              </p>
              <div className="project-tags">
                <span className="tag">最適化</span>
                <span className="tag">ルーティング</span>
                <span className="tag">リアルタイム</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-category">ヘルスケア</div>
              <h3>医療画像診断支援</h3>
              <p>
                医療機関向けの画像診断支援システムを構築。ディープラーニングにより
                診断精度を向上させ、医師の業務負荷軽減に貢献しています。
              </p>
              <div className="project-tags">
                <span className="tag">ディープラーニング</span>
                <span className="tag">画像認識</span>
                <span className="tag">医療AI</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-category">エンターテイメント</div>
              <h3>コンテンツ推薦エンジン</h3>
              <p>
                動画配信プラットフォーム向けの推薦システムを開発。ユーザーの
                視聴履歴と嗜好を分析し、エンゲージメントを25%向上させました。
              </p>
              <div className="project-tags">
                <span className="tag">推薦システム</span>
                <span className="tag">パーソナライゼーション</span>
                <span className="tag">UI/UX</span>
              </div>
            </div>
          </div>
          
          <div className="clients-section">
            <h3>主要クライアント</h3>
            <div className="clients-grid">
              <div className="client-logo">大手製造企業A社</div>
              <div className="client-logo">金融機関B社</div>
              <div className="client-logo">小売チェーンC社</div>
              <div className="client-logo">物流企業D社</div>
              <div className="client-logo">医療法人E社</div>
              <div className="client-logo">IT企業F社</div>
            </div>
          </div>
          
          <div className="success-metrics">
            <h3>成果実績</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-number">50+</div>
                <div className="metric-label">プロジェクト数</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">95%</div>
                <div className="metric-label">顧客満足度</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">30%</div>
                <div className="metric-label">平均効率向上率</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">24mo</div>
                <div className="metric-label">平均ROI実現期間</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="section-inner">
          <h2>プロジェクトのご相談</h2>
          <p>お客様の課題解決に向けて、最適なソリューションをご提案いたします。</p>
          <Link to="/contact" className="cta-button">お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;