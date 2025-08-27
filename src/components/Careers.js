import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <section className="careers">
            <div className="careers-background">
                <div className="careers-overlay"></div>
                <div className="container">
                    <div className="careers-content">
                        <div className="section-headers">
                            <h2 className="section-title-en">Careers</h2>
                            <span className="section-title-jp">採用情報</span>
                        </div>
                        
                        <div className="careers-message">
                            <h3 className="careers-catchphrase">
                                私たちと一緒に働きませんか？
                            </h3>
                            <p className="careers-description">
                                ACESでは、一緒に働くプロフェッショナルな仲間を募集しています。アルゴリズムを用いて人の働き方に「余白」をつくり、シンプルな社会をつくっていきませんか。
                            </p>
                        </div>
                        
                        <div className="careers-cta-buttons">
                            <Link to="/members" className="cta-button orange-cta">
                                ACESのメンバーを見る
                            </Link>
                            <Link to="/careers" className="cta-button purple-cta external-link">
                                <span>採用情報を見る</span>
                                <div className="external-link-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M10 2H14V6M14 2L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;