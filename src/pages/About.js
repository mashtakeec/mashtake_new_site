import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <h1>私たちについて</h1>
        <p>Who We Are</p>
      </section>
      
      <section className="about-content">
        <div className="section-inner">
          <h2>ACESについて</h2>
          <p>
            ACESは、アルゴリズムを中心とした事業開発を行うAIカンパニーです。
            最先端の技術を活用し、人々の働き方に革新をもたらすソリューションを提供しています。
          </p>
          
          <div className="company-values">
            <div className="value-item">
              <h3>ビジョン</h3>
              <p>アルゴリズムで、人の働き方に余白をつくる。</p>
            </div>
            <div className="value-item">
              <h3>ミッション</h3>
              <p>テクノロジーの力で、より良い社会を実現する。</p>
            </div>
          </div>
          
          <div className="company-info">
            <h3>会社概要</h3>
            <dl>
              <dt>会社名</dt>
              <dd>ACES株式会社</dd>
              <dt>設立</dt>
              <dd>2015年</dd>
              <dt>所在地</dt>
              <dd>東京都</dd>
              <dt>事業内容</dt>
              <dd>AI・アルゴリズム開発、DXコンサルティング</dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;