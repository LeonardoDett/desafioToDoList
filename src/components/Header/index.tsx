import styles from "./styles.module.css";
import logo from "../../images/Logo.png";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Foguete com a palavra ToDo" />
    </header>
  );
}
