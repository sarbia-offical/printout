/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-10-05 00:26:57
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-05 18:24:41
 */
import { IPreviewSectionAttributes } from "../interface";
import { IRestaurantInfo } from "./store";

/**
 * 设置餐厅信息
 * @param previewData 
 * @param restaurantInfo 
 * @returns 
 */
export const handleResetRestaurantInfo = (
    previewData: Array<IPreviewSectionAttributes>,
    restaurantInfo: IRestaurantInfo
) => {
    const { name, contactPhone, streetAddress, city, state, zipCode } = restaurantInfo;
    previewData.forEach((ele: IPreviewSectionAttributes) => {
        if(ele.id === 'restaurant-info-section'){
            ele.children['restaurant-info-section-restaurantName'].value = name
            ele.children['restaurant-info-section-phoneNumber'].value = contactPhone;
            ele.children['restaurant-info-section-address'].value = JSON.stringify({
                streetAddress: streetAddress || 'Street Address',
                city: city || 'city',
                state: state || 'state',
                zipCode: zipCode || 'zipCode'
            })
        }
    })
    return previewData;
};

/**
 * section的children显示状态随着section改变
 * @param previewItem 
 * @param status 
 * @returns 
 */
export const handleToggleChildrenVisible = (previewItem: IPreviewSectionAttributes, status: boolean) => {
    if(previewItem.children){
        Object.keys(previewItem.children).forEach(ele => {
            previewItem.children[ele].hide = status;
        })
    }
    return previewItem;
}