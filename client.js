const net = require("net");

const connect = function () {

  const conn = net.createConnection({
    host: '165.227.47.243', 
    port: 50541
  });

conn.setEncoding("utf8");

conn.on('connect', () => {
  console.log("Succesffully connected to game server");
})

conn.on('connect', () => {
  conn.write("Hello from Name: SYL")
})
  return conn;
};



module.exports = {connect};