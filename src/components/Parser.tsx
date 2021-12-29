import { useEffect } from "react";
import parseHTML, { DOMNode } from "html-react-parser";
import Prism from "prismjs";

interface ParserProps {
    code: string;
}

export default function Parser(props: ParserProps): JSX.Element {

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    
    return (
        <>
            {parseHTML(props.code, {
                replace: (node: DOMNode) => {
                    if (node.name === 'table') node.attribs.class = "table table-bordered";
                    if (node.name === 'pre') node.attribs.class = "language-js";
                }
            })}
        </>
    )
}