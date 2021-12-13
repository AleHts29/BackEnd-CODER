const socket = io();

socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "Hey!!.. i am theClient.");
});

// FUNCION - renderiza los nuevos items
const render = (data) => {
  const html = data
    .map((item) => {
      return `
        <div class="list-group mb-2">
            <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            >
            <div class="d-flex w-100 justify-content-around">
                <img
                src="https://images.unsplash.com/photo-1563201180-d98027da04f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                style="width: 6%"
                class="card-img-top"
                alt="..."
                />
                <div>
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${item.name}</h4>
                    <small>$ ${item.price}</small>
                </div>
                <p class="mb-1">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
                </div>
            </div>
            </a>
        </div>`;
    })
    .join("");
  document.querySelector("#containerProducts").innerHTML = html;
};

// FUNCION - capturar info del formulario
const addItem = () => {
  // Validar campos
  const name = document.querySelector("#productName").value;
  const price = document.querySelector("#productPrice").value;

  if (name.trim() === "" || price.trim() === "") {
    // mostrar mensaje de error
    document.querySelector(
      "#containerProducts"
    ).innerHTML = `<div class="alert alert-warning" role="alert"> <p> No se cargo ningun producto</p></div>`;
    return false;
  }

  let dataObj = {
    name: name,
    price: price,
  };

  // La actualizacion del archivo products.txt se ejecuta desde el formulario(productComponent.ejs) mediante un POST al path /newitem en newProducts.js

  // Se envian datos al back
  socket.emit("dataProduct", dataObj);
};
