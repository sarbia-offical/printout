import { IPreviewSectionAttributes } from "@/app/interface"
import { useEffect, useState } from "react";
import TextLine from "../components/TextLine";
import DashedLine from "../components/DashedLine";
import "./index.scss"
const FooterSection = (props: IPreviewSectionAttributes) => {
    const [text, setText] = useState<string>('');
    useEffect(() => {
        const text = props.children['footer-section-text']
        setText(text.value);
    }, [props])
    return <div className="footer-section">
        <DashedLine/>
        {
            text && <TextLine text={text}/>
        }
    </div>
}
export default FooterSection;