const users = require("../users");

test("Перевірити, що getUsers повертає масив з одним користувачем", () => {
  const existingUsers = users.getUsers();
  expect(existingUsers.length).toBe(1);
});