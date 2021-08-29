import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// このコンポーネントは特別なもの
import Head from 'next/head'

// props.children は重要
// この Layout というタグを他で使った際に、その中身（<Layout>（ここ）</Layout>）の部分が代入されている
// Rails の View でいう yield みたいなもの
// props.children の部分は純粋なコンテンツが入るものと考えればいい
const Layout = props => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header header={props.header} title={props.title} />
      {props.children}
      <Footer footer="Copyright nikukyugamer" />
    </div>
  )
}

export default Layout
