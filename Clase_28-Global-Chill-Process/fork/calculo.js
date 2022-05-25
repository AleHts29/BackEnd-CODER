const calculo = () => {
  let suma = 0;

  for (let i = 0; i < 5e9; i++) {
    suma += i;
  }
  return suma;
};

process.on("message", (message) => {
  if (message == "start") {
    let sum = calculo();

    process.send(sum);
  } else {
    console.log("No inicio la funcion");
  }
});
