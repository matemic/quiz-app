import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	Home: {
		marginTop: '5rem'
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.Home}>
			<Paper square>
				<Typography variant="h3">Wanna try?</Typography>
			</Paper>
		</div>
	);
};

export default Home;
