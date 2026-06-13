type TagListProps = {
  items: string[]
  compact?: boolean
}

export function TagList({ items, compact = false }: TagListProps) {
  return (
    <div className={`tag-list${compact ? ' compact' : ''}`}>
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}
