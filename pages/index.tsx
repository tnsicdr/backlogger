import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Backlogger</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center">
          <h1>Backlogger, coming soon</h1>
          <h2>A new way to manage your collections</h2>
        </div>
      </main>
    </div>
  )
}

export default Home
