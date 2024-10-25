import { login } from "./login";
import { save } from "../../storage/index.js";

const user = "testuser";
const accessToken = "testtoken";
const email = "maddipaddi@noroff.no";
const password = "padde123";

jest.mock("../../storage/save.js", () => ({
  save: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: accessToken,
        user: user,
      }),
  })
);

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    await login(email, password);

    expect(save).toHaveBeenCalledWith("token", accessToken);
    expect(save).toHaveBeenCalledWith("profile", { user: "testuser" });
  });
});
