import React from 'react';
import { Link } from 'react-router-dom';

const Technologies = () => {
    return (
        <section className="technologies">
            <div className="container">
                <div className="technologies-header">
                    <div className="section-headers">
                        <h2 className="section-title-en">Technologies</h2>
                        <h3 className="section-title-jp">技術</h3>
                    </div>
                    
                    <div className="technologies-intro">
                        <h3 className="intro-title">
                            最先端アルゴリズムを独自モジュール化し、<br />
                            提供しています。
                        </h3>
                        <p className="intro-description">
                            アカデミアをバックグラウンドに持つ優秀なエンジニアが最先端アルゴリズムを独自のモジュールにして提供することで、実現場への技術検証・適用を高速で実現しています。
                        </p>
                    </div>
                </div>

                <div className="technologies-cards">
                    <div className="tech-card communication-card">
                        <div className="tech-card-bg"></div>
                        <div className="tech-card-content">
                            <div className="tech-number orange-border">01</div>
                            <div className="tech-titles">
                                <h4 className="tech-title-jp">コミュニケーションの科学</h4>
                                <p className="tech-title-en">Communication Intelligence</p>
                            </div>
                        </div>
                    </div>

                    <div className="tech-card human-digital-card">
                        <div className="tech-card-bg"></div>
                        <div className="tech-card-content">
                            <div className="tech-number purple-border">02</div>
                            <div className="tech-titles">
                                <h4 className="tech-title-jp">ヒトの行動・属性のデジタル再現</h4>
                                <p className="tech-title-en">Human Digital Twin</p>
                            </div>
                        </div>
                    </div>

                    <div className="tech-card mobility-card">
                        <div className="tech-card-bg"></div>
                        <div className="tech-card-content">
                            <div className="tech-number green-border">03</div>
                            <div className="tech-titles">
                                <h4 className="tech-title-jp">モビリティデータの分析</h4>
                                <p className="tech-title-en">Mobility Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="technologies-cta">
                    <Link to="/technologies" className="cta-button purple-cta">
                        すべての技術を見る
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Technologies;