'use client'

import { useEffect } from 'react'

export default function CrtPreference() {
	useEffect(() => {
		const crtEnabled = localStorage.getItem('crtEnabled') !== 'false'

		document.body.classList.toggle('crt-disabled', !crtEnabled)
	}, [])

	return null
}
