import Entry from "./Entry"
import dataEntry from "../assets/data/data.js"


console.log(dataEntry)

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

export default function Main() {

  return (
    <div className="journal-entry">
      {dataEntryElem}
    </div>
  )
}