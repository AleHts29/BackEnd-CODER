const socket = io();
// $("#scrollBox").scrollTop = $("#scrollBox").scrollHeight;
// Nopmbre de usuario - Chat
let userChat = sessionStorage.getItem("userName");
document.querySelector("#nameUser").value = userChat;

if (document.querySelector("#nameUser").value == "") {
  // Alert
  Swal.fire("Any fool can use a computer");

  (async () => {
    const { value: url } = await Swal.fire({
      width: 500,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("https://media1.giphy.com/media/IeKlzSDKvYNbtlYPvb/giphy.gif?cid=ecf05e47sl3w2m8jnv6urnovjleeabrg9d1lj2uwaxchp2pl&rid=giphy.gif&ct=s")

    top
    no-repeat

  `,
      input: "email",
      inputPlaceholder: "Enter your enmail",
    });

    if (url) {
      Swal.fire(`userName: ${url}`);
    }
    document.querySelector("#nameUser").value = url;
    // guardo usuario en el localstorage
    sessionStorage.setItem("userName", url);
  })();
}

// SOCKET
socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "Hey!!.. i am theClient.");
});

socket.on("chat_back", (data) => {
  renderChat(data);

  socket.emit("message_client", "Hey!!.. i am theClient");
});

// FUNCIONES
// renderiza los nuevos items
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

// capturar info del formulario para dar de alta a un nuevo item
// const addItem = () => {
$("#formProduct").bind("submit", function () {
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

  // La actualizacion del archivo products.txt se ejecuta por medio de AJAX formulario(productComponent.ejs) mediante un POST al path /newitem en newProducts.js
  $.ajax({
    type: $(this).attr("method"),
    url: $(this).attr("action"),
    data: $(this).serialize(),
  });
  $("#formProduct")[0].reset();
  // Se envian datos al back
  socket.emit("dataProduct", dataObj);
  return false;
});
// };

// Render Chat
const renderChat = (data) => {
  let html = data
    .map((x) => {
      return `
            <p><b style='color:#2a6f97'>${x.nameUser}</b> <span style='color:#a47148'>[${x.date}]</span>: <span style='color:#81b29a'>${x.msnUser}</span></p>
            `;
    })
    .join("");
  document.querySelector("#chatBox").innerHTML = html;
};

// capturar info de chatComponent
const infoChat = () => {
  let dataObj = {
    nameUser: document.querySelector("#nameUser").value,
    msnUser: document.querySelector("#messageUser").value,
  };
  //   console.log(dataObj);
  // envio los datos al back
  socket.emit("dataMsn", dataObj);
  //   $("#chatBox").animate({ scrollTop: $("#chatBox")[0].scrollHeight }, 1000); // Scrollea hasta abajo del div, el id debe ser del div que tiene la barra de scrolleo
  document.querySelector("#messageUser").value = "";
  return false;
};
