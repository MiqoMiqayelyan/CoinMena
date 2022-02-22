import { ReactChild } from "react";

import './style.css';

export type ButtonType = {
  className?: string;
  children: ReactChild;
  onButtonClick: () => void
}

const Button = ({
	children,
	className,
	onButtonClick
} : ButtonType) => (
	<button onClick={onButtonClick} className={className} type="button">
		{children}
	</button>
)

export default Button;
