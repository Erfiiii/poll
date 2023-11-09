import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import type { Option, Poll as PollType } from "./types";
import { load, save } from "./utils";
import PollOption from "./components/pollOption/PollOption";
import "./App.css";

interface OwnProps {
  config: {
    question: string;
    options: string[];
  };
}

type Props = PropsWithChildren<OwnProps>;

function App(props: Props) {
  const [poll, setPoll] = useState<PollType>(() => load(props.config));
  const [result, setResult] = useState<string>("");
  const totalCount = useMemo(
    () => poll.answers.reduce((pre, cur) => pre + cur.count, 0),
    [poll.answers]
  );

  const onSelectAnswer = useCallback(
    (option: Option) => {
      const newPoll = {
        ...poll,
        answers: poll?.answers.map((item) =>
          item.value === option.value
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
      setResult(option.value);
      setPoll(newPoll);
      save(newPoll);
    },
    [poll]
  );
  if (!poll) {
    return <>Loading...</>;
  }

  return (
    <div className="poll">
      <div className="question">{poll?.question}</div>
      <div className="answers">
        {poll.answers.map((answer) => (
          <PollOption
            key={answer.value}
            option={answer}
            onSelectOption={onSelectAnswer}
            totalCount={totalCount ?? 0}
            isSelected={answer.value === result}
            disabled={!!result.length}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
