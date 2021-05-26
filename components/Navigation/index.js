import React from 'react';
import Link from "next/link";

import styles from "./Navigation.module.scss"


const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <li className={styles.nav_item}><Link href="/">Home</Link></li>
        <li className={styles.nav_item}><Link href="/about">About</Link></li>
        <li className={styles.nav_item}><Link href="/products">Products</Link></li>
        <li className={styles.nav_item}><Link href="/admin/dashboard">Dashboard</Link></li>
        <li className={styles.nav_item}><Link href="/admin/dashboard/add-product">AddProduct</Link></li>
        <li className={styles.nav_item}><Link href="/"> Other</Link></li>
      </nav>
    </header>
  );
};

export default Navigation;