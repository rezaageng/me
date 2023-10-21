'use client'

import { pageview } from '@/helpers/gtag'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

const Analytics = (): JSX.Element => {
  const pathname = usePathname()

  useEffect(() => {
    pageview(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, pathname)
  }, [pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `
        }}
      />
    </>
  )
}
export default Analytics
