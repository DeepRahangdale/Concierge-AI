import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster';
import { ProModal } from '@/components/pro-modal';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Concierge AI',
  description: 'Your Customized Companion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <Head>
        <link rel="icon" href="./robot.png" /> {/* Make sure to use the correct path to your favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProModal />
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}