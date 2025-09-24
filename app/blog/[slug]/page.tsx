import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
// import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-muted mb-8">{post.date}</p>
      {/*<MDXRemote source={post.content} />*/}
    </article>
  )
}

