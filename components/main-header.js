import Link from "next/link";
import Image from "next/image";

import logoPng from "@/assets/logo.png";
import classes from "./main-header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoPng} alt="Page Logo" />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
