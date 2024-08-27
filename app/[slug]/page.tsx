import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion'
import {
  configureRenderer,
  getResponsableInfo,
  getCoverUrl,
} from '@/lib/notionUtils'

import { formatDate } from '@/lib/format-date'
import { PostHeader } from '@/components/post/post-header'
import { PostMeta } from '@/components/post/post-meta'
import { PostContent } from '@/components/post/post-content'

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await fetchBySlug(params.slug)
  if (!post) {
    return <div>No Post</div>
  }

  const blocks = await fetchPageBlocks(post.id)
  const html = await configureRenderer(notion, blocks)
  const { nombre, foto } = getResponsableInfo(post)
  const coverUrl = getCoverUrl(post)
  const title =
    post.properties.Title?.type === 'title'
      ? post.properties.Title.title[0]?.plain_text
      : ''
  const description =
    post.properties.Descripcion?.type === 'rich_text'
      ? post.properties.Descripcion.rich_text[0]?.plain_text
      : ''
  const createdTime = formatDate(post.created_time)
  const lastEditedTime = formatDate(post.last_edited_time)
  const etiquetas =
    post.properties.Etiquetas?.type === 'multi_select'
      ? post.properties.Etiquetas.multi_select
      : []

  return (
    <section className="flex flex-col mt-32 justify-center max-w-[1180px] gap-4">
      <PostHeader coverUrl={coverUrl} title={title} description={description} />
      <PostMeta
        createdTime={createdTime}
        lastEditedTime={lastEditedTime}
        nombre={nombre}
        foto={foto}
      />
      <PostContent html={html} etiquetas={etiquetas} />
    </section>
  )
}
