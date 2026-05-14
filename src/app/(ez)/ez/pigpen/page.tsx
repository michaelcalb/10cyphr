'use client'

import clsx from 'clsx'
import styles from './page.module.css'
import { useState } from 'react'

const tictactoeChars = ['abcdefghi', 'jklmnopqr']

const xChars = ['sutv', 'wyxz']

export default function Pigpen() {
	const [output, setOutput] = useState('')

	const handleClick = (char: string) => {
		setOutput((prev) => prev + char)
	}

	const handleDoubleClick = (char: string) => {
		setOutput((prev) => prev.slice(0, -2))
		setOutput((prev) => prev + char)
	}

	const handleDelete = () => {
		setOutput((prev) => prev.slice(0, -1))
	}

	const handleClear = () => {
		setOutput('')
	}

	return (
		<main className={styles.main}>
			<div className={styles.pigpen}>
				<div className={styles.tictactoe}>
					{tictactoeChars[0].split('').map((char, i) => (
						<button
							key={i}
							className={clsx(styles.btn, styles[`tttCell${i}`])}
							onClick={() => handleClick(char)}
							onDoubleClick={() =>
								handleDoubleClick(tictactoeChars[1][i])
							}
						></button>
					))}
				</div>
				<div className={styles.x}>
					{xChars[0].split('').map((char, i) => (
						<button
							key={i}
							className={clsx(styles.btn, styles[`xCell${i}`])}
							onClick={() => handleClick(char)}
							onDoubleClick={() =>
								handleDoubleClick(xChars[1][i])
							}
						></button>
					))}
				</div>
			</div>
			<input type='text' value={output} readOnly />
			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleClear}>Clear</button>
		</main>
	)
}
