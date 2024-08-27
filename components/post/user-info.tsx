import { UserAvatar } from './user-avatar'

interface ResponsableInfoProps {
  nombre: string | undefined
  foto: string | undefined
}

export function UserInfo({ nombre, foto }: ResponsableInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm font-medium text-muted-foreground">
        Por <span className="text-foreground">{nombre}</span>
      </p>
      <UserAvatar nombre={nombre} foto={foto} />
    </div>
  )
}
