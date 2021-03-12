import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
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

export function LoginButton() {
	const classes = useStyles();

	if ( isLoggedIn() ) {
		return null;
	}

	return(
		<Link to="/login" style={{ textDecoration: "none" }} >
			<Button className={classes.Login} variant="contained" color="default">Login</Button>
		</Link>
	);
}
