import Head from 'next/head'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import PlaceholderImage from '../components/PlaceholderImage'

export default function About({ companyInfo }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>关于我们 - MyCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="关于我们"
        subtitle="了解我们的故事和使命"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">我们的使命</h2>
            <p className="text-gray-600 mb-6">
              {companyInfo.mission}
            </p>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">我们的团队</h2>
            <p className="text-gray-600">
              {companyInfo.team}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-96"
          >
            <PlaceholderImage width={600} height={400} text="Our Team" />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // 在实际应用中，你可能会从API或数据库获取这些数据
  const companyInfo = {
    mission: "我们致力于通过创新技术和卓越服务，为客户创造价值，推动行业进步。我们相信，通过不断学习和成长，我们可以为世界带来积极的改变。",
    team: "我们的团队由充满激情的专业人士组成，他们在各自的领域都有深厚的专业知识和丰富的经验。我们珍视多样性，鼓励创新，共同努力实现我们的目标。"
  }

  return {
    props: {
      companyInfo
    }
  }
}