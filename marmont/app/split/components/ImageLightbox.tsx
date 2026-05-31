import styles from "./style/ImageLightbox.module.css";

type ImageLightboxProps = {
    isOpen: boolean;
    src: string;
    alt?: string;
    onClose: () => void;
};

export default function ImageLightbox({ isOpen, src, alt, onClose }: ImageLightboxProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
            <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
                <button type="button" className={styles.close} onClick={onClose} aria-label="Close image">
                    ×
                </button>
                <img className={styles.image} src={src} alt={alt ?? "Image preview"} />
            </div>
        </div>
    );
}
