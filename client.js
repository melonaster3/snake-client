const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on('connect', () => {
  console.log("Succesffully connected to game server");
})

conn.on('connect', () => {
  conn.write("Hello from Name: SYL")
})

/*setInterval(() => {
  conn.write("Move: up");
},1000);
*/

conn.on('data',(data) => {
  console.log("Incoming data says :", data);
}) 
  return conn;
};


module.exports = {connect};