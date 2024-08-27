import { Badge } from '@/components/ui/badge'

interface PostFooterProps {
  etiquetas: any[]
}

export function PostFooter({ etiquetas }: PostFooterProps) {
  return (
    <footer className="p-6 border-t border-border w-full flex flex-col md:flex-row justify-between max-lg:items-center  gap-4">
      <span>Temas:</span>
      <div className="flex flex-wrap  max-lg:items-center max-lg:justify-center gap-2">
        {etiquetas.map(tag => (
          <Badge key={tag.id} variant="secondary">
            #{tag.name}
          </Badge>
        ))}
      </div>
    </footer>
  )
}
