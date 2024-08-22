import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export default function LatestNews({ articles }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>文章列表 - MyCompany</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">文章列表</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/article/${article.slug}`} key={article.slug}>
            <span className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="text-sm text-gray-500">
                {article.date} | {article.author}
              </div>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articlesDirectory = path.join(process.cwd(), 'content/articles')
  const filenames = fs.readdirSync(articlesDirectory)

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
    }
  })

  return {
    props: {
      articles,
    },
  }
}