import { useParams } from 'react-router-dom';
import Props from '../model/IProps';
import Parser from './Parser';


export default function SinglePost(props: Props): JSX.Element {
    const { categorySlug, postSlug } = useParams();
    const post = props.data.getFromPosts(postSlug!);
    const category = props.data.getFromCategories(categorySlug!);

    if (post && category) {
        return (
            <div className="post-container">
                <h5 className="display-1 fs-6 my-3">{category.name}</h5>
                <h1 className="mb-3 text-break">{post.title}</h1>
                <div className="content mb-4">
                    <Parser code={post.content} />
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )

}