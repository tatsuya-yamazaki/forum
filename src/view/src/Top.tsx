import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { TopBar } from './TopBar';

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'fixed',
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
	}),
);

function ScrollTop(props: Props) {
	const { children, window } = props;
	const classes = useStyles();
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			'#back-to-top-anchor',
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

export function Top() {
	 
	return (
		<React.Fragment>
			<TopBar />
			<div id="back-to-top-anchor" />
			<ScrollTop>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
	 
}
