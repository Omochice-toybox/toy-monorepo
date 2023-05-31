import { add } from "./add.js";
import { describe, it, expect } from "vitest";
describe("add", function () {
    it("should add two numbers", function () {
        expect(add(1, 2)).toBe(3);
    });
    it("should fail", function () {
        expect(add(1, 1)).not.toBe(3);
    });
});
