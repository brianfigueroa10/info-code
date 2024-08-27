import AllPosts from '@/components/all-posts'
import { fetchPages } from '@/lib/notion'

export default async function Home() {
  const posts = await fetchPages()

  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <h1 className="text-6xl text-center mb-8">
        Info<span className="text-primary font-bold uppercase">Code</span>
      </h1>
      <AllPosts posts={posts.results} />
    </div>
  )
}
