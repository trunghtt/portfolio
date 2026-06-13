import { useEffect, useState } from 'react'

type ScrollTopButtonProps = {
  label: string
}

export function ScrollTopButton({ label }: ScrollTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 240)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      className="scroll-top-button no-print"
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{'\u2191'}</span>
    </button>
  )
}
