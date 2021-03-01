import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { isLoggedIn } from './isLoggedIn';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		UserButton: {
		},
	}),
);

export function UserButton() {
	const classes = useStyles();

	if ( !isLoggedIn() ) {
		return null;
	}

	return(
		<div>
			<p>a</p>
		</div>
	);
}
