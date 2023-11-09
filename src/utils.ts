import { Poll } from "./types";

export const getTotalCount = (poll: Poll) =>
  poll.answers?.reduce((pre, cur) => pre + cur.count, 0);