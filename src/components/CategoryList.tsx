import { useParams, Link } from 'react-router-dom';
import Props from '../model/IProps';
import Post from '../model/Post';
import Parser from './Parser';
import Icon from './Icon';


export default function CategoryList(props: Props): JSX.Element {
    const { categorySlug } = useParams();
    const category = props.data.getFromCategories(categorySlug!);

    if (category) {
        return (
            <div className="container pt-6">
                <div className="row">
                    <div className="col-lg-5 col-xl-3 offset-xl-2">
                        <h2 className="my-3">{category.name}</h2>
                        <div className="mb-4">
                            <Parser code={category.description} />
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-5">
                        {category.posts.map((post: Post) => (
                            <div key={post.id} className="row border-top py-3 position-relative">
                                <div className="col-3">
                                    <Icon icon={post.icon} color={category.color} className="img-fluid mb-2" />
                                </div>
                                <div className="col category-list-text">
                                    <h2 className="mb-2">
                                        <Link to={`/${category.slug}/${post.slug}`} className="fs-3 stretched-link text-reset text-break">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <Parser code={post.excerpt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )

}