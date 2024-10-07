/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-07 00:47:43
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-07 12:54:38
 */
import printOutStore from "@/app/(Page)/store";
import { IRenderConfigProps } from "@/app/interface";
import { Checkbox } from "antd";
import { autorun, toJS } from "mobx";
import { useEffect, useState } from "react";
import "./index.scss"

const RenderCheckboxGroup = ({ content, sectionId }: IRenderConfigProps) => {
    const { defaultValue, defaultSort } = content;
    const [ defaultValueOptions, setDefaultValueOptions] = useState<Array<any>>([]);
    const [ valueOptions, setValueOptions ] = useState<Array<any>>([]);
    useEffect(() => {
        setDefaultValueOptions(defaultValue);
    }, 
    [defaultSort, defaultValue])
    useEffect(() => {
        const dispose = autorun(() => {
            const checkBoxValue: Array<any> = [];
            const previewData = toJS(printOutStore.getPreviewData)
            console.log('previewData', previewData);
            const setting = previewData.find(fin => fin.id === sectionId)
            if(setting?.children){
                Object.keys(setting.children).forEach(key => {
                    checkBoxValue.push(!setting.children[key].hide ? key : '')
                })
            }
            setValueOptions(checkBoxValue);
        })
        return () => dispose();
    }, [sectionId])
    return (
        <div className="render-checkbox-group">
            <Checkbox.Group
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
                options={defaultValueOptions}
                value={valueOptions}>

            </Checkbox.Group>
        </div>
    )
}
export default RenderCheckboxGroup;