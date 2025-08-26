import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。');
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <h1>お問い合わせ</h1>
        <p>Contact Us</p>
      </section>
      
      <section className="contact-content">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>お気軽にお問い合わせください</h2>
            <p>
              サービスに関するご質問、ご相談、お見積りのご依頼など、
              どんなことでもお気軽にお問い合わせください。
              専門スタッフが丁寧に対応いたします。
            </p>
          </div>
          
          <div className="contact-container">
            <div className="contact-form-section">
              <h3>お問い合わせフォーム</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>お問い合わせ種別 *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">一般的なお問い合わせ</option>
                    <option value="service">サービスに関するお問い合わせ</option>
                    <option value="support">サポートに関するお問い合わせ</option>
                    <option value="partnership">パートナーシップについて</option>
                    <option value="media">取材・メディア関連</option>
                    <option value="recruitment">採用について</option>
                  </select>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>お名前 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>会社名</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>メールアドレス *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>件名 *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="お問い合わせの件名"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>メッセージ *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="お問い合わせ内容を詳しくお聞かせください"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    <a href="#privacy" className="privacy-link">プライバシーポリシー</a>に同意します *
                  </label>
                </div>
                
                <button type="submit" className="submit-btn">
                  送信する
                </button>
              </form>
            </div>
            
            <div className="contact-info-section">
              <h3>会社情報</h3>
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-label">会社名</div>
                  <div className="info-value">ACES株式会社</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">所在地</div>
                  <div className="info-value">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1<br />
                    ACESビル 10F
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">電話番号</div>
                  <div className="info-value">03-1234-5678</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">FAX</div>
                  <div className="info-value">03-1234-5679</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">メール</div>
                  <div className="info-value">info@aces.co.jp</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">営業時間</div>
                  <div className="info-value">
                    平日 9:00 - 18:00<br />
                    (土日祝日は休業)
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <h4>アクセス</h4>
                <div className="map-placeholder">
                  <p>🗺️ Google Maps</p>
                  <p>東京駅から徒歩5分</p>
                  <p>大手町駅から徒歩3分</p>
                </div>
              </div>
              
              <div className="response-time">
                <h4>対応時間について</h4>
                <ul>
                  <li>平日営業時間内のお問い合わせ: 当日中に回答</li>
                  <li>営業時間外・休日のお問い合わせ: 翌営業日に回答</li>
                  <li>緊急時のサポートは別途ご相談ください</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="faq-section">
            <h3>よくあるご質問</h3>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">
                  Q. サービスの導入にはどの程度の期間が必要ですか？
                </div>
                <div className="faq-answer">
                  A. プロジェクトの規模や要件により異なりますが、一般的には3-6ヶ月程度です。
                  詳しいスケジュールは、ヒアリング後にご提案いたします。
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  Q. 小規模な会社でもサービスを利用できますか？
                </div>
                <div className="faq-answer">
                  A. はい、企業規模に関わらずサービスをご利用いただけます。
                  お客様の予算や要件に応じて最適なプランをご提案いたします。
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  Q. セキュリティ対策はどうなっていますか？
                </div>
                <div className="faq-answer">
                  A. ISO27001認証取得済みで、厳格なセキュリティ基準を満たしています。
                  データの暗号化、アクセス制御等、多層的なセキュリティ対策を実施しています。
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  Q. 導入後のサポート体制について教えてください。
                </div>
                <div className="faq-answer">
                  A. 24時間365日のサポート体制を整えており、メール・電話でのサポートを提供しています。
                  定期的な保守・アップデートも含まれています。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;