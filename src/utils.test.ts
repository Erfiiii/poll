import { expect, test, describe, it, beforeEach } from "vitest";
import { load, addOption, getTotalCount } from "./utils";
import { Config, Option, Poll } from "./types";

test("totalCount", () => {
  const poll: Poll = {
    question: "test",
    answers: [
      {
        count: 10,
        value: "answer1",
      },
      {
        count: 5,
        value: "answer1",
      },
      {
        count: 2,
        value: "answer1",
      },
    ],
  };
  expect(getTotalCount(poll)).equal(17);
});

describe("Load and addOption to poll data", () => {
  beforeEach(() => {
    localStorage.removeItem("poll-data");
  });
  it("should get default data when there is no data in localStorage", async () => {
    const config: Config = {
      question: "test",
      options: ["test1", "test2", "test3"],
    };
    const data = await load(config);
    expect(data).toMatchObject({
      question: "test",
      answers: [
        { value: "test1", count: 0 },
        { value: "test2", count: 0 },
        { value: "test3", count: 0 },
      ],
    });
  });

  it("should add data to localStorage when user selects the answer", async () => {
    const config: Config = {
      question: "test",
      options: ["test1", "test2", "test3"],
    };
    const option: Option = {
      count: 0,
      value: "test2",
    };
    await addOption(option, config);
    const data = await load(config);
    expect(data).toMatchObject({
      question: "test",
      answers: [
        { value: "test1", count: 0 },
        { value: "test2", count: 1 },
        { value: "test3", count: 0 },
      ],
    });
  });
});
