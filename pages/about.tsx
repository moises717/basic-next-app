import Link from "next/link";
import { DarkLayout } from "../layout/DarkLayout";
import { MainLayout } from "../layout/MainLayout";

export default function AboutPage() {
	return (
		<>
			<h1 className="title">
				Ir a{" "}
				<Link href="/home">
					<a>About</a>
				</Link>
			</h1>

			<p className="description">
				Get started by editing <code className="code">pages/index.js</code>
			</p>
		</>
	);
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
