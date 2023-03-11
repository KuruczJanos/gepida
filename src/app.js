/*
* File: app.js
* Author: Kurucz János
* Copyright: 2023, Kurucz János
* Group: Szoft 1/I/E
* Date: 2023-03-11
* Github: https://github.com/KuruczJanos/gepida.git
* Licenc: GNU GPL
*/
const gepidaTorzs = document.querySelector("#gepidaTorzs");
const nameInput = document.querySelector("#name");
const tyresInput = document.querySelector("#tyres");
const useInput = document.querySelector("#use");
const priceInput = document.querySelector("#price");
const addButton = document.querySelector("#addButton");

const modifyIdInput = document.querySelector("#modifyId");
const modifyNameInput = document.querySelector("#modifyName");
const modifyTyresInput = document.querySelector("#modifyTyres");
const modifyUseInput = document.querySelector("#modifyUse");
const modifyPriceInput = document.querySelector("#modifyPrice");

const saveButton = document.querySelector('#saveButton');

const gepidaLista = [
    { id: 1, name: "Cassis", tyres: 28, use:"Offroad" , price: 557900  },
    { id: 2, name: "Alboin 900", tyres: 28, use:"Trekking" , price: 519900 },
    { id: 3, name: "Asgard", tyres: 29, use:"Technikás utak" , price: 519900 },
    { id: 4, name: "Ruga", tyres: 29, use: "Hegyi", price: 372900 },
    { id: 5, name: "Reptila", tyres: 28, use: "Városi", price: 308900 },
    { id: 6, name: "Sirmium", tyres: 29, use:"Hegyi" , price: 264900 },

];

function loadGepidas() {
    gepidaLista.forEach((gepida) => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdTyres = document.createElement('td');
        let tdUse = document.createElement('td');
        let tdPrice = document.createElement('td');
        tdId.textContent = gepida.id;
        tdName.textContent = gepida.name;
        tdTyres.textContent = gepida.tyres;
        tdUse.textContent = gepida.use;
        tdPrice.textContent = gepida.price;
        gepidaTorzs.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdTyres);
        tr.append(tdUse);
        tr.append(tdPrice);
        tr.append(generateDeleteButton(gepida.id));
        tr.append(generateModifyButton(gepida));
    });
}

loadGepidas();

function generateDeleteButton(id) {
    let tdDel = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-primary";
    handleDeleteEvent(button, id);
    tdDel.append(button);
    return tdDel;
}

function handleDeleteEvent(button, id) {
    button.addEventListener('click', () => {        
        let delIndex = 0;
        dolgozoLista.forEach((gepida, index) => {
            if(gepida.id == id) {
                delIndex = index;
            }
        } );
        gepidaLista.splice(delIndex, 1);
        gepidaTorzs.textContent = "";
        loadGepidas();
    });
}

function generateModifyButton(gepida) {
    let tdModify = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Módosítás";
    button.classList = "btn btn-primary";
    button.setAttribute('data-bs-toggle', 'modal'); 
    button.setAttribute('data-bs-target', '#modifyModal'); 
    handleModifyEvent(button, gepida);
    tdModify.append(button);
    return tdModify;
}

function handleModifyEvent(button, gepida) {
    button.addEventListener('click', () => {        
        console.log(gepida.name)
        modifyIdInput.value = gepida.id;
        modifyNameInput.value = gepida.name;
        modifyTyresInput.value = gepida.tyres;
        modifyUseInput.value = gepida.use;
        modifyPriceInput.value = gepida.price;
    });
}

saveButton.addEventListener('click', () => {
    console.log('Mentés árnyékeljárás...');
    let id = modifyIdInput.value;
    let name = modifyNameInput.value;
    let tyres = modifyTyresInput.value;
    let use = modifyUseInput.value;
    let price = modifyPriceInput.value;
    // console.log(id, name, city, salary);

    gepidaLista.forEach( (gepida) => {
        if(gepida.id == id) {
            console.log(gepida.name)
            dolgozo.name = name;
            dolgozo.tyres = tyres;
            dolgozo.use = use;
            dolgozo.price = price;
        }
    });
    gepidaTorzs.textContent = "";
    loadGepidas();    

});

addButton.addEventListener('click', () => {
    addGepida();
});

function addGepida() {
    gepida = {
        name: nameInput.value,
        tyres: tyresInput.value,
        use: useInput.value,
        price: priceInput.value
    };
    gepidaLista.push(gepida);
    clearFields();
    gepidaTorzs.textContent = "";
    loadGepidas();
}

function clearFields() {
    nameInput.value = "";
    tyresInput.value = "";
    useInput.value = "";
    priceInput.value = "";
}
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('"Tedd, vagy ne tedd, de ne próbáld!" \n Star Wars -- Yoda', 'success')
  })
}