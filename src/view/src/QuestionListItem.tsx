import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { QuestionListItemTags } from './QuestionListItemTags';

interface QuestionListItemProps {
	title: string
	contentHead: string
	tags: string[]
	answerCount: number
}

export function QuestionListItem(props:QuestionListItemProps) {
	return (
		<div>
			<Card variant='outlined'>
				<CardContent>

					<Button
						style={
							{
								textTransform: 'none',
								justifyContent: 'left',
							}
						}
						fullWidth={true} >
						<Typography variant="h6" >
							{props.title}
						</Typography>
					</Button>

					<Typography variant="body2">
						{props.contentHead}...
					</Typography>

					<QuestionListItemTags tags={props.tags} />

					<Typography variant="body2">
						answers: {props.answerCount}
					</Typography>

				</CardContent>
			</Card>
		</div>
	);
}
