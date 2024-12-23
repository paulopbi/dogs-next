"use client";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./ContaHeader.module.css";
import useMedia from "@/hooks/useMedia";
import EstatisticaIcon from "@/icons/EstatisticaIcon";
import AdicionarIcon from "@/icons/AdicionarIcon";
import SairIcon from "@/icons/SairIcon";
import FeedIcon from "@/icons/FeedIcon";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/userContext";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste sua Foto";
      break;

    case "/conta/estatisticas":
      return "Estatísticas";
      break;

    default:
      return "Minha Conta";
      break;
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUser } = useUser();
  async function handleLogout() {
    logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticaIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon />
          {mobile && "Adicionar Fotos"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
