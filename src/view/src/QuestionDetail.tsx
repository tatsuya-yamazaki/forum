import { useParams } from 'react-router-dom';
import { Question, QuestionBlock } from './QuestionBlock';
import { Post, PostBlock } from './PostBlock';

interface Params {
	id: string
}

export function QuestionDetail () {
	const { id } = useParams<Params>();
	const questionId = parseInt(id);

	const question:Question = getQuestion(questionId);
	const posts: Post[] = getPosts(questionId);

	const postComponents: JSX.Element[] = [];
	for ( let post of posts ) {
		postComponents.push(
			<div>
				<PostBlock
					post={post}
				/>
			</div>
		);
	}

	return (
		<div>
			<QuestionBlock question={question} />
			{postComponents}
		</div>
	);
}

function getQuestion(questionId: number):Question {
	const question:Question = {
		id: 1,
		user: 'frontbear123',
		title: 'Single Page Applicationがフロントエンド開発において用いられるようになったのはなぜですか？',
		tags: ['SPA', 'javascript', 'React.js', 'Vue.js'],
		closed: false,
	};
	return question;
}

function getPosts(questionId: number): Post[] {
	const posts:Post[] = [
		{
			questionId:1,
			postId:0,
			user:'frontbear123',
			respondTo:0,
			content:'普段はjQueryなどを使用しているフロントエンジニアです。昨今Single Page applicationがフロントエンド開発において用いられるようになりましたが、\nいまいち利点がわかりません。従来通りのjavascript開発ではだめなのでしょうか。また、typescriptの役割についても知りたいです',
			},
		{
			questionId:1,
			postId:1,
			user:'superfrontbear234',
			respondTo:0,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:2,
			user:'superfrontbear234',
			respondTo:0,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:3,
			user:'superfrontbear234',
			respondTo:3,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:4,
			user:'superfrontbear234',
			respondTo:5,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:5,
			user:'superfrontbear234',
			respondTo:8,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:6,
			user:'superfrontbear234',
			respondTo:0,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:7,
			user:'superfrontbear234',
			respondTo:0,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
		{
			questionId:1,
			postId:8,
			user:'superfrontbear234',
			respondTo:0,
			content:'Single Page Applicationの利点は、CGIなどと違いクライアント側で基本的な描画が完結するので描画速度が早く、\nかつ煩雑になりやすいjQueryなどの開発と比べてクリーンなコードですばやく開発できることです。FacebookやGoogleなどの先進的なIT企業が自らのビジネスに使用しているライブラリを外部に公開したものなので、発展が早く、開発が活発で信頼性が高いです。\nGAFAと呼ばれる企業が主導することでトレンドを作りやすく、多くの技術者がこれら技術を選択するため、改善の良い循環を生み出しています。この流れに乗っかることが、ビジネスを効率よく進める上ではメリットが大きいためよく採用されているのです。\n日本語情報が英語に比べ少ないという点により日本では採用が遅れていますが、今後フロントエンド開発における主流となっていくことは間違いないでしょう。今からでも遅くありませんので、今後もエンジニアとして、Web系企業として生き残っていきたいのであれば習得しておいて損はありません',
			},
	];
	return posts;
}

