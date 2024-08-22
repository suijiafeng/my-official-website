import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export default function Article({ articleData }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{articleData.title} - MyCompany</title>
      </Head>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{articleData.title}</h1>
        <div className="text-gray-600 mb-4">
          {articleData.date} | {articleData.author}
        </div>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), 'content/articles')
  const filenames = fs.readdirSync(articlesDirectory)

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      articleData: {
        slug: params.slug,
        contentHtml,
        title: data.title,
        date: data.date,
        author: data.author,
      },
    },
  }
}