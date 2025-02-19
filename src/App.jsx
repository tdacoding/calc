import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '=', '0', '-', 'C', '+'];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [resultedFlag, setResultedFlag] = useState(false);

	const keyPressed = (key) => {
		if (!Number.isNaN(+key)) {
			!operator
				? setOperand1((oper) => oper + key)
				: setOperand2((oper) => oper + key);
		} else {
			operatorKeyPressed(key);
		}
	};

	const operatorKeyPressed = (key) => {
		if (key === 'C') {
			setOperator('');
			setOperand1('');
			setOperand2('');
			setResultedFlag(false);
			return;
		}
		if (key === '+' && !operator) {
			setOperator('+');
			setResultedFlag(false);
			return;
		}
		if (key === '-' && !operator) {
			setOperator('-');
			setResultedFlag(false);
			return;
		}
		if (key === '=' && operator) {
			const res = eval(operand1 + operator + operand2);
			setResultedFlag(true);
			setOperator('');
			setOperand1(res);
			setOperand2('');
			return;
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.display}>
				<span
					className={
						resultedFlag
							? styles.spanDisplay + ' ' + styles.result
							: styles.spanDisplay
					}
				>
					{operand1 + operator + operand2}
				</span>
			</div>
			<div className={styles['buttons-container']}>
				{NUMS.map((digit) => {
					return (
						<button
							className={styles.button}
							key={digit}
							onClick={() => keyPressed(digit)}
						>
							{digit}
						</button>
					);
				})}
			</div>
		</div>
	);
};
