import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AccountMenu } from './AccountMenu';
import { isLoggedIn } from './Auth';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		AccountButton: {
		},
	}),
);

export function AccountButton() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const classes = useStyles();

	if ( !isLoggedIn() ) {
		return null;
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return(
		<div>
			<IconButton className={classes.AccountButton} onClick={handleClick}>
				<AccountCircle>
				</AccountCircle>
			</IconButton>
					<AccountMenu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					/>
		</div>
	);

}
