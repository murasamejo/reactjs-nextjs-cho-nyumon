import Link from 'next/link'
import Layout from './components/Layout'

const Index = () => {
  return (
    <Layout header="Next.js" title="Top page">
      <p>Welcome to Next.js Top page!</p>
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