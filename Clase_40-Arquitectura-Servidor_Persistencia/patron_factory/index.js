class Empleados {
  speak() {
    return "Hola soy un empleado de " + this.type;
  }
}

class FullTime extends Empleados {
  constructor() {
    super();
    this.type = "Full Time";
  }
}

class PartTime extends Empleados {
  constructor() {
    super();
    this.type = "Part Time";
  }
}

class ContratorTime extends Empleados {
  constructor() {
    super();
    this.type = "Contrator Time";
  }
}

// Usamos un patron de disenio como factoryu, para centralizar toda esta logica
class MisEmpleados {
  crearEmpleado(data) {
    if (data.type === "fulltime") return new FullTime();
    if (data.type === "parttime") return new PartTime();
    if (data.type === "contrator") return new ContratorTime();
  }
}

// como lo podemos probar
let empresa = new MisEmpleados();
let type = ["fulltime", "parttime", "contrator"];
let empleados = [];

for (let i = 0; i <= 10; i++) {
  empleados.push(
    empresa.crearEmpleado({ type: type[Math.floor(Math.random(3) * 3)] })
  );
}

// console.log(empleados);

empleados.forEach((item) => {
  console.log(item.speak());
});
