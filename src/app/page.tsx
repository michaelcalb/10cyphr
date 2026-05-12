/* 'use client' */

import LeetText from '@/components/LeetText/LeetText'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const decoders = [
    'pigpen',
    'braille',
]

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Image src='/200.png' width={128} height={128} alt='Logo' />
				<h1 className={styles.title}>10cyphr</h1>
			</header>
			<main className={styles.main}>
				<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>EZdecoders</legend>
                    {decoders.map(decoder => (
                        <Link href={`ez/${decoder}`} className={styles.link} key={decoder}>
                            <LeetText text={decoder} />
                        </Link>
                    ))}
                </fieldset>
			</main>
		</div>
	)
}
