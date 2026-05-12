import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import Footer from '@/components/Footer/Footer'

const pixel = localFont({
    src: [
        {
            path: './fonts/PixelOperatorMono.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/PixelOperatorMono-Bold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-pixel',
})

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: '10cyphr',
	description: 'A collection of interactive decoders',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable}`}
		>
			<body>
                {children}
                <Footer />
            </body>
		</html>
	)
}
