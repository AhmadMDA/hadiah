import { useState } from 'react'

export default function App() {
  const [showCake, setShowCake] = useState(false)
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <div className="page-shell">
      {!showCake ? (
        <main className="hero-card">
          <div className="hero-content">
            <p className="small-label">Untuk Meidita Fatma Azzahra</p>
            <h1>Selamat Ulang Tahun, Meidita!</h1>
            <p className="subtitle">Semoga hari ini dipenuhi kebahagiaan dan kejutan manis.</p>
            <button className="primary-button" onClick={() => setShowCake(true)}>
              Lanjutkan?
            </button>
          </div>
        </main>
      ) : (
        <main className="cake-page">
            <h2 className="title">Kue untuk mu Mei Kecill</h2>
          <section className="cake-section">
            {/* <div className="cake-topper">23</div> */}

            <div className="cake-layer cake-layer-1"></div>
            
            <div className="cake-layer cake-layer-2"></div>
            <div className="cake-layer cake-layer-3"></div>
            <div className="cake-icing"></div>
<div className="candles">
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle" style={{ marginRight: "20px" }}></div>
  <div className="candle"></div>
</div>
            <div className="cake-bottom"></div>

          </section>

          <section className="message-section">
            <div className="message-card">
              <div className="message-header">
                <h2>Kartu Ucapan</h2>
                <button className="secondary-button" onClick={() => setCardOpen((value) => !value)}>
                  {cardOpen ? 'Tutup Kartu' : 'Buka Kartu'}
                </button>
              </div>

              {cardOpen ? (
                <div className="message-body">
                  <p>selamat ulang tahun mei</p>
                  <p>Semoga cita-citamu tercapai, target-targetmu terpenuhi, rezekimu lancar, urusanmu dimudahkan, dan kebahagiaan selalu menyertaimu. Semoga setiap tahun menjadi versi terbaik dari dirimu. Tetap sehat, tetap semangat, makin sukses, makin pendek, makin imut, dan jangan lupa kopi, karena dunia kadang terlalu berat untuk dijalani tanpa secangkir kopi yang setia menemani. ☕</p>
                </div>
              ) : (
                <div className="message-preview">
                  <p>Klik tombol untuk membuka ucapan spesial.</p>
                </div>
              )}
            </div>
          </section>
        </main>
      )}
    </div>
  )
}
