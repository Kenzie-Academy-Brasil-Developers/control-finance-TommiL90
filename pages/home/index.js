let totalPrice = 0;

const tagUl = document.getElementById("ul");

function listarValues(lista, referenciaHtml) {
  //  limpar antes de add Html

  referenciaHtml.innerHTML = "";
  totalPrice = 0
  lista.forEach((e, i) =>{
    
    let valueTemplate1 = criarTemplate(e, i);
    referenciaHtml.appendChild(valueTemplate1);
  })
}
listarValues(insertedValues, tagUl);
console.log(insertedValues)

function criarTemplate(element, index) {
  let id = index;
  let value = element.value;
  let categoryID = element.categoryID;

  const li = document.createElement("li");
  li.classList = "flex justify-between items-center border-default padding";

  const tagDiv = document.createElement("div");
  tagDiv.classList = "flex";

  const tagP = document.createElement("p");
  tagP.classList = "font-text-3";
  tagP.innerText = "R$";

  const tagPValue = document.createElement("p");
  tagPValue.classList = "font-text-3";
  tagPValue.innerText = value;

  const tagDivButton = document.createElement("div");
  tagDivButton.classList = "box-button";

  const buttonCategoryID = document.createElement("button");
  buttonCategoryID.classList = "button-secundary bg-color-grey-4";
  buttonCategoryID.innerText = categorizing(categoryID);

  const trashButton = document.createElement("button");
  trashButton.classList = "trash";
  trashButton.id = id;

  tagDivButton.append(buttonCategoryID, trashButton);
  tagDiv.append(tagP, tagPValue);
  li.append(tagDiv, tagDivButton);

 trashButton.addEventListener("click", (e) => {
        // let button = e.target

        // if (button.tagName == "BUTTON") {
        //     let li = button.closest("li");
        
        //     li.remove();
        
        //     totalPrice -= value;
        //     document.getElementById("total-Price").innerHTML = `${totalPrice}`;
           
        //   }  

          totalPrice -= value;
          document.getElementById("total-Price").innerHTML = `${totalPrice}`

        insertedValues.splice(index, 1)
        listarValues(insertedValues, tagUl)
 });

  totalPrice += value;
  document.getElementById("total-Price").innerHTML = `${totalPrice}`;
 
  return li;
}

function categorizing(category) {
  if (category == 1) {
    return "Entrada";
  }
  return "Saida";
}

// retornar segundo categoria

const btnEvery = document.getElementById("every");
const btnEntries = document.getElementById("entries");
const btnExits = document.getElementById("exits");

btnEvery.addEventListener("click", (e) => {
  e.preventDefault();

  listarValues(insertedValues, tagUl);
});

btnEntries.addEventListener("click", (e) => {
  e.preventDefault();

  // let listaFiltrada = [];
  // for (value of insertedValues) {
  //   if (value.categoryID == 1) {
  //     listaFiltrada.push(value);
  //   }
  // }
  const filterList = insertedValues.filter(e => e.categoryID == 1)
  listarValues(filterList, tagUl);
});

btnExits.addEventListener("click", (e) => {
  e.preventDefault();

  // let listaFiltrada = [];
  // for (value of insertedValues) {
  //   if (value.categoryID !== 1) {
  //     listaFiltrada.push(value);
  //   }
  // }
  const filterList = insertedValues.filter(e => e.categoryID == 2)
  listarValues(filterList, tagUl);
});

const removeoptional = (e) => {
  let button = e.target;

  if (button.tagName == "BUTTON") {
    let li = button.closest("li");

    li.remove();

    totalPrice -= value;
    document.getElementById("total-Price").innerHTML = `R$ ${totalPrice}`;
  }
};


function sum () {

  let value = insertedValues.reduce((acc, av) => { return acc + av.value}, 0)
  
  document.getElementById("total-Price").innerHTML = `${value}`;
}
