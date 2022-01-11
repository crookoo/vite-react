import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Post from '../model/Post';
import Props from '../model/IProps';
import Category from '../model/Category';
import Parser from './Parser';
import Icon from './Icon';


export default function Home(props: Props): JSX.Element {
    const categories = props.data.getAllCategories();
    let settings = {
        infinite: false,
        slidesToShow: 5.5,
        slidesToScroll: 2,
        draggable: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5.5,
                    draggable: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4.5,
                    draggable: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3.5,
                    arrows: false,
                    dots: false,
                    draggable: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2.5,
                    arrows: false,
                    dots: false,
                    draggable: true,
                }
            }
        ]
    };

    if (categories) {
        return (
            <div className="category-container container pt-6 pb-4">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        {categories.map((category: Category) => (
                            <div key={category.id} className="category-wrapper">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-start">
                                        <h2 className="my-3 me-3">{category.name}</h2>
                                        <div className="d-flex align-items-center">
                                            <span className="badge rounded-pill" style={{ backgroundColor: category.color }}>{category.posts.length} Features</span>
                                        </div>
                                    </div>
                                    <span className="d-flex align-items-center"><Link to={`/${category.slug}`}>mehr</Link></span>
                                </div>
                                <div className="category-description mb-4">
                                    <Parser code={category.description} />
                                </div>
                                <Slider {...settings}>
                                    {category.posts.map((post: Post) => (
                                        <div key={post.id} className="feature position-relative">
                                            <Icon icon={post.icon} color={category.color} className="img-fluid mb-2" />
                                            <h3 className="mb-1">
                                                <Link to={`/${category.slug}/${post.slug}`} className="text-reset text-break stretched-link">
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <Parser code={post.excerpt} />
                                        </div>
                                    ))}
                                </Slider>
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
