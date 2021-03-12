import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export interface AccountMenuProps {
	anchorEl: HTMLElement | null
	open: boolean
	onClose: () => void
}

export function AccountMenu(props:AccountMenuProps) {
	return(
		<div>
			<Menu
				keepMounted
				anchorEl={props.anchorEl}
				open={props.open}
				onClose={props.onClose}
			>
				<Link to="/user" style={{ textDecoration: "none", color: "inherit" }} >
					<MenuItem >
						Account
					</MenuItem>
				</Link>

				<Link to="/login" style={{ textDecoration: "none", color: "inherit" }} >
					<MenuItem >
						Logout
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
