/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-06 19:09:53
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-06 22:09:59
 */
import { observer } from "mobx-react"
import printOutStore from "../store"
import { previewComponentList } from "./mapData/previewComponentMapData";
import "./index.scss"
import { autorun, toJS } from "mobx";
import { useEffect, useState } from "react";
import { IPreviewSectionAttributes } from "@/app/interface";
const PreviewContainer = () => {
    const [previewData, setPreviewData] = useState<Array<IPreviewSectionAttributes>>(toJS(printOutStore.getPreviewData));
    useEffect(() => {
        const dispose = autorun(() => {
            setPreviewData(toJS(printOutStore.getPreviewData))
        })
        return () => dispose();
    }, [])
    return (
        <div className="preview-container">
            {
                previewData.map((ele: IPreviewSectionAttributes, index: number) => {
                    const { Component } = previewComponentList.find(fin => fin.key === ele.id) || {}
                    return <div key={index}>
                        {
                            Component && !ele.hide && <Component {...ele}/>
                        } 
                    </div>
                })
            }
        </div>
    )
}

export default observer(PreviewContainer)