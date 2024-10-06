/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 13:49:30
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-06 19:23:33
 */
"use client";
import styles from "./page.module.scss";
import ConfigUI from "./configUI/index";
import PreviewUI from "./previewUI";
import checkSetting from "./mock/check";
import { useEffect } from "react";
import printOutStore, { IRestaurantInfo } from "./store";
import { IPreviewSectionAttributes } from "../interface";
const Page = () => {
  const fetchRestaurantInfo = async () => {
    const restaurantInfo: IRestaurantInfo = {
      name: 'Desert Moon',
      contactPhone: '911',
      streetAddress: 'shanghai',
      city: 'city',
      state: 'state',
      zipCode: '01234'
    }
    printOutStore.saveRestaurantInfo(restaurantInfo);
    printOutStore.savePreviewData(checkSetting.data.configDetails as unknown as Array<IPreviewSectionAttributes>);
  }
  useEffect(() => {
    fetchRestaurantInfo();
  }, [])
  return (
    <div className={styles["page-container"]}>
        <ConfigUI/>
        <PreviewUI/>
    </div>
  );
};
export default Page;
