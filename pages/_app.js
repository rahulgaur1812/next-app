import '../styles/globals.css'
import Layout from '../common/layout'
import 'bootstrap/dist/css/bootstrap.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
function MyApp({ Component, pageProps }) {
  //console.log('pageprops', pageProps);
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
