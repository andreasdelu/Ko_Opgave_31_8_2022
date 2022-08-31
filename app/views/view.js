import Cow from "../utils/cowClass.js";

export default class View{
    constructor(controller){
        const self = this;

        const serialSearchForm = document.getElementById("serialNumberSearch");
        const serialSearchInput = document.getElementById("serialNumberInput");

        const advancedForm = document.getElementById('advancedForm');
        const addForm = document.getElementById('addGuitarForm');

        const deleteDialog = document.getElementById('confirmDelete');
        const addDialog = document.getElementById('addDialog');
        const errorDialog = document.getElementById('errorDialog');

        const showAll = document.getElementById('showAll');
        const addGuitar = document.getElementById('addGuitar');


        self.controller = controller;

        serialSearchForm.onsubmit = (e) => {
            e.preventDefault();
            self.controller.serialSearch(serialSearchInput.value);
        }

        advancedForm.onsubmit = (e) => {
            e.preventDefault()
            const inputs = advancedForm.querySelectorAll("input");
            let searchValues = [];
            inputs.forEach((input, i) => {
                searchValues.push(input.value.toLowerCase());
            })
            const optimalCow = new Cow("", ...searchValues)
            self.controller.advancedSearch(optimalCow);
        }

        document.getElementById("cardContainer").onclick = (e) => {
            if (e.target.nodeName == "BUTTON" ) {
                deleteDialog.showModal();
                document.getElementById("deleteGuitar").onclick = () => {
                    self.controller.deleteCow(e.target.dataset.id);
                    deleteDialog.close()
                }
            }
        }

        document.getElementById("cancelDialog").onclick = () => {
            deleteDialog.close()
        }

        showAll.onclick = () => {
            self.controller.getAllCows();
        }

        addGuitar.onclick = () => {
            addDialog.showModal();
        }

        addForm.onsubmit = (e) => {
            e.preventDefault()
            const inputs = addForm.querySelectorAll("input");
            let addValues = [];
            inputs.forEach((input, i) => {
                addValues.push(input.value);
            })
            self.controller.addCow(addValues);
            addForm.reset()
        }

        addForm.onreset = () => {
            addDialog.close();
        }

        


    }

    message(template){
        const elem = document.getElementById('cardContainer');
        elem.innerHTML = "";
        elem.insertAdjacentHTML("beforeend", template)
    }

    errorDialog(string){
        errorDialog.showModal();
        errorDialog.querySelector("h3").innerText = string;
        errorDialog.querySelector("button").onclick = () => {
            errorDialog.querySelector("h3").innerText = "";
            errorDialog.close();
        }
    }

    showTotal(length, cap){
        document.querySelector("h2").innerText = "Cows: " + length + "/" + cap;
    }
}