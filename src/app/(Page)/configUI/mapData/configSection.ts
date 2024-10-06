import { IRenderConfigProps, ITag } from "@/app/interface";
import React from "react";
import RenderInput from "../renderTemplate/renderInput";
import RenderRadioGroup from "../renderTemplate/renderRadioGroup";
import renderSpaceTag from "../renderTemplate/renderSpaceTag";
import RenderCheckboxGroup from "../renderTemplate/renderCheckboxGroup";

export const renderChildComponent: Record<ITag, (props: IRenderConfigProps) => React.ReactNode> = {
    'input': RenderInput,
    'radioGroup': RenderRadioGroup,
    'checkboxGroup': RenderCheckboxGroup,
    'spaceTag': renderSpaceTag
}