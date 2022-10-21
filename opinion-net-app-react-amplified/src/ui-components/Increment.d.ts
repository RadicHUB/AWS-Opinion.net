/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type IncrementProps = React.PropsWithChildren<Partial<ViewProps> & {
    state?: "Default" | "Focused" | "Hover" | "Inactive" | "Pressed";
    type?: "Add" | "Subtract";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Increment(props: IncrementProps): React.ReactElement;
