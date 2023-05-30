import { add } from "./add.js";
import { describe, it, expect } from "vitest";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should fail", () => {
    expect(add(1, 1)).not.toBe(3);
  });
});
