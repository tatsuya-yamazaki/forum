import Typography from '@material-ui/core/Typography';

interface QuestionTitleProps {
	title: string
}

export function QuestionTitle (props:QuestionTitleProps) {
	return (
		<div>
			<Typography variant="h6" >
				{props.title}
			</Typography>
		</div>
	);
}
