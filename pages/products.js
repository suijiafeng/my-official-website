import Head from 'next/head'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import PlaceholderImage from '../components/PlaceholderImage'

const products = [
  { id: 1, name: '产品 A', description: '这是我们的明星产品,具有卓越的性能和优雅的设计。' },
  { id: 2, name: '产品 B', description: '专为专业用户设计,提供强大的功能和灵活的定制选项。' },
  { id: 3, name: '产品 C', description: '我们的入门级产品,性价比高,适合初次尝试的用户。' },
]

export default function Products({ products }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>我们的产品 - MyCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="我们的产品"
        subtitle="探索我们的创新解决方案"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <PlaceholderImage width={400} height={300} text={product.name} />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300">
                  了解更多
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // 在实际应用中，你可能会从API或数据库获取产品数据
  // 这里我们直接返回硬编码的数据
  return {
    props: {
      products
    }
  }
}