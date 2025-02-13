import Entry from "./Entry"
import dataEntry from "../assets/data/data.js"

export default function Main() {

  const dataEntryElem = dataEntry.map(entry => {
    return (
      <Entry
        key={entry.id}
        {...entry}
        />
    )
  })

  return (
    <div className="journal-entry">
      {dataEntryElem}
    </div>
  )
}