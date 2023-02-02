const app = require("./server/server");

app.listen(process.env.PORT || 3000, () =>
  console.log("The server is running on port 3000.")
);
