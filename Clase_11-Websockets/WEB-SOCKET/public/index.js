const socket = io();
// recibo data desde el server
socket.on("menssage_client", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_back", "Thaks for the message..");
});

const render = (data) => {
  let html = data
    .map((item) => {
      return `<p>${item.user}: ${item.msn} </p>`;
    })
    .join("");

  document.querySelector("#box").innerHTML = html;
};

const addMessage = () => {
  let msnObj = {
    user: Math.random(),
    msn: document.querySelector("#message").value,
  };
  console.log(msnObj);

  // envio data hacia el server
  socket.emit("msn_client", msnObj);

  return false;
};
