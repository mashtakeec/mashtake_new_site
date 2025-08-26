import React from 'react';
import { Link } from 'react-router-dom';

const Technologies = () => {
  return (
    <div className="technologies-page">
      <section className="page-hero">
        <h1>技術</h1>
        <p>Our Technologies</p>
      </section>
      
      <section className="technologies-content">
        <div className="section-inner">
          <h2>技術スタック</h2>
          <p>
            ACESでは、最新のAI・機械学習技術から実績のあるエンタープライズ技術まで、
            幅広い技術スタックを活用してソリューションを提供しています。
          </p>
          
          <div className="tech-categories">
            <div className="tech-category">
              <div className="category-icon">🧠</div>
              <h3>AI・機械学習</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>TensorFlow / PyTorch</h4>
                  <p>ディープラーニングフレームワークを使用した高度なAIモデル開発</p>
                </div>
                <div className="tech-item">
                  <h4>scikit-learn</h4>
                  <p>機械学習アルゴリズムの実装・評価・最適化</p>
                </div>
                <div className="tech-item">
                  <h4>OpenCV</h4>
                  <p>コンピュータビジョン・画像処理技術</p>
                </div>
                <div className="tech-item">
                  <h4>NLTK / spaCy</h4>
                  <p>自然言語処理・テキストマイニング</p>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <div className="category-icon">📊</div>
              <h3>データ分析・処理</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>Python</h4>
                  <p>データサイエンス・機械学習開発のメイン言語</p>
                </div>
                <div className="tech-item">
                  <h4>R</h4>
                  <p>統計解析・データ可視化</p>
                </div>
                <div className="tech-item">
                  <h4>Apache Spark</h4>
                  <p>大規模データ処理・分散コンピューティング</p>
                </div>
                <div className="tech-item">
                  <h4>Hadoop</h4>
                  <p>ビッグデータストレージ・処理基盤</p>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <div className="category-icon">☁️</div>
              <h3>クラウド・インフラ</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>AWS</h4>
                  <p>Amazon Web Services - SageMaker, EC2, S3, Lambda等</p>
                </div>
                <div className="tech-item">
                  <h4>Google Cloud Platform</h4>
                  <p>AI Platform, BigQuery, Cloud ML Engine等</p>
                </div>
                <div className="tech-item">
                  <h4>Microsoft Azure</h4>
                  <p>Azure ML, Cognitive Services等</p>
                </div>
                <div className="tech-item">
                  <h4>Docker / Kubernetes</h4>
                  <p>コンテナ技術・オーケストレーション</p>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <div className="category-icon">🗄️</div>
              <h3>データベース・ストレージ</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>PostgreSQL / MySQL</h4>
                  <p>リレーショナルデータベース管理</p>
                </div>
                <div className="tech-item">
                  <h4>MongoDB</h4>
                  <p>NoSQLドキュメントデータベース</p>
                </div>
                <div className="tech-item">
                  <h4>Redis</h4>
                  <p>インメモリデータストア・キャッシュ</p>
                </div>
                <div className="tech-item">
                  <h4>Elasticsearch</h4>
                  <p>検索・分析エンジン</p>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <div className="category-icon">🌐</div>
              <h3>Web開発・API</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>React / Vue.js</h4>
                  <p>モダンフロントエンド開発</p>
                </div>
                <div className="tech-item">
                  <h4>Node.js / Express</h4>
                  <p>サーバーサイドJavaScript</p>
                </div>
                <div className="tech-item">
                  <h4>FastAPI / Django</h4>
                  <p>Python Webフレームワーク</p>
                </div>
                <div className="tech-item">
                  <h4>GraphQL / REST API</h4>
                  <p>API設計・開発</p>
                </div>
              </div>
            </div>
            
            <div className="tech-category">
              <div className="category-icon">⚙️</div>
              <h3>最適化・アルゴリズム</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <h4>OR-Tools</h4>
                  <p>線形最適化・制約プログラミング</p>
                </div>
                <div className="tech-item">
                  <h4>CPLEX / Gurobi</h4>
                  <p>数理最適化ソルバー</p>
                </div>
                <div className="tech-item">
                  <h4>遺伝的アルゴリズム</h4>
                  <p>メタヒューリスティック最適化</p>
                </div>
                <div className="tech-item">
                  <h4>強化学習</h4>
                  <p>意思決定問題の自動化</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="methodology-section">
            <h3>開発手法・プロセス</h3>
            <div className="methodology-grid">
              <div className="method-card">
                <h4>アジャイル開発</h4>
                <p>柔軟で迅速な開発プロセスにより、お客様のフィードバックを即座に反映</p>
              </div>
              <div className="method-card">
                <h4>DevOps</h4>
                <p>継続的インテグレーション・デプロイメントによる品質向上</p>
              </div>
              <div className="method-card">
                <h4>MLOps</h4>
                <p>機械学習モデルのライフサイクル管理・運用自動化</p>
              </div>
              <div className="method-card">
                <h4>テスト駆動開発</h4>
                <p>高品質なコード・システムの継続的な保証</p>
              </div>
            </div>
          </div>
          
          <div className="certifications-section">
            <h3>技術認定・資格</h3>
            <div className="cert-grid">
              <div className="cert-item">AWS Certified Solutions Architect</div>
              <div className="cert-item">Google Cloud Professional ML Engineer</div>
              <div className="cert-item">Microsoft Azure AI Engineer</div>
              <div className="cert-item">TensorFlow Developer Certificate</div>
              <div className="cert-item">データサイエンティスト検定</div>
              <div className="cert-item">応用情報技術者</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="section-inner">
          <h2>技術に関するご相談</h2>
          <p>最新技術の活用方法や技術選定について、お気軽にご相談ください。</p>
          <Link to="/contact" className="cta-button">お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default Technologies;