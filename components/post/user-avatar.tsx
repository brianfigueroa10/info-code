import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

interface AvatarProps {
  nombre: string | undefined
  foto: string | undefined
}

export function UserAvatar({ nombre, foto }: AvatarProps) {
  return (
    <Avatar>
      <AvatarImage
        src={foto ?? ''}
        alt={nombre ?? 'NC'}
        className="w-9 h-9 object-cover rounded-full"
      />
      <AvatarFallback>{nombre?.charAt(0) ?? 'NC'}</AvatarFallback>
    </Avatar>
  )
}
