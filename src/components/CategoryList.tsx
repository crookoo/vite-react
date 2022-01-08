import { useParams, Link } from 'react-router-dom';
import parseHTML from 'html-react-parser';
import Props from '../model/IProps';
import Post from '../model/Post';
import Parser from './Parser';
import Icon from './Icon';


export default function CategoryList(props: Props): JSX.Element {
    const { categorySlug } = useParams();
    const category = props.data.getFromCategories(categorySlug!);

    if (category) {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <h2 className="my-3">{category.name}</h2>
                    <div className="mb-4">
                    <Parser code={category.description} />
                    </div>
                </div>
                <div className="col">
                    {category.posts.map((post: Post) => (
                        <div key={post.id} className="row border-bottom py-3 position-relative">
                            <div className="col-3">
                                {/* <img src="https://via.placeholder.com/160" className="img-fluid" /> */}
                                <Icon icon={post.icon} color={category.color} className="img-fluid mb-2" />
                            </div>
                            <div className="col category-list-text">
                                <h2 className="mb-2">
                                    <Link to={`/${category.slug}/${post.slug}`} className="fs-3 /*stretched-link*/ text-reset text-break">
                                        {post.title}
                                    </Link>
                                </h2>
                                <Parser code={post.excerpt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )

}