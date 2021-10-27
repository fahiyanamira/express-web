const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //nampilin halaman htmlnya:
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/food", (req, res) => {
  res.sendFile("./food.html", { root: __dirname });
});

//belajar req params:
// app.get("/product/:idProduct/category/:idCategory", (req, res) => {
//   res.send(`product ID: ${req.params.idProduct} || Category ID: ${req.params.idCategory}`);
// });

//belajar req query strings:
app.get("/product/:idProduct", (req, res) => {
  res.send(`product ID: ${req.params.idProduct} || category: ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});

// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });

//     const url = req.url;
//     if (url === "/about") {
//       renderHTML("./about.html", res);
//     } else if (url === "/food") {
//       renderHTML("./food.html", res);
//     } else {
//       renderHTML("./index.html", res);
//     }
//   })
//   .listen(port, () => {
//     console.log(`server is listening on http://localhost:${port}`);
//   });
