
/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-04 15:30:55
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-06 11:19:36
 */
import { IBaseSettingMapData, IPreviewSectionAttributes, ITag } from "@/app/interface"
import "./index.scss"
import { Checkbox, CheckboxProps } from "antd"
import React, { useEffect, useState } from "react"
import { autorun, toJS } from "mobx"
import printOutStore from "@/app/(Page)/store"
import { handleToggleChildrenVisible } from "../../../utils"

interface IBlockProps{
    content: IBaseSettingMapData<ITag>,
    children: React.ReactNode
}
const Block = ({ content, children }: IBlockProps) => {
    const [checked, setChecked] = useState<boolean>(true);
    const [disabled, setDisabled] = useState<boolean>(false);
    const onChange: CheckboxProps['onChange'] = (e) => {
        const previewData: Array<IPreviewSectionAttributes> = toJS(printOutStore.getPreviewData);
        const formatPreviewData = previewData.map((ele: IPreviewSectionAttributes) => {
            if (ele.id === content.id) {
                ele.hide = !e.target.checked
                const childrenItems = handleToggleChildrenVisible(ele, !e.target.checked);
            }
            return ele;
        })
        printOutStore.savePreviewData([...formatPreviewData])
    }
    useEffect(() => {
        const dispose = autorun(() => {
            const currentSection = toJS(printOutStore.getPreviewData).find(ele => ele.id === content.id);
            if(currentSection){
                setChecked(!currentSection.hide);
            }
        });
        return () => dispose();
    }, [content])
    const enhancedChildren = React.Children.map(children, info => {
        if(React.isValidElement(info)){
            return React.cloneElement(info as React.ReactElement)
        }
    })
    
    return (
        <div className="config-block">
            <Checkbox
                checked={checked}
                disabled={disabled}
                onChange={onChange}>
                    {
                        content.title
                    }
            </Checkbox>
            {
                enhancedChildren && enhancedChildren.length ? <div className="enhanced-container">{ enhancedChildren }</div> : null
            }
        </div>
    )
}
export default Block