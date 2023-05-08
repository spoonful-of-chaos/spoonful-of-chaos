import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Bebas_Neue, Source_Serif_Pro } from 'next/font/google';

const bebas = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400']
});

const ssp = Source_Serif_Pro({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ssp.className} ${bebas.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
