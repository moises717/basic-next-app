import { MainLayout } from "../layout/MainLayout";
import Link from "next/link";
export default function Home() {
	return (
		<MainLayout>
			<h1 className="title">
				Ir a{" "}
				<Link href="/about">
					<a>About</a>
				</Link>
			</h1>

			<p className="description">
				Get started by editing <code className="code">pages/index.js</code>
			</p>
		</MainLayout>
	);
}
