import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR)
  const posts = await Promise.all(
    files.filter(f => f.endsWith('.mdx')).map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(BLOG_DIR, file)
      const source = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(source)
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
      }
    })
  )
  // Sort by date descending
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  try {
    const source = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(source)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
    }
  } catch {
    return null
  }
}
