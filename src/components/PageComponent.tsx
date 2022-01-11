import { useLocation } from 'react-router-dom';
import parseHTML from 'html-react-parser';
import Props from "../model/IProps";
import Page from "../model/Page";

export default function PageComponent(props: Props): JSX.Element {
    const { pathname } = useLocation();
    const trimmedPathname: string = pathname.slice(1);
    const page: Page | undefined = props.data.getFromPages(trimmedPathname);

    if (page) {
        return (
            <div className="container pt-6 pb-4">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <h1>{page.title}</h1>
                        {parseHTML(page.content)}
                    </div>
                </div>
            </div >
        )
    }
    return <div></div>
}