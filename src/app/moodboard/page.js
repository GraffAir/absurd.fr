import styles from './moodboard.module.css';

export default function Page() {
    return <iframe className={styles.mainFrame}
                   src="https://embed.figma.com/design/GTYpiPCUyeLvkVnPELpiFa/Moodboard?node-id=0-1&embed-host=share"
                   allowFullScreen height={'100vh'}></iframe>
}