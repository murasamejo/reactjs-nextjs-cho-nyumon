import Link from 'next/link'

const Other = () => {
  return (
    <div>
      <h1>Hello, Other page!</h1>
      <p>ようこそ Other page へ！</p>

      <hr />

      <div>
        <Link href="/">
          <a>Go to Home Page &gt;&gt;</a>
        </Link>
      </div>
    </div>
  )
}

export default Other
