import Page from "../../model/Page";
import parseHTML from 'html-react-parser';

export default function Hero(props: { content: Page }) {
    return (
        <div className="py-5 px-4 text-center w-100 hero">
            {parseHTML(props.content.content)}
        </div>
    )
}