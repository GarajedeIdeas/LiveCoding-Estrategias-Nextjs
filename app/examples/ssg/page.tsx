interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
}

const BLOG_URL = 'https://api.vercel.app/blog'

export default async function Page() {
  const data = await fetch(BLOG_URL)
  const posts: Post[] = await data.json()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
