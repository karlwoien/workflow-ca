import { logout } from "./logout";
import { remove } from "../../storage";

// Mock the storage module
jest.mock("../../storage", () => ({
  remove: jest.fn(),
}));

// Test
describe("Logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes the token from localStorage after logout", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});
