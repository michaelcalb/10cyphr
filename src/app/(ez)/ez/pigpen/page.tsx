'use client'

import clsx from 'clsx'
import { useState } from 'react'
import styles from './page.module.css'
import EzOutput from '../../_components/EzOutput/EzOutput'

const tictactoeChars = ['abcdefghi', 'jklmnopqr']

const xChars = ['sutv', 'wyxz']

export default function Pigpen() {
	const [output, setOutput] = useState('')

	const handleClick = (char: string) => {
		setOutput((prev) => prev + char)
	}

	const handleDoubleClick = (char: string) => {
		setOutput((prev) => prev.slice(0, -2) + char)
	}

	return (
		<main className={styles.main}>
			<div className={styles.pigpen}>
				<div className={styles.tictactoe}>
					{tictactoeChars[0].split('').map((char, i) => (
						<button
							key={i}
							type='button'
							className={clsx(styles.btn, styles[`tttCell${i}`])}
							onClick={() => handleClick(char)}
							onDoubleClick={() =>
								handleDoubleClick(tictactoeChars[1][i])
							}
							aria-label={char}
						></button>
					))}
				</div>
				<div className={styles.x}>
					{xChars[0].split('').map((char, i) => (
						<button
							key={i}
							type='button'
							className={clsx(styles.btn, styles[`xCell${i}`])}
							onClick={() => handleClick(char)}
							onDoubleClick={() => handleDoubleClick(xChars[1][i])}
							aria-label={char}
						></button>
					))}
				</div>
			</div>
			<EzOutput value={output} onChange={setOutput} />
		</main>
	)
}
