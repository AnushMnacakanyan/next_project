"use client";

/* Core */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const navigate = useRouter()
  const signout = () => {
    localStorage.clear()
    navigate.push("/")
  }

  return (<div className="menu">
    <nav className="nav">
      {localStorage.token ? <ul className="ul">
        <li><Link href={"/profile"}>Profile</Link></li>
        <li><Link href={"/users"}>Users</Link></li>
        <li><Link href={"/addProduct"}>AddProduct</Link></li>
        <li><Link href={"/addCategory"}>AddCategory</Link></li>
        <li><Link href={"/settingsUser"}>SettingsUser</Link></li>
        <li><button className="signout" onClick={() => signout()}>Signout</button></li>
      </ul>
        : <ul className="ul">
          <li><Link href={"/"}>LogIn</Link></li>
          <li><Link href={"/register"}>Register</Link></li>
        </ul>
      }
    </nav>

  </div>

  );
};
