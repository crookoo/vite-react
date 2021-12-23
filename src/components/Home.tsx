import { Link } from 'react-router-dom';
import Post from '../model/Post';
import Props from '../model/IProps';
import Category from '../model/Category';
import Parser from './Parser';
import Slider from 'react-slick';


export default function Home(props: Props): JSX.Element {
    const categories = props.data.getAllCategories();
    var settings = {
        infinite: false,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        draggable: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4.5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3.5,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2.5,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    };

    if (categories) {
        return (
            <div className="category-container">
                {categories.map((category: Category) => (
                    <div key={category.id} className="category-wrapper">
                        <div className="d-flex justify-content-between">
                            <h2 className="mb-3">{category.name}</h2>
                            <span className=""><Link to={`/${category.slug}`}>mehr</Link></span>
                        </div>
                        <div className="category-description mb-4">
                            {category.description}
                        </div>
                        <div className="">
                            <Slider {...settings}>
                                {category.posts.map((post: Post) => (
                                    <div key={post.id} className="feature position-relative">
                                        <img src="https://via.placeholder.com/150" className="img-fluid mb-2" />
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
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div></div>
    )
}
