import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
				<MenuItem>MyAccount</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</div>
	);
}
