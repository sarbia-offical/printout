import { IPreviewSectionAttributes } from "@/app/interface"
import { useEffect, useState } from "react";
import TextLine from "../components/TextLine";
import "./index.scss"
const HeaderSection = (props: IPreviewSectionAttributes) => {
    const [text, setText] = useState<string>('');
    useEffect(() => {
        const text = props.children['header-section-text']
        setText(text.value);
    }, [props])
    return <div className="header-section">
        {
            text && <TextLine text={text}/>
        }
    </div>
}
export default HeaderSection;