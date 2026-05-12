import Link from 'next/link'
import styles from './EzHeader.module.css'

export default function EzHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.returnLink}>&lt;- return</Link>
        </header>
    )
}