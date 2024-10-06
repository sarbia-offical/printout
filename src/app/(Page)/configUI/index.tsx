/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-10-03 20:05:00
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-05 17:48:37
 */
"use client";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from "react";
import defaultCheck from "./settingJson/defaultCheck";
import Block from "../configUI/components/block"
import { IBaseSettingMapData, IChildrenAttributes, ITag } from "@/app/interface";
import { renderChildComponent } from "./mapData/configSection";
import "./index.scss"

const ConfigUIContainer: ForwardRefRenderFunction<HTMLDivElement, unknown> = (
  _,
  ref
) => {

  const [configData, setConfigData] =
    useState<Array<IBaseSettingMapData<ITag>>>(defaultCheck);

  const renderChildren = (sectionChildren: Array<IChildrenAttributes<ITag>>, sectionId: string) => {
    return sectionChildren.map((item: IChildrenAttributes<ITag>, index: number) => {
        const ChildrenComponent = renderChildComponent[item.tag];
        return ChildrenComponent ? <ChildrenComponent content={item} sectionId={sectionId} key={index}></ChildrenComponent> : null;
    })
  }
  return (
    <div className="config-ui">
      {configData.map((sectionItem: IBaseSettingMapData<ITag>) => (
        <div key={sectionItem.id}>
            <Block content={sectionItem}>
                {
                    sectionItem.children && renderChildren(sectionItem.children, sectionItem.id)
                }
            </Block>
        </div>
      ))}
    </div>
  );
};

export default forwardRef(ConfigUIContainer);
