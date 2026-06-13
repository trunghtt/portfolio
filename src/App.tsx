import { useMemo, useState } from 'react'
import { getPortfolioContent } from './application/portfolioContent'
import type { Language } from './domain/portfolio'
import { Header } from './presentation/components/Header'
import { PortfolioPage } from './presentation/components/PortfolioPage'
import { ScrollTopButton } from './presentation/components/ScrollTopButton'
import './presentation/styles/portfolio.css'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const content = useMemo(() => getPortfolioContent(language), [language])

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'vi' : 'en'))
  }

  return (
    <div className="site-shell">
      <Header
        brandAria={content.labels.brandAria}
        language={language}
        languageSwitchLabel={content.labels.languageSwitch}
        navItems={content.nav}
        onToggleLanguage={toggleLanguage}
      />
      <PortfolioPage content={content} />
      <ScrollTopButton label={content.labels.scrollTop} />
    </div>
  )
}

export default App
