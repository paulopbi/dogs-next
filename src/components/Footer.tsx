import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="Dogs"
        width={28}
        height={22}
      />
      <p>Dogs - Desenvolvido por Paulo Victor, Alguns direitos reservados.</p>
    </footer>
  );
}

export default Footer;
