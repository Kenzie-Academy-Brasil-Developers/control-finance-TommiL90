

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
    input.classList = "input-value"
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
    form.classList = "formTypeValue"
  
    const inputEnter = document.createElement("input");
    inputEnter.type = "radio";
    inputEnter.id = "enter";
    inputEnter.name = "value-type";
    inputEnter.value = "1";
  
    const labelEnter = document.createElement("label");
    labelEnter.classList = "button-secundary";
    labelEnter.for = "enter";
    labelEnter.innerText = "Entrada";
  
    const inputExit = document.createElement("input");
    inputExit.type = "radio";
    inputExit.id = "out";
    inputExit.name = "value-type";
    inputExit.value = "2";
  
    const labelExit = document.createElement("label");
    labelExit.classList = "button-secundary";
    labelExit.for = "out";
    labelExit.innerText = "Saida";
  
  
    form.append(inputEnter,labelEnter, inputExit,labelExit);
    modalSelect.append(h4, form);
  
    return modalSelect;
  }
  
  function modalFooter() {
    const modalFooter = document.createElement("div");
    modalFooter.classList = "modal-footer";
  
    const buttonCancel = document.createElement("button");
    buttonCancel.classList = "button-secundary";
    buttonCancel.id = "cancel-modal";
    buttonCancel.innerText = "Cancelar";
  
    const buttonEnterValue = document.createElement("button");
    buttonEnterValue.type = "submit";
    buttonEnterValue.classList = "button-primary addValue";
    buttonEnterValue.innerText = "Inserir valor";
  
    buttonEnterValue.addEventListener("click", (e) => {
      e.preventDefault()
      console.log(e.target.parent);
  
      let inputValue = document.querySelector(".input-value");
      let inputTypeValue = document.querySelector(".formTypeValue");
  
      let value = inputValue.value
      console.log(inputTypeValue.children[0].value)
      
                 const newvalue = {
                  id: insertedValues.length,
                  value: value,
                  categoryID: "?",
                 }
          
        insertedValues.push(newvalue)
        listarValues(insertedValues, tagUl)
  
    });
  
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
    const cancelButton = document.getElementById("cancel-modal");
    const modalContainer = document.getElementById("modal-container");
  
    closeModalButton.addEventListener("click", () => {
      modalContainer.remove();
    });
  
    cancelButton.addEventListener("click", () => {
      modalContainer.remove();
    });
  }
  
  showModal();
  