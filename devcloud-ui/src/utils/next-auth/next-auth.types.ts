import type { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";

export interface AuthEnabledComponentConfig {
  authenticationRequired: boolean;
}

export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> & AuthEnabledComponentConfig;

export type AppAuthProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & Partial<AuthEnabledComponentConfig>;
};
