import Entry from "./Entry"
import dataEntry from "../assets/data/data.js"

export default function Main() {

  const dataEntryElem = dataEntry.map(entry => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        description={entry.text}
        />
    )
  })

  return (
    <div className="journal-entry">
      {dataEntryElem}
    </div>
  )
}