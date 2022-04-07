import Link from "next/link";
import { MainLayout } from "../../layout/MainLayout";

export default function Contact() {
	return (
		<MainLayout>
			<h1 className="title">
				Ir a{" "}
				<Link href="/">
					<a>Home</a>
				</Link>
			</h1>

			<p className="description">
				Get started by editing <code className="code">Contact/index.js</code>
			</p>
		</MainLayout>
	);
}
