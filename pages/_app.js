import Layout from '../components/layout/Layout.jsx'
import '../styles/_globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp