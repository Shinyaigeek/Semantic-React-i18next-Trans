import {
    DefaultNamespace,
    Namespace,
    TFuncKey,
    TFunction,
    Trans as TransBase,
} from "react-i18next";
import React from "react";
import { i18n } from "i18next";

export type TransProps<
    K extends TFuncKey<N> extends infer A ? A : never,
    N extends Namespace = DefaultNamespace,
    E extends keyof JSX.IntrinsicElements = "div"
    > = React.ComponentPropsWithRef<E> & {
        children?: React.ReactNode;
        components?:
        | readonly React.ReactNode[]
        | { readonly [tagName: string]: React.ReactNode };
        count?: number;
        defaults?: string;
        i18n?: i18n;
        i18nKey?: K;
        ns?: N;
        parent?: string | React.ComponentType<any> | null; // used in React.createElement if not null
        tOptions?: {};
        values?: {};
        t?: TFunction<N>;
    };


/*
replace
*/

export const Trans = Object.assign({}, TransBase, ExtendTransComponentMethods);