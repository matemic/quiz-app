import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	HomeBox: {
		width: '80%',
		padding: '2rem'
	},
	Heading: {
		textAlign: 'center',
		margin: '1rem 0 2rem 0'
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography className={classes.Heading} variant="h2">
				About Quiz App
			</Typography>
			<Grid container spacing={3}>
				<Grid item md={6}>
					<Typography>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eius minima consequatur debitis,
						reiciendis laboriosam accusamus illum adipisci facere cupiditate voluptatem quaerat odit
						assumenda, cumque odio ducimus obcaecati, ab ipsa? Cupiditate vel ducimus harum illum
						consectetur, autem totam alias laboriosam qui molestias tempore! Ab dolor sit quas vel illum!
						Unde ad expedita ullam ea cumque repudiandae, ipsam odit veniam reprehenderit? Consectetur sunt
						officia molestiae enim labore perspiciatis quidem fuga corporis sit culpa quam neque unde
						laborum eius nisi, ullam, animi, magni dolorum placeat fugiat molestias iste. Molestiae
						distinctio optio esse!
					</Typography>
				</Grid>
				<Grid item>
					<Divider variant="middle" orientation="vertical" />
				</Grid>
				<Grid item md={4}>
					<Typography className={classes.Heading} variant="h4">
						Ready for a challenge?
					</Typography>
					<Button component={Link} to="/quiz-form" variant="contained">
						Go to Quiz
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
