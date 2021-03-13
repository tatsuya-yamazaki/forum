import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { QuestionTitle } from './QuestionTitle';
import { QuestionTags } from './QuestionTags';
import { QuestionStatus } from './QuestionStatus';

export type Question = {
        id: number
        user: string
        title: string
        tags: string[]
        closed: boolean
}

interface QuestionBlockProps {
	question: Question
}

export function QuestionBlock (props:QuestionBlockProps) {
	return (
		<div>
			<Card>
				<CardContent>
					<QuestionTitle title={props.question.title} />
					<QuestionTags tags={props.question.tags} />
					<div style={{ marginTop: '1em' }} >
						<QuestionStatus status={props.question.closed} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
