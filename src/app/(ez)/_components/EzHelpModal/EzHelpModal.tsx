import styles from './EzHelpModal.module.css';

export default function EzHelpModal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}