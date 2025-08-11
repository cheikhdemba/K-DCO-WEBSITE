import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>K-DECO - Home</title>
        <meta name="description" content="K-DECO website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to K-DECO
          </h1>
          <p className="text-xl text-gray-600">
            Your website is ready for development
          </p>
        </div>
      </main>
    </div>
  )
} 