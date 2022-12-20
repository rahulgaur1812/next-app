import '../styles/globals.css'
import Layout from '../common/layout'
import 'bootstrap/dist/css/bootstrap.css';
import { Roboto } from 'next/font/google';
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subset: ['latin']
})
function MyApp({ Component, pageProps }) {
  //console.log('pageprops', pageProps);
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>

    </Layout>
  )
}

export default MyApp
