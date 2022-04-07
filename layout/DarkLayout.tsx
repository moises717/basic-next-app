import { FC } from "react";

export const DarkLayout: FC<{ children: JSX.Element }> = ({ children }: { children: JSX.Element }) => {
	return (
		<div
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.3)",
				borderRadius: "5px",
				padding: "10px",
			}}>
			<h3>Dark layout</h3>
			<div>{children}</div>
		</div>
	);
};