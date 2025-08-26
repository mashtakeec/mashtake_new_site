import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    const [activeFilter, setActiveFilter] = useState('すべて');
    
    const filterCategories = [
        { name: 'すべて', color: 'green' },
        { name: 'プレスリリース', color: 'orange' },
        { name: 'お知らせ', color: 'purple' },
        { name: '技術情報', color: 'green' },
        { name: 'メディア掲載', color: 'pink' },
        { name: 'オウンドメディア', color: 'purple' }
    ];

    const newsItems = [
        {
            id: 1,
            category: 'プレスリリース',
            date: '2025.05.14',
            title: '経産省経済産業政策局長及び内閣官房内閣審議官等を歴任した新原浩朗氏がACESの社外取締役に就任',
            borderColor: 'purple',
            backgroundColor: 'light-purple',
            hasImage: true,
            imageType: 'person'
        },
        {
            id: 2,
            category: 'プレスリリース', 
            date: '2025.04.23',
            title: 'ACESとYKK APが作業員の不安全な行動を検知し、重大事故ゼロに向けた協同プロジェクトを実施',
            borderColor: 'orange',
            backgroundColor: 'light-orange',
            hasImage: true,
            imageType: 'construction'
        },
        {
            id: 3,
            category: 'プレスリリース',
            date: '2025.02.03', 
            title: 'ACESとオークスモビリティが事故車の価格を算出するAIアプリ「AUX Pricing」を開発',
            borderColor: 'green',
            backgroundColor: 'light-green',
            hasImage: true,
            imageType: 'app'
        }
    ];

    const filteredNews = activeFilter === 'すべて' 
        ? newsItems 
        : newsItems.filter(item => item.category === activeFilter);

    return (
        <section className="news">
            <div className="container">
                <div className="news-header">
                    <div className="section-headers">
                        <h2 className="section-title-en">News</h2>
                        <h3 className="section-title-jp">ニュース</h3>
                    </div>
                </div>

                <div className="news-content">
                    <div className="news-filters">
                        {filterCategories.map((filter, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${filter.color}-filter ${
                                    activeFilter === filter.name ? 'active' : ''
                                }`}
                                onClick={() => setActiveFilter(filter.name)}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>

                    <div className="news-cards">
                        {filteredNews.map((item) => (
                            <div key={item.id} className={`news-card ${item.backgroundColor} ${item.borderColor}-border`}>
                                <div className="news-card-header">
                                    <span className="news-category">{item.category}</span>
                                    <div className="external-link-icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M10 2H14V6M14 2L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                <div className="news-card-content">
                                    <div className="news-text">
                                        <div className="news-date">{item.date}</div>
                                        <h4 className="news-title">{item.title}</h4>
                                    </div>
                                    
                                    {item.hasImage && (
                                        <div className={`news-image ${item.imageType}-image`}></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="news-cta">
                    <Link to="/news" className="cta-button red-cta">
                        すべての記事を見る
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News;