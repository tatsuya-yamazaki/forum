import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { QuestionTitle } from './QuestionTitle';
import { QuestionTags } from './QuestionTags';
import { QuestionStatus } from './QuestionStatus';

interface QuestionListItemProps {
	id: number
	title: string
	contentHead: string
	tags: string[]
	closed: boolean
	answerCount: number
}

export function QuestionListItem(props:QuestionListItemProps) {
	return (
		<div>
			<Card variant='outlined'>
				<CardContent>

					<Link to={`/question/detail/${props.id}`} style={{ textDecoration: "none" }} >
						<Button
							style={
								{
									textTransform: 'none',
										justifyContent: 'left',
								}
							}
							fullWidth={true} >
							<QuestionTitle title={props.title} />
						</Button>
					</Link>

					<Typography variant="body2">
						{props.contentHead}...
					</Typography>

					<QuestionTags tags={props.tags} />

					<div style={{ display: 'flex', marginTop: '1em' }} >
						<div style={{ marginRight: '1em' }} >
							<QuestionStatus status={props.closed} />
						</div>

						<Typography variant="body2">
							answers: {props.answerCount}
						</Typography>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
