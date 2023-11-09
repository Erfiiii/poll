import { createContext, PropsWithChildren, useContext } from "react";
import { Config, Option, Poll } from "./types";

export interface ClientContextType {
  load: (config: Config) => Promise<Poll>;
  addOption: (option: Option, config: Config) => Promise<void>;
}
export const ClientContext = createContext<ClientContextType | null>(null);

export const useClientContext = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (context === null) {
    throw new Error(
      "ClientContextProvider must be used inside the <ClientContextProvider/>"
    );
  }
  return context;
};

interface OwnProps {
  value: ClientContextType;
}

type Props = PropsWithChildren<OwnProps>;

export function ClientContextProvider(props: Props) {
  return (
    <ClientContext.Provider value={props.value}>
      {props.children}
    </ClientContext.Provider>
  );
}
