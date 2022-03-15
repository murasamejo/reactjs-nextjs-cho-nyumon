import Link from 'next/link'
import Layout from './components/Layout'

const Other = () => {
  return (
    <Layout header="Other" title="Other page">
      <p>This is &quot;Other&quot; page.</p>
      <hr />

      <div>
        <Link href="/" passHref>
          <button>&lt;&lt; Back to Top page</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Other
