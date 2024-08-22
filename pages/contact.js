import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact({ contactInfo }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // 这里你会处理表单提交，可能是发送到一个API端点
    alert('感谢您的留言！我们会尽快回复您。')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>联系我们 - MyCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="联系我们"
        subtitle="我们期待听到您的声音"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">给我们留言</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">留言</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300">
                发送留言
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">联系方式</h2>
            <p className="text-gray-600 mb-4">
              <strong>地址：</strong> {contactInfo.address}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>电话：</strong> {contactInfo.phone}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>邮箱：</strong> {contactInfo.email}
            </p>
            <p className="text-gray-600">
              工作时间：{contactInfo.workingHours}
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // 在实际应用中，你可能会从API或数据库获取这些数据
  const contactInfo = {
    address: "北京市朝阳区xxx街xxx号",
    phone: "+86 10 1234 5678",
    email: "info@mycompany.com",
    workingHours: "周一至周五 9:00 - 18:00"
  }

  return {
    props: {
      contactInfo
    }
  }
}