// notionUtils.ts
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import bookmarkPlugin from '@notion-render/bookmark-plugin'

export async function configureRenderer(notionClient: any, blocks: any[]) {
  const renderer = new NotionRenderer({
    client: notionClient,
  })
  renderer.use(hljsPlugin({}))
  renderer.use(bookmarkPlugin(undefined))
  const html = await renderer.render(...blocks)
  return html
}

export function getResponsableInfo(post: any) {
  const responsableProperty = post.properties.Responsable
  let nombre, foto

  if (responsableProperty && 'people' in responsableProperty) {
    const responsable = responsableProperty.people[0]
    if (responsable && 'name' in responsable) {
      nombre = responsable.name
      foto = responsable.avatar_url
    }
  }

  return { nombre, foto }
}

export function getCoverUrl(post: any) {
  return post.cover?.type === 'file'
    ? post.cover.file.url
    : post.cover?.type === 'external'
    ? post.cover.external.url
    : ''
}
