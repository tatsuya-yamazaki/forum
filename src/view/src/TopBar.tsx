import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { TitleBlock } from './TitleBlock';
import { SearchArea } from './SearchArea';
import { AccountButtons } from './AccountButtons';

export function TopBar() {
	return(
		<AppBar position="sticky">
			<Toolbar>
				<TitleBlock />
				<SearchArea />
				<AccountButtons />
			</Toolbar>
		</AppBar>
	);
}
