import { PropsWithChildren } from "react";
import Poll from "./components/Poll";
import { ClientContextProvider } from "./ClientContext";
import { load, addOption } from "./utils";

const client = {
  load,
  addOption
}
interface OwnProps {
  config: {
    question: string;
    options: string[];
  };
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
