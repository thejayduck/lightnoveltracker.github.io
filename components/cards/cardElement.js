import styles from '../../styles/components/CardElement.module.css'

import { motion } from 'framer-motion';

export default function CardElement({ entry, children }) {
    return (
        <motion.li
            layout
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
        >
            <div className={styles.activityEntry}>
                <div className={styles.wrap}>
                    <div className={styles.list}>
                        <p
                            title={`${entry?.title}`}
                            className={styles.title}
                        >
                            {entry?.title}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </motion.li>
    );
}