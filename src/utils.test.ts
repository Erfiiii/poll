import { expect, test } from "vitest";
import { Poll } from "./types";
import { getTotalCount } from "./utils";

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
