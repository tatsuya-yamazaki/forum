import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SignupButton } from './SignupButton';
import { LoginButton } from './LoginButton';
import { UserButton } from './UserButton';

const useStyles = makeStyles((theme: Theme) =>
	  createStyles({
		      root: {
			      flexGrow: 1,
			          },
		      AccountButtons: {
			      marginLeft: 'auto',
			          },
		    }),
);

export function AccountButtons() {
	const classes = useStyles();

	return(
		<div className={classes.AccountButtons} >
			<SignupButton />
			<LoginButton />
			<UserButton />
		</div>
	);
}
