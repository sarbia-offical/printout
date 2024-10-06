/**
 * config 区域的类型
 */
export interface IOptions {
    id: string;
    label: string;
    value: string;
    checked: boolean;
    disabled?: boolean;
}

export interface IInput extends Omit<IOptions, 'label' | 'checked'> {}

// section元素接口
export interface ISectionAttributes {
    id: string;
    title: string;
    defaultValue: boolean;
    disabled: boolean
}

// children元素接口
export interface IChildrenAttributes<T> {
    tag: T;
    id?: string;
    hide?: boolean;
    defaultSort?: Array<string[]>;
    defaultValue: T extends 'input' ? Array<IInput> : Array<IOptions>;
}

export type ITag = 'input' | 'checkboxGroup' | 'spaceTag' | 'radioGroup'

// section和children进行拼接
export interface IBaseSettingMapData<T extends ITag> extends ISectionAttributes {
    children: Array<IChildrenAttributes<T>>
}

export interface IRenderConfigProps {
    content: IChildrenAttributes<ITag>,
    sectionId: string
}

/**
 * preview 区域的类型
 */
export interface IPreviewSectionAttributes {
    id: string;
    hide: boolean;
    sort?: Array<string[]>;
    children: {
        [key: string]: {
            value: any;
            hide: boolean 
        }
    }
}