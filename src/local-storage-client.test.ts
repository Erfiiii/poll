import { expect, describe, it, beforeEach } from "vitest";
import { load, addAnswer } from "./local-storage-client";
import { Config, Option } from "./types";

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
    await addAnswer(option, config);
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
