import { Html, Head, Main, NextScript } from 'next/document'

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="hii im rezaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
