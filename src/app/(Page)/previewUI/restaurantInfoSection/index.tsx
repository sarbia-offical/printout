import { IPreviewSectionAttributes } from "@/app/interface";
import "./index.scss"
import { useEffect } from "react";
const RestaurantInfoSection = (props: IPreviewSectionAttributes) => {
    useEffect(() => {
        console.log('props', props);
        
    }, [props])
    return (
        <div className="restaurant-info-section">
            RestaurantInfoSection
        </div>
    )
}

export default RestaurantInfoSection;