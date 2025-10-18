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
                                <span className="highlight-text">MASHTAKEは、</span><br />
                                <span className="highlight-text">AIネイティブな未来を創る会社です</span>
                            </p>
                        </div>
                        
                        <div className="who-we-are-description">
                            <p>
                                その未来では、AIは特別なものではなく、<br />
                                誰もが当たり前に使いこなすパートナー。
                            </p>
                            <p>
                                私たちは、その未来を今、ここから始めています。
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