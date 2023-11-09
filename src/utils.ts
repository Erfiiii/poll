import type { Option, Poll, Config } from "./types";

export const addOption = async (option: Option) => {
  const storagePoll = await localStorage.getItem("poll") as string;
  const poll = JSON.parse(storagePoll) as Poll
  const newPoll = {
    ...poll,
    answers: poll?.answers.map((item) =>
      item.value === option.value ? { ...item, count: item.count + 1 } : item
    ),
  };
  await localStorage.setItem("poll", JSON.stringify(newPoll));
};

export const load = async (config: Config) => {
  const storagePoll = await localStorage.getItem("poll");
  return storagePoll
    ? (JSON.parse(storagePoll) as Poll)
    : {
        question: config.question,
        answers: config.options.map((item) => ({ count: 0, value: item })),
      };
};

export const getTotalCount = (poll: Poll) =>
  poll.answers.reduce((pre, cur) => pre + cur.count, 0);
