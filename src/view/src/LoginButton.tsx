import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { isLoggedIn } from './isLoggedIn';

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
		<Button className={classes.Login} variant="contained" color="default">Login</Button>
	);
}
