import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import type { Option, Poll as PollType } from "../types";
import { getTotalCount } from "../local-storage-client";
import PollOption from "./PollOption";
import { useClientContext } from "../ClientContext";

interface OwnProps {
  config: {
    question: string;
    options: string[];
  };
}

type Props = PropsWithChildren<OwnProps>;

export default function Poll(props: Props) {
  const [poll, setPoll] = useState<PollType | undefined>(undefined);
  const [answer, setAnswer] = useState<string | null>(null);
  const { load, addAnswer } = useClientContext();

  useEffect(() => {
    load(props.config).then((poll) => {
      setPoll(poll);
    });
  }, []);

  const onSelectAnswer = useCallback(
    async (option: Option) => {
      setAnswer(option.value);
      await addAnswer(option, props.config);
      const newPoll = await load(props.config);
      setPoll(newPoll);
    },
    [props.config, load, addAnswer]
  );

  if (!poll) {
    return null;
  }
  const totalCount = getTotalCount(poll);

  return (
    <div className="poll">
      <div className="question">{poll?.question}</div>
      <div className="answers">
        {poll.answers.map((item) => (
          <PollOption
            key={item.value}
            option={item}
            onSelectOption={onSelectAnswer}
            totalCount={totalCount ?? 0}
            isSelected={item.value === answer}
            disabled={!!answer}
          />
        ))}
      </div>
    </div>
  );
}
