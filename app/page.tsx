import AllPosts from '@/components/all-posts'
import { fetchPages } from '@/lib/notion'

export const revalidate = 0

export default async function Home() {
  const posts = await fetchPages()

  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <AllPosts posts={posts.results} />
    </div>
  )
}
