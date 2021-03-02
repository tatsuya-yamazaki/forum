import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SignupButton } from './SignupButton';
import { LoginButton } from './LoginButton';
import { AccountButton } from './AccountButton';

const useStyles = makeStyles((theme: Theme) =>
	  createStyles({
		      root: {
			      flexGrow: 1,
			          },
		      AccountBar: {
			      marginLeft: 'auto',
			          },
		    }),
);

export function AccountBar() {
	const classes = useStyles();

	return(
		<div className={classes.AccountBar} >
			<SignupButton />
			<LoginButton />
			<AccountButton />
		</div>
	);
}
