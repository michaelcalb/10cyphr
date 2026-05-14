import EzHeader from "./_components/EzHeader/EzHeader"
import styles from './layout.module.css'

export default function EzLayout({
  children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <EzHeader />
            <div className={styles.content}>{children}</div>
        </>
    )
}
