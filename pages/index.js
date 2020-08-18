import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-quicksand">
      <Head>
        <title>NextTailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex justify-center items-center bg-black">
        <h1 className="text-5xl font-bold text-white text-center leading-none">Nextjs<br/>x<br/>Tailwindcss</h1>
      </div>
    </div>
  )
}
