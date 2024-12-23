import styles from "./Login.module.css";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.form}>{children}</div>
    </div>
  );
}

export default LoginLayout;
