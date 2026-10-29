import React from "react";
import SJMLogo from "../assets/SJM-logo.jpeg"
import SJMTemplate from "../assets/SJM-template.jpeg"
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

import "../style/home.css";

const PHONE = "8127859153";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Namaste, mujhe SJM दौड़ प्रतियोगिता में भाग लेने के लिए registration details chahiye."
)}`;

export default function Home() {
  return (
    <main className="sjm-home" id="home">
      <div className="sjm-topbar">
        <span>🏃 खेल है तो हेल्थ है</span>
        <span className="sjm-topbar-right">Social Justice Movement • SJM</span>
      </div>

      <header className="sjm-header">
        <a className="sjm-brand" href="#home" aria-label="SJM home">
          <img loading="lazy" src={SJMLogo} alt="SJM-logo" />
          <span>
            <strong>SJM</strong>
            <small>दौड़ प्रतियोगिता</small>
          </span>
        </a>

        <nav className="sjm-nav" aria-label="Main navigation">
          <a href="#about">प्रतियोगिता</a>
          <a href="#races">दौड़ श्रेणी</a>
          <a href="#prizes">पुरस्कार</a>
          <a href="#location">स्थान</a>
        </nav>

        <a className="sjm-nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          Registration पूछें <span>↗</span>
        </a>
      </header>

      <section className="sjm-hero">
        <div className="sjm-hero-copy">
          <div className="sjm-eyebrow"><span className="sjm-live-dot" /> स्थानीय खेल • बड़ा जुनून</div>
          <h1>
            दौड़ो।
            <br />
            <span>जीतो।</span>
            <br />
            <em>बढ़ो।</em>
          </h1>
          <p className="sjm-hero-subtitle">
            अपनी ताकत दिखाने, अपनी सीमाओं को चुनौती देने और खेल भावना के साथ आगे बढ़ने का मौका।
          </p>

          <div className="sjm-race-pills">
            <span>🏃 1600 मीटर</span>
            <span>⚡ 5 किलोमीटर</span>
          </div>

          <div className="sjm-hero-actions">
            <a className="sjm-button sjm-button-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Registration details <span><GoArrowUpRight/> </span>
            </a>
            <a className="sjm-button sjm-button-secondary" href="#about">Event details ↓</a>
          </div>

          <div className="sjm-hero-note">
            <span className="sjm-note-icon">✦</span>
            <span><strong>हर कदम मायने रखता है</strong><small>खेलो इंडिया • खेलो</small></span>
          </div>
        </div>

        <div className="sjm-hero-visual">
          <div className="sjm-image-frame">
            <img loading="lazy" src={SJMTemplate} alt="SJM दौड़ प्रतियोगिता का पोस्टर" />
          </div>
          <div className="sjm-floating-tag sjm-tag-top"><span>🏅</span> प्रतिभा को मंच</div>
          <div className="sjm-floating-tag sjm-tag-bottom"><span className="sjm-mini-dot" /> Sports • Unity • Progress</div>
          <div className="sjm-hero-number">SJM<span> / RUN</span></div>
        </div>

        <div className="sjm-hero-watermark">RUN FOR YOUR FUTURE</div>
      </section>

      <section className="sjm-info-strip" aria-label="Event highlights">
        <div><span className="sjm-info-icon">🏁</span><span><small>दौड़ की श्रेणियां</small><strong>1600 मीटर + 5 KM</strong></span></div>
        <div><span className="sjm-info-icon">📍</span><span><small>कार्यक्रम स्थल</small><strong>छतोह ग्राउंड</strong></span></div>
        <div><span className="sjm-info-icon">🏆</span><span><small>विजेताओं के लिए</small><strong>ट्रॉफी और उचित इनाम</strong></span></div>
        <div><span className="sjm-info-icon">📞</span><span><small>जानकारी के लिए</small><strong>{PHONE}</strong></span></div>
      </section>

      <section className="sjm-about section-wrap" id="about">
        <div className="sjm-section-kicker">01 / THE EVENT</div>
        <div className="sjm-about-grid">
          <div>
            <h2>सिर्फ दौड़ नहीं,<br /><span>एक नई शुरुआत।</span></h2>
          </div>
          <div className="sjm-about-copy">
            <p>
              SJM दौड़ प्रतियोगिता युवाओं को खेल, अनुशासन और स्वस्थ जीवन के लिए प्रेरित करने का एक मंच है।
              अपनी तैयारी के साथ आएं, खेल भावना बनाए रखें और अपनी पूरी क्षमता के साथ दौड़ें।
            </p>
            <a className="sjm-text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">पूरी जानकारी के लिए संपर्क करें <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="sjm-races section-wrap" id="races">
        <div className="sjm-section-heading">
          <div><div className="sjm-section-kicker">02 / CHOOSE YOUR RACE</div><h2>अपनी रेस चुनें<span>.</span></h2></div>
          <p>तैयारी करें, लक्ष्य तय करें और फिनिश लाइन तक अपना सर्वश्रेष्ठ दें।</p>
        </div>
        <div className="sjm-race-grid">
          <article className="sjm-race-card sjm-race-short">
            <div className="sjm-card-top"><span>RACE 01</span><span>🏃</span></div>
            <div className="sjm-distance">1600<span> M</span></div>
            <h3>1600 मीटर दौड़</h3>
            <p>स्पीड, स्टैमिना और दमखम की परीक्षा।</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">जानकारी लें <span>↗</span></a>
          </article>
          <article className="sjm-race-card sjm-race-long">
            <div className="sjm-card-top"><span>RACE 02</span><span>⚡</span></div>
            <div className="sjm-distance">5<span> KM</span></div>
            <h3>5 किलोमीटर दौड़</h3>
            <p>धैर्य, फिटनेस और निरंतरता का चैलेंज।</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">जानकारी लें <span>↗</span></a>
          </article>
        </div>
        <p className="sjm-small-note">नोट: आयु वर्ग, पात्रता, रिपोर्टिंग टाइम और रजिस्ट्रेशन नियम आयोजक से पुष्टि करके यहां जोड़े जा सकते हैं।</p>
      </section>

      <section className="sjm-prizes" id="prizes">
        <div className="sjm-prize-art" aria-hidden="true">🏆</div>
        <div className="sjm-prize-copy">
          <div className="sjm-section-kicker">03 / RECOGNISE THE EFFORT</div>
          <h2>मेहनत आपकी।<br /><span>सम्मान सबका।</span></h2>
          <p>विजेताओं को ट्रॉफी और उचित इनाम दिया जाएगा। अपनी मेहनत और खेल भावना के साथ मैदान में उतरें।</p>
          <a className="sjm-button sjm-button-light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">पुरस्कार की जानकारी लें ↗</a>
        </div>
      </section>

      <section className="sjm-location section-wrap" id="location">
        <div className="sjm-location-card">
          <div className="sjm-location-content">
            <div className="sjm-section-kicker">04 / FIND THE VENUE</div>
            <h2>मिलते हैं<br /><span>छतोह ग्राउंड पर।</span></h2>
            <p>कार्यक्रम की तारीख, रिपोर्टिंग टाइम और सटीक लोकेशन की पुष्टि आयोजक से करें।</p>
            <a className="sjm-button sjm-button-primary" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Chhatoah Ground, Raebareli, Uttar Pradesh")}`} target="_blank" rel="noreferrer">Map पर खोजें ↗</a>
          </div>
          <div className="sjm-location-graphic">
          <div className="sjm-location-icon"><FaLocationDot /></div>
            <div className="sjm-map-ring ring-one" />
            <div className="sjm-map-ring ring-two" />
            <span>CHHATOH<br />GROUND</span>
          </div>
        </div>
      </section>

      <section className="sjm-final-cta">
        <div className="sjm-section-kicker">READY, SET, RUN</div>
        <h2>दौड़ो अपने सपनों की ओर<span>.</span></h2>
        <p>Registration और event details के लिए आयोजक से संपर्क करें।</p>
        <div className="sjm-final-actions">
          <a className="sjm-button sjm-button-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp पर संपर्क करें ↗</a>
          <a className="sjm-button sjm-button-secondary" href={`tel:+91${PHONE}`}>कॉल करें: {PHONE}</a>
        </div>
      </section>

      <footer className="sjm-footer">
        <a className="sjm-footer-brand" href="#home"><img loading="lazy" src={SJMLogo} alt="" /><span><strong>SJM</strong><small>Social Justice Movement</small></span></a>
        <p>खेल भावना • समानता • मानवता</p>
        <span className="sjm-copyright">© {new Date().getFullYear()} SJM. All rights reserved.</span>
      </footer>
    </main>
  );
}
