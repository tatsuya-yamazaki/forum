import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

export function AccountButton() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return(
		<div>
			<div>
				<IconButton onClick={handleClick}>
					<AccountCircle />
				</IconButton>
			</div>

			<div>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}
					keepMounted
				>
					<Link to="/user" style={{ textDecoration: "none", color: "inherit" }} >
						<MenuItem onClick={handleClose} >
							Account
						</MenuItem>
					</Link>

					<Link to="/login" style={{ textDecoration: "none", color: "inherit" }} >
						<MenuItem onClick={handleClose} >
							Logout
						</MenuItem>
					</Link>
				</Menu>
			</div>
		</div>
	);

}
