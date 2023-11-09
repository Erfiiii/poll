import { PropsWithChildren } from "react";
import Poll from "./components/Poll";
import { ClientContextProvider } from "./ClientContext";
import { client } from "./local-storage-client";
import { Config } from "./types";

interface OwnProps {
  config: Config;
}

type Props = PropsWithChildren<OwnProps>;

function App(props: Props) {  
  return (
    <ClientContextProvider value={client}>
      <Poll config={props.config} />
    </ClientContextProvider>
  );
}

export default App;
