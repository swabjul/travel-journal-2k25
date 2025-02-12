import logoHeader from "../assets/images/logo.png"

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img className="header__logo-img" src={logoHeader} alt="globe icon" />
        <span className="header__logo-txt">my travel journal.  </span>
      </div>
    </header>
  )
}