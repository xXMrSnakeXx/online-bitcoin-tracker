import Image from "next/image";
import s from "../styles/Header.module.scss";


function Header() {
    return (
      <header className={s.container}>
        <Image src="/logo.svg" alt="logo" width="30" height="30" />
        <h1> Bitcoin Tracker</h1>
        <Image src="/logo.svg" alt="logo" width="30" height="30" />
      </header>
    );
}

export default Header;