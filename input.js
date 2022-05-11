const net = require("net");


let connection; 

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    console.log("GOOD BYE");
    process.exit();
  }
  if (data === 'w') connection.write("Move: up");
  if (data === 'a') connection.write("Move: left");  
  if (data === 's') connection.write("Move: down");  
  if (data === 'd') connection.write("Move: right");

  if (data === 'z') connection.write("Say: Yalls bad");
  if (data === 'x') connection.write("Say: :)");
  if (data === 'c') connection.write("Say: LMAO");
  if (data === 'v') connection.write("Say: 뭐하는짓이야!");

  }


module.exports = { setupInput };