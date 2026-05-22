'use client'

import Link from 'next/link'
import styles from './EzHeader.module.css'
import PigpenHelp from '../../ez/pigpen/PigpenHelp'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import EzHelpModal from '../EzHelpModal/EzHelpModal'
import BrailleHelp from '../../ez/braille/BrailleHelp'

type DecoderHeader = {
    title: string,
    help: React.ReactNode
}

const decoderHeaders: Record<string, DecoderHeader> = {
    '/ez/pigpen': {
        title: 'Pigpen',
        help: <PigpenHelp />
    },
    '/ez/braille': {
        title: 'Braille',
        help: <BrailleHelp />
    }
}

export default function EzHeader() {
    const pathname = usePathname()
    const [isHelpOpen, setIsHelpOpen] = useState(false)

    const current = decoderHeaders[pathname]

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.returnLink}>&lt;- return</Link>

            {current && (
                <>
                    <h1 className={styles.title}>{current.title}</h1>

                    <button onClick={() => setIsHelpOpen(true)} className={styles.helpButton}>?</button>

                    {isHelpOpen && (
                        <EzHelpModal onClose={() => setIsHelpOpen(false)}>
                            {current.help}
                        </EzHelpModal>
                    )}
                </>
            )}
        </header>
    )
}