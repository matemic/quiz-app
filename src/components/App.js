import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.App}>
			<Router />
		</div>
	);
};

export default App;
