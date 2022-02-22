import { ReactChild } from "react";

import './style.css';

export type ButtonType = {
  className?: string;
	children: ReactChild
}

const Button = ({
	children,
	className
} : ButtonType) => (
	<button className={className} type="button">
		{children}
	</button>
)

export default Button;
