/* Desenvolva sua lógica aqui */

// const buttonsControllersModal = document.querySelectorAll(
//   "[data-control-modal]"
// );

// for (let index = 0; index < buttonsControllersModal.length; index++) {
//   buttonsControllersModal[index].addEventListener("click", () => {
//     let modalId =
//       buttonsControllersModal[index].getAttribute("data-control-modal");
//     document.getElementById(modalId).classList.toggle("show-modal");
//   });
// }

function createModal() {

  const modalWrapper = document.createElement("div");
  modalWrapper.classList = "modal-wrapper";
  //   modalWrapper.id = "modal-cadastro";
  modalWrapper.id = "modal-container";

  const modal = document.createElement("div");
  modal.classList = "modal";

  const modalHeader1 = modalHeader();
  const modalBody1 = modalBody();
  const modalSelect1 = modalSelect();
  const modalFooter1 = modalFooter();

  modal.append(modalHeader1, modalBody1, modalSelect1, modalFooter1);
  modalWrapper.appendChild(modal);

  //   console.log(modal)
  return modalWrapper;
  //   body.appendChild(modal);
}
createModal();



function modalHeader() {
  const modalHeader = document.createElement("div");
  modalHeader.classList = "modal-header";

  let h3 = document.createElement("h3");
  h3.classList = "font-title-3";
  h3.innerText = "Registro de Valor";

  const button = document.createElement("button");
  button.classList = "modal-close";
  button.innerText = "X";
  button.id = "close_modal";

  modalHeader.append(h3, button);
  return modalHeader;
}

function modalBody() {
  const modalBody = document.createElement("div");
  modalBody.classList = "modal-body";

  let p = document.createElement("p");
  p.classList = "font-text-1";
  p.innerText =
    "Digite o valor e em seguida aperte no botão referente ao tipo do valor.";

  const form = document.createElement("form");

  let h4 = document.createElement("h4");
  h4.classList = "font-title-4";
  h4.innerText = "Valor";

  const boxInput = document.createElement("div");
  boxInput.classList = "box-input";

  const label = document.createElement("label");
  label.for = "input-value";
  label.innerText = "R$";

  const input = document.createElement("input");
  input.type = "number";
  input.name = "input-value";
  input.placeholder = "00,00";

  boxInput.append(label, input);
  form.append(h4, boxInput);
  modalBody.append(p, form);

  return modalBody;
}

function modalSelect() {
  const modalSelect = document.createElement("div");
  modalSelect.classList = "section-modal";

  let h4 = document.createElement("h4");
  h4.classList = "font-title-4";
  h4.innerText = "Tipo de valor";

  const form = document.createElement("form");

  const labelEnter = document.createElement("label");
  labelEnter.classList = "button-secundary"
  labelEnter.for = "enter";
  labelEnter.innerText = "Entrada";

  const inputEnter = document.createElement("input");
  inputEnter.type = "radio";
  inputEnter.id = "enter";
  inputEnter.name = "value-type";
  inputEnter.value = "entrada";

  const labelExit = document.createElement("label");
  labelExit.classList = "button-secundary"
  labelExit.for = "exit";
  labelExit.innerText = "Saida";

  const inputExit = document.createElement("input");
  inputExit.type = "radio";
  inputExit.id = "enter"
  inputExit.name = "value-type";
  inputExit.value = "saida";

  form.append(labelEnter, inputEnter, labelExit, inputExit);
  modalSelect.append(h4, form);

  return modalSelect;
}

function modalFooter() {
  const modalFooter = document.createElement("div");
  modalFooter.classList = "modal-footer";

  const buttonCancel = document.createElement("button");
  buttonCancel.classList = "button-secundary";
  buttonCancel.id= "cancel-modal"
  buttonCancel.innerText = "Cancelar";

  const buttonEnterValue = document.createElement("button");
  buttonEnterValue.type = "submit"
  buttonEnterValue.classList = "button-primary addValue";
  buttonEnterValue.innerText = "Inserir valor"


  modalFooter.append(buttonCancel, buttonEnterValue);

  return modalFooter;
}

function showModal() {
  const modalButton = document.getElementById("button-register");
  const body = document.getElementsByTagName("body")[0];
  

  modalButton.addEventListener("click", () => {
    const modal = createModal();

    body.append(modal);
    closeModal();
  });
}

function closeModal() {
  const closeModalButton = document.getElementById("close_modal");
  const cancelButton = document.getElementById("cancel-modal")
  const modalContainer = document.getElementById("modal-container");

  closeModalButton.addEventListener("click", () => {
    modalContainer.remove();
  });

  cancelButton.addEventListener("click", () => {
    modalContainer.remove();
  })
}

showModal();


/**
<form>
    <p>Selecione o método de contato</p>

    <label for="telefone">Telefone</label>
    <input type="radio" value="telefone" name="inputExemplo" id="telefone">

    <label for="e-mail">E-mail</label>
    <input type="radio" value="email" name="inputExemplo" id="e-mail">

    <button type="submit">Enviar</button>
</form>
 */