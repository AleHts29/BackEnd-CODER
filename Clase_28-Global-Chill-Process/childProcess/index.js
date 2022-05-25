const { exec, spawn } = require("child_process");

// EXEC
// exec("ls -la", (error, stdout, stderr) => {
//   if (error) {
//     console.log("Error en la ejecucioin", error.message);
//     return;
//   }
//   if (stderr) {
//     console.log("stderr", stderr);
//     return;
//   }
//   console.log(stdout);
// });

/* 
puedo especificar mas comando que hacen las consultas mas complejas por el CLI
ls /etc /var
*/

// SPAWN
const child = spawn("ls", ["/etc", "/var"]);

child.stderr.on("data", (data) => {
  console.log("Error en la ejecucioin" + data);
});

child.stdout.on("data", (data) => {
  console.log("stdout" + data);
});
