const Todos = require("./classTodos");

const assert = require("assert");

describe("test para tareas", () => {
  it("Deberia crear una instancia de la clase Todos", () => {
    // como valido esto??
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });

  it("Deberia adicionar tarea correctamente", () => {
    // como valido esto??
    const todos = new Todos();

    todos.add("One task");
    todos.add("Two task");
    assert.strictEqual(todos.list().length, 2);

    // Me permite comparar un array
    assert.deepStrictEqual(todos.list(), [
      {
        title: "One task",
        complete: false,
      },
      {
        title: "Two task",
        complete: false,
      },
    ]);
  });
});
