import printOutStore from "@/app/(Page)/store";
import { IPreviewSectionAttributes, IRenderConfigProps } from "@/app/interface"
import TextArea, { TextAreaProps } from "antd/es/input/TextArea";
import { autorun, toJS } from "mobx";
import { useEffect, useState } from "react"

/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-04 15:48:28
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-06 23:08:22
 */
const RenderInput = ({content, sectionId}: IRenderConfigProps) => {
    const [inputValue, setInputValue] =useState<string>('');
    const [disabledInput, setDisabledInput] =useState<boolean>(false);
    const onChange: TextAreaProps['onChange'] = (e) => {
        const value = e.target.value;
        const contentId = content.defaultValue[0].id
        setInputValue(value);
        const previewData = toJS(printOutStore.getPreviewData)
        const transformPreviewData = previewData.map((fin: IPreviewSectionAttributes) => {
            if(fin.id === sectionId && contentId){
                fin.children[contentId].value = e.target.value
                return { ...fin }
            }
            return fin;
        })
        printOutStore.savePreviewData(transformPreviewData);
    }
    useEffect(() => {
        const dispose = autorun(() => {
            const previewData = toJS(printOutStore.getPreviewData);
            const moduleId = content.defaultValue[0].id
            const currentItem = previewData.find((fin: IPreviewSectionAttributes) => fin.id === sectionId)
            setInputValue(currentItem?.children[moduleId].value || '');
            setDisabledInput(currentItem?.children[moduleId].hide as boolean);
            
        });
        return () => dispose();
    }, [content, sectionId])
    return (
        <div className="render-input">
            <TextArea
                size="large"
                showCount
                maxLength={300}
                disabled={disabledInput}
                value={inputValue}
                onChange={onChange}>

            </TextArea>
        </div>
    )
}
export default RenderInput