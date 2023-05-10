import { Html, Main, NextScript } from 'next/document'
import CustomHead from './_head'

export default function Document() {
  return (
    <Html>
      <CustomHead />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
