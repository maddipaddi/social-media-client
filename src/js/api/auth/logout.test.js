import { logout } from "./logout";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/remove.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("clears the token from browser storage", async () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
