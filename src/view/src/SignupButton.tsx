import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { isLoggedIn } from './Auth';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		Login: {
		},
	}),
);

export function SignupButton() {
	const classes = useStyles();

	if ( isLoggedIn() ) {
		return null;
	}

	return(
		<Link to="/signup" style={{ textDecoration: "none" }} >
			<Button className={classes.Login} variant="contained" color="primary">Signup</Button>
		</Link>
	);
}
