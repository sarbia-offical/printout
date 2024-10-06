import HeaderSection from "../headerSection"
import FooterSection from "../footerSection"
import { IPreviewSectionAttributes } from "@/app/interface"

interface IPreviewComponentList {
    key: string,
    Component: (props: IPreviewSectionAttributes) => JSX.Element
}
export const previewComponentList: Array<IPreviewComponentList> = [
    {
        key: 'header-section',
        Component: HeaderSection
    },
    {
        key: 'footer-section',
        Component: FooterSection
    }
]