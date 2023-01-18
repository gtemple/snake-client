const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on("connect", () =>{
    console.log("Time to be a snake.")
  })

  conn.on("connect", () => {
    conn.write("Name: BRO");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  setInterval(() => {
      conn.write("Move: left");
  }, 100);


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;