'use client';

import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body><ParallaxProvider>{children}</ParallaxProvider></body>
        </html>
    )
}