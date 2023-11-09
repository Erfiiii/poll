import { PropsWithChildren, useCallback, useMemo } from "react";
import { Option } from "../../types";
import "./PollOption.css";

interface OwnProps {
  option: Option;
  onSelectOption: (option: Option) => void;
  totalCount: number;
  isSelected: boolean;
  disabled: boolean;
}

type Props = PropsWithChildren<OwnProps>;

export default function PollOption(props: Props) {
  const calculatePercentage = useMemo(
    () =>
      props.totalCount
        ? Math.round((props.option.count / props.totalCount) * 100)
        : 0,
    [props.totalCount, props.option.count]
  );
  const onSelect = useCallback(() => {
    if (!props.disabled) {
      props.onSelectOption(props.option);
    }
  }, [props]);
  return (
    <div
      onClick={onSelect}
      className={`answer ${props.isSelected ? "selected" : ""} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      {props.option.value}
      <span
        className="percentage-bar"
        style={{ width: `${calculatePercentage}%` }}
      />
      <span className="percentage-value">{calculatePercentage}%</span>
    </div>
  );
}
