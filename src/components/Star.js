import styles from './Star.module.css';
import Image from 'next/image';

export default function Star({ big, size = 40, className = '' }) {
    var image = "/SmallStar.svg";
    if (big){
        image = "/BigStar.svg";
    }

    return (
        <Image
            src={image}  // Place your SVG or image in the public folder
            alt="star"
            width={size}
            height={size}
            className={`${styles.star} ${className}`}
        />
    );
}