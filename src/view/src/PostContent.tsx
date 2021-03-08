import Typography from '@material-ui/core/Typography';

interface PostContentProps {
	content: string
}

export function PostContent (props: PostContentProps) {
	const postContent: JSX.Element[] = [];

	for ( let text of props.content.split("\n") ) {
		postContent.push(
			<Typography variant="body2" >
				{text}
			</Typography>
		);
	}

	return (
		<div>
			{postContent}
		</div>
	);
}
