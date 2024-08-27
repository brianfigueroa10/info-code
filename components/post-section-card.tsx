import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function PostCard({ page }: { page: any }) {
  const coverUrl =
    page.cover?.type === 'file'
      ? page.cover.file.url
      : page.cover?.type === 'external'
      ? page.cover.external.url
      : ''

  return (
    <Card key={page.id} className="rounded-md p-4 w-96">
      <Image
        src={coverUrl}
        alt="page"
        width={600}
        height={80}
        className="w-full h-40 object-cover rounded-md shadow-md shadow-background"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm mt-2 text-muted-foreground ">
          {new Date(page.created_time).toLocaleDateString()}
        </p>

        <Link href={`/${page.properties.Slug.rich_text[0].plain_text}`}>
          <CardTitle className="">
            {page.properties.Title.title[0].plain_text}
          </CardTitle>
        </Link>
        <CardDescription className="text-sm">
          {page.properties.Descripcion.rich_text[0].plain_text}
        </CardDescription>
        <aside className="flex gap-2 flex-wrap">
          {page.properties.Etiquetas?.type === 'multi_select' &&
            page.properties.Etiquetas.multi_select.map((tag: any) => (
              <span key={tag.id}>
                <Badge>#{tag.name}</Badge>
              </span>
            ))}
        </aside>
      </div>
    </Card>
  )
}
