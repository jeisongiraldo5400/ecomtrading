import Head from 'next/head'
//import Image from 'next/image'

//Modules
import Auth from './auth'

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>Ecomtrading</title>
        <meta name="description" content="Ecomtrading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Auth />
      
    </div>
  )
}
