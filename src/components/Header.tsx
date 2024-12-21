import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  const user = true;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src="/assets/dogs.svg"
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link href={"/conta"} className={styles.login}>
            Dogs Paulo
          </Link>
        ) : (
          <Link href={"/login"} className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
