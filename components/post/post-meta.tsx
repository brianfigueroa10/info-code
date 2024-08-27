import { UserInfo } from './user-info'

interface PostMetaProps {
  createdTime: string
  lastEditedTime: string
  nombre: string
  foto: string
}

export function PostMeta({
  createdTime,
  lastEditedTime,
  nombre,
  foto,
}: PostMetaProps) {
  return (
    <div className="flex max-md:flex-col-reverse items-center gap-5 justify-between max-xl:px-4 ">
      <aside className="flex gap-2 text-sm text-muted-foreground max-md:flex-col">
        <span>Publicado: {createdTime}</span>{' '}
        <span className="max-md:hidden">|</span>
        <span>Actualizado: {lastEditedTime}</span>
      </aside>
      <UserInfo nombre={nombre} foto={foto} />
    </div>
  )
}
