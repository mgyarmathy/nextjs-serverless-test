import Head from 'next/head'
import { useRouter } from 'next/router'

const StoryPage = () => {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.slug}
    </div>
  )
}


export default StoryPage
