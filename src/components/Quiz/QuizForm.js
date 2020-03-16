import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { options } from './quizCategories';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	quizForm: {
		width: '60%'
	},
	selectLabel: {
		margin: '1rem 0'
	},
	btnGenerateQuiz: {
		backgroundColor: '#d90303',
		color: '#fff',
		width: '100%',
		padding: '10px',
		margin: '1rem 0'
	}
}));

const QuizForm = () => {
	const classes = useStyles();
	const [ quizForm, setQuizForm ] = useState({
		number: {
			id: 'number-of-questions-input',
			label: 'Number of questions',
			type: 'number',
			value: ''
		},
		category: {
			id: 'select-category-input',
			label: 'Select category',
			options,
			value: ''
		},
		difficulty: {
			id: 'select-difficulty-input',
			label: 'Select difficulty',
			options: [
				{
					id: 'any',
					name: 'Any Difficulty'
				},
				{
					id: 'easy',
					name: 'Easy'
				},
				{
					id: 'medium',
					name: 'Medium'
				},
				{
					id: 'hard',
					name: 'Hard'
				}
			],
			value: ''
		},
		type: {
			id: 'select-type-input',
			label: 'Select type',
			options: [
				{
					id: 'any',
					name: 'Any type'
				},
				{
					id: 'multiple',
					name: 'Multiple Choice'
				},
				{
					id: 'boolean',
					name: 'True / False'
				}
			],
			value: ''
		}
	});

	const handleChange = (event, key) => {
		setQuizForm({
			...quizForm,
			[key]: {
				...quizForm[key],
				value: event.target.value
			}
		});
	};

	const formInputs = Object.keys(quizForm).map((input, id) => {
		const key = quizForm[input];
		return (
			<React.Fragment key={input + id}>
				{key.type === 'number' ? (
					<TextField
						inputProps={{
							name: key.id,
							min: '10',
							max: '50'
						}}
						fullWidth
						label={key.label}
						required
						id={key.id}
						type={key.type}
						onChange={(e) => handleChange(e, input)}
					/>
				) : (
					<React.Fragment>
						<InputLabel className={classes.selectLabel} htmlFor={key.id}>
							{key.label}
						</InputLabel>
						<Select
							fullWidth
							native
							label={key.label}
							inputProps={{
								name: key.id,
								id: key.id
							}}
							onChange={(e) => handleChange(e, input)}
						>
							{key.options.map((option, id) => (
								<option key={option + id} value={option.id ? option.id : option}>
									{option.name}
								</option>
							))}
						</Select>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	});

	return (
		<div className={classes.container}>
			<Typography variant="h2">Generate Quiz</Typography>
			<form className={classes.quizForm}>
				{formInputs}
				<Button className={classes.btnGenerateQuiz} component={Link} to="/quiz" variant="contained">
					Create Quiz
				</Button>
			</form>
		</div>
	);
};

export default QuizForm;
