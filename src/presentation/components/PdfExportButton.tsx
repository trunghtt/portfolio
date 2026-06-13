type PdfExportButtonProps = {
  label: string
  variant?: 'primary' | 'secondary'
}

export function PdfExportButton({ label, variant = 'secondary' }: PdfExportButtonProps) {
  function handleExport() {
    window.print()
  }

  return (
    <button className={`button ${variant} no-print`} type="button" onClick={handleExport}>
      {label}
    </button>
  )
}
