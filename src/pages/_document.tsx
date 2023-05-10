import { Html, Head, Main, NextScript } from 'next/document'
import CustomFonts from './_head'

export default function Document() {
  return (
    <Html>
      <Head>
        <CustomFonts />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
