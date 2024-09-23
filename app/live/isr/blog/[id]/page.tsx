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

export const Page = async ({ params }: PageProps) => {
  return <main></main>
}
