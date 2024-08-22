import Head from 'next/head'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/solid'
import PageHeader from '../components/PageHeader'

export default function Home({ featuredItems }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MyCompany - 创新与卓越</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="欢迎来到未来"
        subtitle="我们正在重新定义行业标准，打造卓越的用户体验"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                了解更多 <ChevronRightIcon className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 transition duration-300">
            开始探索
          </a>
        </motion.div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // 在实际应用中，你可能会从API或数据库获取这些数据
  const featuredItems = [
    { title: '创新产品', description: '探索我们如何通过创新产品来改变行业格局。' },
    { title: '专业团队', description: '了解我们由行业专家组成的团队如何为您提供支持。' },
    { title: '卓越服务', description: '体验我们以客户为中心的卓越服务。' }
  ]

  return {
    props: {
      featuredItems
    }
  }
}