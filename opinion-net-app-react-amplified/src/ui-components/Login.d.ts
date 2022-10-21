/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

<<<<<<< HEAD
import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    GoogleLogin?: String;
    Login?: (event: SyntheticEvent) => void;
} & {
=======
import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
>>>>>>> cf8717873de6daa0efbe4d06256172b5784f7b9c
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
