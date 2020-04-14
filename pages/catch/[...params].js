import Head from 'next/head'
import { useRouter } from 'next/router'

const CatchAllPage = () => {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  )
}


export default CatchAllPage
