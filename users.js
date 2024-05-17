let userList = [
    { name: "User1", age: 24 }
  ];
  
  module.exports = {
    getUsers: () => {
      return userList;
    },
    addUser: (user) => {
      userList.push(user);
      return userList;
    }
  };