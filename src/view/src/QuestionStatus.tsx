import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

interface QuestionStatusProps {
	status: boolean
}

export function QuestionStatus (props:QuestionStatusProps) {
	let label: string;
	let color: "default" | "primary" | "secondary" | undefined;
	let icon: JSX.Element;

	if (props.status) {
		label='Closed'
		color='default'
		icon=<SentimentVerySatisfiedIcon />
	} else {
		label='Open'
		color='primary'
		icon=<SentimentVeryDissatisfiedIcon />
	}

	const questionStatus = <Chip
		label={label}
		size='small'
		color={color}
		icon={icon}
	/>;

	return (
		<div>
			<Typography variant="body2" >
				status:{questionStatus}
			</Typography>
		</div>
	);
}
