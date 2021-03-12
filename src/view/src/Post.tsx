import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import { PostContent } from './PostContent';
import { PostReplyButton } from './PostReplyButton';

export type Post = {
        questionId: number
        postId: number
        user: string
        respondTo: number
        content: string
}

interface PostProps {
	post: Post
}

export function Post(props:PostProps){
	let respondTo: JSX.Element | null;
	if ( props.post.respondTo === 0 ) {
		respondTo = <div></div>;
	} else {
		respondTo =
		<Typography variant="body2" >
			&gt;&gt;{props.post.respondTo}
		</Typography>;
	}

	return (
		<div>
			<Card variant="outlined" >
				<CardContent>
					<Typography variant="body2" >
						{props.post.postId}:
					</Typography>
					<Typography variant="h6" >
						{props.post.user}
					</Typography>
					<div>
						{respondTo}
					</div>
					<PostContent content={props.post.content} />
					<Link to="/question/post/reply" style={{ textDecoration: "none" }} >
						<div style={{ textAlign: "right"  }} >
							<PostReplyButton />
						</div>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}
