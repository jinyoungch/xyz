import React from 'react';
import Link from 'next/link';

import styles from './header.module.css';
import { useToggle } from '../../hooks';

export default function Header({ title = '' }) {
  const [toggle] = useToggle();

  return (
    <article className={styles.header}>
      {title ? (
        <hgroup className={styles.path}>
          <Link href="/">
            <a>
              <h1 className={styles.pathRoot}>jinyoung</h1>
            </a>
          </Link>
          <Link href={`/${title.toLowerCase()}`}>
            <a>
              <h1> / {title}</h1>
            </a>
          </Link>
        </hgroup>
      ) : (
        <Link href="/">
          <a>
            <h1>jinyoung</h1>
          </a>
        </Link>
      )}

      <button
        className={styles.toggle}
        aria-label="Toggle Theme"
        title="Toggle Theme"
        type="button"
        onClick={toggle}
      >
        <div aria-label="Sun" className={styles.sun} />
        <div aria-label="Moon" className={styles.moon} />
      </button>
    </article>
  );
}
