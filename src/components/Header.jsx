import logoHeader from "../assets/images/logo.png"

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoHeader} alt="" />
        <span>my travel journal.  </span>
      </div>
    </header>
  )
}