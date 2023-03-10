const form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formdata = new FormData(form);

  const data = Object.fromEntries(formdata);
  console.log(JSON.stringify(data));

  const server = await fetch("https://MERN-APP.rohit-nayak123.repl.co/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (server.status == 200) {
    const message = document.querySelector("#message");
    message.innerHTML = "Data is sended securely";
  }
});
