// without type module in package.json
// const users = require("./users.js");

// with type module in package.json
import { users } from "./users.js";
import greet from "./greeting.js";
import axios from "axios";

// console.log("Hello world");
// console.log(users);
// greet(users[0].name, users[0].age);

axios
  .get("https://dummyjson.com/products")
  .then((res) => console.log(res.data.products))
  .catch((err) => console.log(err));
