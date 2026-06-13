import type { Language, NavItem } from '../../domain/portfolio'

type HeaderProps = {
  brandAria: string
  language: Language
  languageSwitchLabel: string
  navItems: NavItem[]
  onToggleLanguage: () => void
}

export function Header({
  brandAria,
  language,
  languageSwitchLabel,
  navItems,
  onToggleLanguage,
}: HeaderProps) {
  return (
    <header className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={brandAria}>
        <span className="brand-mark">TH</span>
        <span>Trung Ha</span>
      </a>
      <div className="nav-area">
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="language-switch"
          type="button"
          onClick={onToggleLanguage}
          aria-label={languageSwitchLabel}
        >
          <span className={language === 'en' ? 'active' : ''}>EN</span>
          <span aria-hidden="true">|</span>
          <span className={language === 'vi' ? 'active' : ''}>VI</span>
        </button>
      </div>
    </header>
  )
}
