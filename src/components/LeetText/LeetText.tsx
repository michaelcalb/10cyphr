import styles from './LeetText.module.css'
import { CSSProperties } from 'react'

interface LeetTextProps {
	text: string
}

const leetMap: Record<string, string> = {
	a: '4',
	e: '3',
	i: '1',
	o: '0',
	s: '5',
	t: '7',
}

export default function LeetText({ text }: LeetTextProps) {
	return (
		<span className={styles.text}>
			{text
				.toLowerCase()
				.split('')
				.map((char, index) => {
					return (
						<span
							className={styles.char}
							key={index}
							data-leet-char={leetMap[char] || char}
							style={{ '--i': index } as CSSProperties}
						>
							{char}
						</span>
					)
				})}
		</span>
	)
}
