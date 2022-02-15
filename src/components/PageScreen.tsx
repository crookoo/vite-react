import { useLocation } from 'react-router-dom';
import parseHTML from 'html-react-parser';
import Props from "../model/IProps";
import Page from "../model/Page";
import MetaDecorator from './partials/MetaDecorator';

export default function PageScreen(props: Props): JSX.Element {
    const { pathname } = useLocation();
    const trimmedPathname: string = pathname.slice(1);
    const page: Page | undefined = props.data.getFromPages(trimmedPathname);

    return (
        <div className="container pt-6 pb-4">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    {
                        page ? (
                            <>
                                <MetaDecorator title={page.metaTitle} description={page.metaDescription} />
                                <h1>{page.title}</h1>
                                {parseHTML(page.content)}
                            </>
                        ) : (
                            <div>No content available</div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}