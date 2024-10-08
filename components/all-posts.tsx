'use client'

import React, { useEffect, useState } from 'react'
import TagSelector from './tag-selector'
import PostCard from './post-section-card'

export default function AllPosts({ posts }: { posts: any[] }) {
  const [filter, setFilter] = useState('')
  const [allTags, setAllTags] = useState<string[]>([])
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    // Obtener todas las etiquetas únicas
    const tags = Array.from(
      new Set(
        posts.flatMap((page: any) =>
          page.properties.Etiquetas?.multi_select.map((tag: any) => tag.name)
        )
      )
    )
    setAllTags(tags)
  }, [posts])

  useEffect(() => {
    const filtered = posts.filter((page: any) =>
      page.properties.Etiquetas?.multi_select.some((tag: any) =>
        tag.name.includes(filter)
      )
    )
    setFilteredPosts(filtered)
  }, [filter, posts])
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <aside className="flex max-md:flex-col gap-5 justify-between w-10/12 items-center mb-6">
        <h1 className="text-6xl text-center">
          Info<span className="text-primary font-bold uppercase">Code</span>
        </h1>
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
