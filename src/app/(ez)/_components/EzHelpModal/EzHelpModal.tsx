import styles from './EzHelpModal.module.css';

export default function EzHelpModal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.closeButton} onClick={onClose}>
                        X
                    </button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}