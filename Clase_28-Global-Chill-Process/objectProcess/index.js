// // directoirio actual de trabajo
// console.log(process.cwd());

// // ID del proceso
// console.log(process.pid);

// // Version de Node
// console.log(process.version);

// // Titulo del proceso
// console.log(process.title);

// // Sistema operativo
// console.log(process.platform);

// // Uso de la memoria
// console.log(process.memoryUsage());

// =============== //
// =============== //

// setInterval(() => {
//   console.log("Ejecutando!");
// }, 1000);

// setTimeout(() => {
//   process.exit(120);
// }, 4000);

// process.on("exit", (codigo) => {
//   console.log("Proceso terminado " + codigo);
// });

// =============== //
// =============== //

// devuelve el nombre de la ruta del ejecutable de node
console.log(process.execPath);

// estandar stdOut
process.stdout.write("probando stdout \n");
