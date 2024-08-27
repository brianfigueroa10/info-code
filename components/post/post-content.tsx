// components/PostContent.tsx

import { PostFooter } from './post-footer'

interface PostContentProps {
  html: string
  etiquetas: any[]
}

export function PostContent({ html, etiquetas }: PostContentProps) {
  return (
    <>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="content"></article>
      {etiquetas.length > 0 && <PostFooter etiquetas={etiquetas} />}
    </>
  )
}
