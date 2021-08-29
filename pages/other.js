import Link from 'next/link'
import Layout from './components/Layout'

export default () => {
  return (
    <Layout header="Other" title="Other page">
      <p>This is "Other" page.</p>
      <hr />

      <div>
        <Link href="/">
          <button>&lt;&lt; Back to Top page</button>
        </Link>
      </div>
    </Layout>
  )
}
