export default function Entry(props) {

  const {img, title, country, googleMapsLink, dates, description} = props;
  return (
    <article className="journal-entry__list">
      <figure className="journal-entry__img-area">
        <img src={img.src} alt={img.alt} />
      </figure>
      <div className="journal-entry__txt-area">
        <div className="map-info">
          <span className="map-info__location">{country}</span>
          <span className="map-info__link"><a href={googleMapsLink}>View on Google Maps</a></span>
        </div>
        <h2 className="title">{title}</h2>
        <div className="date">{dates}</div>
        <div className="description">{description}</div>
      </div>
    </article>
  )
}