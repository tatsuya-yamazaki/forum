import { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

interface QuestionListItemTagsProps {
	tags: string[]
}

export function QuestionListItemTags(props:QuestionListItemTagsProps) {
	const tags: JSX.Element[] = []; 
	for ( let tag of props.tags ) {
		tags.push(
			<Chip
				label={tag}
				size='small'
			/>
			);
	};

	return (
		<div>
			{tags}
		</div>
	);
}
