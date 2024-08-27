'use client'

import { useState } from 'react'
import TagSelector from './tag-selector'
import PostCard from './post-section-card'

function formatTag(tag: string): string {
  return tag
    .replace(/([^A-Z])([A-Z])/g, '$1 $2')
    .trim()
    .split(' ')
    .map(word => (word.length > 3 ? word : word.trim()))
    .join(' ')
}

export default function AllPosts({ posts }: { posts: any[] }) {
  const [filter, setFilter] = useState('')

  // Obtener todas las etiquetas únicas
  const allTags = Array.from(
    new Set(
      posts.flatMap((page: any) =>
        page.properties.Etiquetas?.multi_select.map((tag: any) => tag.name)
      )
    )
  )

  const filteredPosts = posts.filter((page: any) =>
    page.properties.Etiquetas?.multi_select.some((tag: any) =>
      tag.name.includes(filter)
    )
  )

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <aside className="flex max-md:flex-col gap-5 justify-between w-10/12 items-center mb-6">
        <h1 className="text-4xl font-bold">Articulos</h1>
        <TagSelector allTags={allTags} filter={filter} setFilter={setFilter} />
      </aside>
      <article className="flex flex-wrap justify-center gap-5 px-2 max-w-[1400px]">
        {filteredPosts.map((page: any) => (
          <PostCard key={page.id} page={page} />
        ))}
      </article>
    </div>
  )
}
