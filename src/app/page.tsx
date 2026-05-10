'use client'

import LeetText from '@/components/LeetText/LeetText'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Image src='/256.png' width={128} height={128} alt='Logo' />
				<h1 className={styles.title}>10cyphr</h1>
			</header>
			<main className={styles.main}>
				<div className={styles.ezContainer}>
					<Link href='/ez/pigpen'>
						<LeetText text='pigpen' />
					</Link>
					<Link href='/ez/braille'>
						<LeetText text='braille' />
					</Link>
				</div>
			</main>
		</div>
	)
}
