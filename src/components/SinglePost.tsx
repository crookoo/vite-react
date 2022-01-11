import { Link, useParams } from 'react-router-dom';
import Category from '../model/Category';
import Props from '../model/IProps';
import Post from '../model/Post';
import Icon from './Icon';
import Parser from './Parser';


export default function SinglePost(props: Props): JSX.Element {
    const { categorySlug, postSlug } = useParams();
    const post: Post | undefined = props.data.getFromPosts(postSlug!);
    const category: Category | undefined = props.data.getFromCategories(categorySlug!);

    if (post && category) {
        return (
            <div className="post-container pb-4">
                <div className="post-icon-stage">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col">
                                <Icon icon={post.icon} color={category.color} className="post-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <h3 className="fs-6 my-4r">
                                <Link to={`/${category.slug}`} className="badge rounded-pill text-dark" style={{ backgroundColor: category.color }}>{category.name}</Link>
                            </h3>
                            <h1 className="mb-3 text-break">{post.title}</h1>
                            <h2 className="fs-5"><Parser code={post.excerpt} /></h2>
                            <div className="hr-short" style={{ backgroundColor: category.color }}></div>

                            <div className="content mb-4">
                                <Parser code={post.content} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )

}