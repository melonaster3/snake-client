const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {

  const conn = net.createConnection({
    host: IP, 
    port: PORT
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