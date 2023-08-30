import style from "./main.module.scss";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <FaSearch />
      </div>
      <div className={style.input}>
        <input type="text" placeholder="search" />
      </div>
    </div>
  );
}
