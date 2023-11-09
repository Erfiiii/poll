import type { Option, Poll, Config } from "./types";

export const addAnswer = async (option: Option, config: Config) => {
  const poll = await load(config);
  poll.answers?.forEach((item) => {
    if (item.value === option.value) {
      item.count += 1;
    }
  });

  const storagePolls = localStorage.getItem("poll-data");
  if (!storagePolls) {
    localStorage.setItem("poll-data", JSON.stringify([poll]));
    return;
  }
  const polls = JSON.parse(storagePolls) as Poll[];
  const foundPoll = polls.find(item=>item.question === poll.question)
  if(foundPoll) {
    foundPoll.answers = poll.answers;
  } else {
    polls.push(poll)
  }
 
  localStorage.setItem("poll-data", JSON.stringify(polls));
};

export const load = async (config: Config) => {
  const storagePoll = localStorage.getItem("poll-data");
  const newPoll = {
    question: config.question,
    answers: config.options?.map((item) => ({ count: 0, value: item })),
  };
  if (!storagePoll) {
    return newPoll;
  }
  const data = JSON.parse(storagePoll) as Poll[];
  const foundPoll = data.find((item) => item.question === config.question);
  if (!foundPoll) {
    return newPoll;
  }

  return foundPoll;
};

export const getTotalCount = (poll: Poll) =>
  poll.answers?.reduce((pre, cur) => pre + cur.count, 0);

export const client = {
  load,
  addAnswer,
};
