import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '=', '0', '-', 'C', '+'];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	return (
		<div className={styles.container}>
			<div className={styles.display}>
				<span className={styles.spanDisplay}>0</span>
			</div>
			<div className={styles['buttons-container']}>
				{NUMS.map((key) => {
					return (
						<button className={styles.button} key={key}>
							{key}
						</button>
					);
				})}
			</div>
		</div>
	);
};
