import React from 'react'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>Expensify</div>
            <div className={styles.right}>APR</div>
        </div>
    );
}

export default Header;