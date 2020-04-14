import Head from 'next/head'
import { useRouter } from 'next/router'

const NestedStoryPage = () => {
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


export default NestedStoryPage
