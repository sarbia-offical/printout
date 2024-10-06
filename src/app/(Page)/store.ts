/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-04 22:37:12
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-05 00:56:11
 */
import { makeAutoObservable, toJS } from "mobx"
import { IPreviewSectionAttributes } from "../interface";
import { handleResetRestaurantInfo } from "./utils"

export interface IRestaurantInfo {
    name: string;
    contactPhone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string
}
interface ActiveStore {
    previewData: Array<IPreviewSectionAttributes>;
    version: number;
    urlParamsType: string;
    restaurantInfo: IRestaurantInfo;
    defaultConfigTemplateData: Array<IPreviewSectionAttributes>
}
class PrintOutStore {
    activeStore: ActiveStore = {
        previewData: [],
        version: 0,
        urlParamsType: 'Check',
        restaurantInfo: {
            name: '',
            contactPhone: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        },
        defaultConfigTemplateData: []
    }
    constructor() {
        makeAutoObservable(this);
    }
    savePreviewData = (previewData: Array<IPreviewSectionAttributes>) => {
        const fusionPreviewData = handleResetRestaurantInfo(previewData, toJS(this.activeStore.restaurantInfo));
        this.activeStore.previewData = [...fusionPreviewData];
    }
    get getPreviewData() {
        return this.activeStore.previewData
    }
    saveRestaurantInfo(data: any) {
        this.activeStore.restaurantInfo = {...data};
    }
    get getRestaurantInfo() {
        return this.activeStore.restaurantInfo
    }
}
const printOutStore = new PrintOutStore() 
export default printOutStore;