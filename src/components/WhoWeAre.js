import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <section className="who-we-are">
            <div className="container">
                <div className="who-we-are-content">
                    <div className="who-we-are-text">
                        <div className="section-headers">
                            <h2 className="section-title-en">Who We Are</h2>
                            <span className="section-title-jp">私たちについて</span>
                        </div>
                        
                        <div className="who-we-are-main-text">
                            <p className="main-statement">
                                <span className="highlight-text">ACESは、アルゴリズムを用いて</span><br />
                                <span className="highlight-text">事業開発を行うAI事業会社です。</span>
                            </p>
                        </div>
                        
                        <div className="who-we-are-description">
                            <p>
                                AIアルゴリズムを用いて属人化しているヒトの知見や業務をデジタル化する「AIトランスフォーメーション事業」を通して、「シンプルな社会」の実現を目指しています。
                            </p>
                        </div>
                        
                        <div className="who-we-are-cta">
                            <Link to="/about" className="cta-button orange-cta">
                                私たちについてもっと知る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;