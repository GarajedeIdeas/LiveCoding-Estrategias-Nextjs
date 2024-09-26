// interface Post {
//   id: number
//   title: string
//   content: string
//   author: string
//   date: string
//   category: string
// }

interface PageProps {
  params: { id: string }
}

export const revalidate = 60

export default async function Page({ params }: PageProps) {
  const { id } = params
  const BLOG_URL = `https://api.vercel.app/blog/${id}`
  const post = await fetch(BLOG_URL).then((res) => res.json())

  console.log(id)
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
