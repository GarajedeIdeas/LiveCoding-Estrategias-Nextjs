import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  content: string
  date: string
  slug: string
}

export const BlogCard = ({ title, content, date, slug }: BlogPostProps) => {
  return (
    <Card className='max-w-md mx-auto'>
      <CardHeader>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='flex items-center text-sm text-muted-foreground'>
          <CalendarIcon className='mr-1 h-4 w-4' />
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{content}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/examples/isr/blog/${slug}`}>Leer más</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
