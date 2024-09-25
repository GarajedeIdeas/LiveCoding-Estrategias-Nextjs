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

export default async function Page({ params }: PageProps) {
  const { id } = params
  // const BLOG_URL = `https://api.vercel.app/blog/${id}`
  console.log(id)
  return <main></main>
}
