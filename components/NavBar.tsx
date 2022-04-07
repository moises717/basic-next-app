import { ActiveLink } from "./ActiveLink";

import styles from "./Navbar.module.css";
import { menuItems } from "./navItems";

export const NavBar = () => {
	return (
		<nav className={styles["menu-container"]}>
			{menuItems.map((item) => (
				<ActiveLink key={item.href} href={item.href} title={item.text} />
			))}
		</nav>
	);
};
