'use client'

import LeetText from '@/components/LeetText/LeetText'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const decoders = [
    'pigpen',
    'braille',
]

const getSavedCrtEnabled = () => {
	if (typeof window === 'undefined') {
		return true
	}

	return localStorage.getItem('crtEnabled') !== 'false'
}

export default function Home() {
	const [crtEnabled, setCrtEnabled] = useState(getSavedCrtEnabled)

	useEffect(() => {
		document.body.classList.toggle('crt-disabled', !crtEnabled)
		localStorage.setItem('crtEnabled', crtEnabled.toString())
	}, [crtEnabled])

	const toggleCrt = () => {
		setCrtEnabled(enabled => !enabled)
	}

	return (
		<div className={styles.page}>
			<button
				type='button'
				className={styles.crtToggle}
				aria-pressed={crtEnabled}
				suppressHydrationWarning
				onClick={toggleCrt}
			>
                Toggle CRT
			</button>
			<header className={styles.header}>
				<Image src='/200.png' width={128} height={128} alt='Logo' />
				<h1 className={styles.title}>10cyphr</h1>
			</header>
            <span className={styles.note}>This is still a work in progress, some decoders may not be fully implemented yet, or not implemented at all.</span>
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
