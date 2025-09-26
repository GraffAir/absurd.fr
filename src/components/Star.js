import styles from './Star.module.css';
import Image from 'next/image';

export default function Star({ big, size = 40, className = '' }) {
    return (
        <Image
            src={big ? "/BigStar.svg" : "/SmallStar.svg"}
            alt="star"
            width={size}
            height={size}
            className={`${styles.star} ${className}`}
        />
    );
}