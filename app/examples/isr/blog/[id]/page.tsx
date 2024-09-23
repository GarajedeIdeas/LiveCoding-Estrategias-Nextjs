import { CalendarIcon, UserIcon } from 'lucide-react'
interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
}

interface PageProps {
  params: { id: string }
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: post.id.toString()
  }))
}

export default async function Page({ params }: PageProps) {
  const { id } = params
  const post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) =>
    res.json()
  )

  return (
    <article className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <div className='flex items-center space-x-4 text-gray-500 mb-6'>
        <div className='flex items-center'>
          <CalendarIcon className='w-5 h-5 mr-2' />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>
        <div className='flex items-center'>
          <UserIcon className='w-5 h-5 mr-2' />
          <span>{post.author}</span>
        </div>
      </div>
      <div className='prose prose-lg max-w-none'>
        <p className='mb-4'>{post.content}</p>
      </div>
    </article>
  )
}
