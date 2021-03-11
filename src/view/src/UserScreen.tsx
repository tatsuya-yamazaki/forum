import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AccountScreen } from './AccountScreen';
import { QuestionList } from './QuestionList';

export function UserScreen() {

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	let bottomScreen: JSX.Element;
	switch ( value ) {
		case 0 :
			bottomScreen = <AccountScreen />;
			break;
			
		case 1 :
			bottomScreen = <QuestionList />;
			break;

		//initial output
		default : 
			bottomScreen = <AccountScreen />;
			break;
	}

	return (
		<div>

			<div>
				<AppBar color="default" position="static"  >
					<Tabs value={value} onChange={handleChange} >
						<Tab label="Account"  />
						<Tab label="Question"  />
					</Tabs>
				</AppBar>
			</div>

			<div>
				{bottomScreen}
			</div>

		</div>
	);
}
