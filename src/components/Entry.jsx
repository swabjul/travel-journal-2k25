export default function Entry() {
  return (
    <article className="journal-entry__list">
      <figure className="journal-entry__img-area">
        <img src="../src/assets/images/mt-fuji.png" alt="text here" />
      </figure>
      <div className="journal-entry__txt-area">
        <div className="map-info">
          <span className="map-info__location">JAPAN</span>
          <span className="map-info__link"><a href="">View on Google Maps</a></span>
        </div>
        <h2 className="title">Mount Fuji</h2>
        <div className="date">12 Jan, 2023 - 24 Jan, 2023</div>
        <div className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</div>
      </div>
    </article>
  )
}