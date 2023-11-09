import type { Poll } from "./types";

export const save = (poll: Poll): void => {
  //   const storagePolls = localStorage.getItem("poll");
  //   const polls = storagePolls ? (JSON.parse(storagePolls) as Poll[]) : [];

  //   polls.forEach((item) => {
  //     if (item.question === poll.question) {
  //       item.answers = poll.answers;
  //     }
  //   });
  localStorage.setItem("poll", JSON.stringify(poll));
};

export const load = (config: { question: string; options: string[] }) => {
  const storagePolls = localStorage.getItem("poll");
  return storagePolls
    ? (JSON.parse(storagePolls) as Poll)
    : {
        question: config.question,
        answers: config.options.map((item) => ({ count: 0, value: item })),
      };
};
