import { Helmet } from "react-helmet";

export default function MetaDecorator(props: { title: string, description: string }) {
    return (
        <Helmet>
            <title>{`${props.title} - stage4`}</title>
            <meta name="description" content={props.description} />
        </Helmet>
    );
}