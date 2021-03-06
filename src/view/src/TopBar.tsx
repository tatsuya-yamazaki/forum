import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { TitleBlock } from './TitleBlock';
import { SearchArea } from './SearchArea';
import { AccountBar } from './AccountBar';

export function TopBar() {
	return(
		<AppBar position="sticky" color="default">
			<Toolbar>
				<TitleBlock />
				<SearchArea />
				<AccountBar />
			</Toolbar>
		</AppBar>
	);
}
