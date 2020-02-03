import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	navigation: {
		minWidth: '250px'
	}
});

const Navigation = ({ drawerOpen, drawerClose }) => {
	const classes = useStyles();
	return (
		<Drawer open={drawerOpen} onClose={drawerClose}>
			<nav className={classes.navigation}>2</nav>
		</Drawer>
	);
};

export default Navigation;
