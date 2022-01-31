/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
            <Link href={"/"}>
              <a className={styles.containerLogo}>
                <img className={styles.logo} src="/images/vector.svg" alt="logo" />&nbsp;
                <span className={styles.title}>spacetraveling</span>
                <span className={styles.ponto}>&nbsp;.</span>
              </a>
            </Link>
      </div>
    </div>
  );
}
