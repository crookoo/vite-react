import { Helmet } from "react-helmet";

interface MetaDecoratorProps {
    title: string,
    description: string,
    url: string,
}

export default function MetaDecorator(props: MetaDecoratorProps) {

    const url: string = process.env.NODE_ENV === 'development' ?
        'http://localhost:3000' :
        'https://stage4.netlify.app';

    const descriptionWithoutPTags: string = props.description.replace(/^<p>|<\/p>\n*$/gm, '');

    return (
        <Helmet>
            <title>{`${props.title} - stage4`}</title>
            <meta name="description" content={descriptionWithoutPTags} />
            <link rel="canonical" href={`${url}${props.url}`} />
        </Helmet>
    );
}