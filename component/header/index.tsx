import Link from "next/link";
import styles from "./header.module.scss";
import { FaBookOpen, FaQuran } from "react-icons/fa";
import { AiOutlineHourglass } from "react-icons/ai";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <FaBookOpen />
            </Link>
          </li>
          <li>
            <Link href={"/suralar"}>
              <FaQuran />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <AiOutlineHourglass />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
