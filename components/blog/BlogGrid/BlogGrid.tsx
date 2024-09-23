import { BlogCard } from '../BlogCard/BlogCard'

interface BlogPostProps {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
}

interface BlogGridProps {
  posts: BlogPostProps[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Nuestro Blog</h1>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogCard
            key={post.id.toString()}
            title={post.title}
            content={post.content}
            date={post.date}
            slug={post.id.toString()}
          />
        ))}
      </div>
    </div>
  )
}
