/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LinkCreateFormInputValues = {
    title?: string;
    href?: string;
    image?: string;
};
export declare type LinkCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    href?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinkCreateFormOverridesProps = {
    LinkCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    href?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinkCreateFormProps = React.PropsWithChildren<{
    overrides?: LinkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LinkCreateFormInputValues) => LinkCreateFormInputValues;
    onSuccess?: (fields: LinkCreateFormInputValues) => void;
    onError?: (fields: LinkCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LinkCreateFormInputValues) => LinkCreateFormInputValues;
    onValidate?: LinkCreateFormValidationValues;
} & React.CSSProperties>;
export default function LinkCreateForm(props: LinkCreateFormProps): React.ReactElement;
