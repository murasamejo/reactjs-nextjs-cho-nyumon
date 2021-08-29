import Link from 'next/link'
import Layout from './components/Layout'
import Image from './components/Image'

const Index = () => {
  return (
    <Layout header="Next.js" title="Top page">
      <p>Welcome to Next.js Top page!</p>
      <Image filename="cat.jpg" size="250" />
      <hr />
      <Link href="./other">
        <button>
          Go to "Other"! &gt;&gt;
        </button>
      </Link>
    </Layout>
  )
}

export default Index