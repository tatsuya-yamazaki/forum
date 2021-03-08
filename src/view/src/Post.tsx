
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
	return (
		<div>
			questionId:{props.post.questionId}
	postId:{props.post.postId}
	user:{props.post.user}
	respondTo:{props.post.respondTo}
	content:{props.post.content}
</div>
	);
}
