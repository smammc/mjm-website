import { getAllBlogPosts } from '@/lib/blog'
import Link from 'next/link'

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts()
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-muted mt-1">{post.date}</p>
            <p className="mt-2 text-base">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-accent underline underline-offset-4 hover:text-accent-700 transition mt-2 inline-block">Ler artigo</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

