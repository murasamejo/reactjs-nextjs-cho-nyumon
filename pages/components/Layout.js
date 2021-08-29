import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// props.children は重要
// この Layout というタグを他で使った際に、その中身（<Layout>（ここ）</Layout>）の部分が代入されている
// Rails の View でいう yield みたいなもの
// props.children の部分は純粋なコンテンツが入るものと考えればいい
const Layout = props => {
  return (
    <div>
      <Header header={props.header} title={props.title} />
      {props.children}
      <Footer footer="Copyright nikukyugamer" />
    </div>
  )
}

export default Layout
