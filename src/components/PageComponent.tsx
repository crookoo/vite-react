import parseHTML from 'html-react-parser';
import Page from "../model/Page";

export default function PageComponent(props: { page: Page }) {
    return (
        <>
            {parseHTML(props.page.content)}
        </>
    )
}