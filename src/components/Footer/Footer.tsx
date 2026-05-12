import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			made with &lt;3 by <Link target="_blank" rel="noopener noreferrer" href='https://michas.dev' className={styles.link}><abbr title="& hary" className={styles.abbr}>michas</abbr></Link>
		</footer>
	)
}
