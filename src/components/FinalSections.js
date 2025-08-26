import React from 'react';
import { Link } from 'react-router-dom';

const FinalSections = () => {
    return (
        <section className="final-sections">
            <div className="container">
                <div className="final-sections-grid">
                    {/* Next DX Partner Service */}
                    <div className="final-section next-dx-section orange-border">
                        <div className="section-label">Next</div>
                        <div className="section-content">
                            <h3 className="section-title-en">DX Partner Service</h3>
                            <p className="section-title-jp">DXパートナーサービス</p>
                        </div>
                        <div className="section-decoration">
                            <div className="geometric-squares">
                                <div className="square square-1"></div>
                                <div className="square square-2"></div>
                                <div className="square square-3"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Downloads */}
                    <div className="final-section downloads-section purple-border">
                        <div className="section-content">
                            <h3 className="section-title-en">Downloads</h3>
                            <p className="section-title-jp">資料ダウンロード</p>
                            <p className="section-description">
                                会社紹介や実績、技術に関する情報など、各種資料のダウンロードはこちらからどうぞ。
                            </p>
                        </div>
                    </div>
                    
                    {/* Contact */}
                    <div className="final-section contact-section blue-border">
                        <div className="section-content">
                            <h3 className="section-title-en">Contact</h3>
                            <p className="section-title-jp">お問い合わせ</p>
                            <p className="section-description">
                                ご協業のご相談、採用、取材に関するお問い合わせなど、お気軽にご連絡ください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalSections;