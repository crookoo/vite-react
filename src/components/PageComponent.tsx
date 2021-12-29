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
            <div>
                <h1>{page.title}</h1>
                {parseHTML(page.content)}
            </div>
        )
    }
    return <div></div>
}