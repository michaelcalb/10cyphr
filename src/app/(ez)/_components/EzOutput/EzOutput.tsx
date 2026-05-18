'use client'

import styles from './EzOutput.module.css'

type EzOutputProps = {
	value: string
	onChange: (value: string) => void
}

export default function EzOutput({ value, onChange }: EzOutputProps) {
	const handleDelete = () => {
		onChange(value.slice(0, -1))
	}

	const handleClear = () => {
		onChange('')
	}

	return (
		<div className={styles.output}>
			<input
				type='text'
				value={value}
				readOnly
				className={styles.input}
				aria-label='Output'
			/>
			<div className={styles.controls}>
				<button
					type='button'
					className={styles.controlBtn}
					onClick={handleDelete}
				>
					Delete
				</button>
				<button
					type='button'
					className={styles.controlBtn}
					onClick={handleClear}
				>
					Clear
				</button>
			</div>
		</div>
	)
}
