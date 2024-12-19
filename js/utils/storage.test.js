import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Santa Claus" };
    saveUser(user);

    const username = getUsername();

    expect(username).toBe("Santa Claus");
  });

  it("returns null when no user exists in storage", () => {
    const username = getUsername();

    expect(username).toBeNull();
  });
});
