import Chip from '@material-ui/core/Chip';

interface QuestionTagsProps {
	tags: string[]
}

export function QuestionTags (props:QuestionTagsProps) {
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
