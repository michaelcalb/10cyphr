import Image from "next/image";
import styles from './page.module.css'

export default function PigpenHelp() {

    return (
        <>
            <Image src="/pigpen_guide.png" alt="pigpen guide" width={400} height={400} className={styles.helpImg}/>
            <div className={styles.helpSingleClick}>
                <span className={styles.helpDrawing}></span>
                <span className={styles.helpResult}>= Single Click</span>
            </div>
            <div className={styles.helpDoubleClick}>
                <span className={styles.helpDrawing}></span>
                <span className={styles.helpResult}>= Double Click</span>
            </div>
        </>
    )
}