export default class Controller{
    initialize(model, view){
        this.model = model;
        this.view = view;

    }
    buildTemplate(cow){
        const image = "images/" + cow.getRace().replaceAll(" ", "") + ".webp"
        return `
        <div class="cowCard">
            <img src="${image}" class="cowImg" alt="${cow.getRace()}">
            <div class="cardInfo">
                <p class="info"><b>Reg:</b> ${cow.getRegNumber()}</p>
                <p class="info"><b>Booth:</b> ${cow.getBooth()}</p>
                <p class="info"><b>Race:</b> ${cow.getRace()}</p>
                <p class="info"><b>Birthday:</b> ${cow.getBirth()}</p>
                <p class="info"><b>Milk Prod:</b> ${cow.getMilkProd()}</p>
                <button class="killBtn" data-id="${cow.getRegNumber()}">Kill</button>

            </div>
        </div>`
    }

    serialSearch(regNumber){
        const cow = this.model.cowList.getCow(regNumber);

        let template = ""

        if (cow !== null) {
            template = this.buildTemplate(cow);
        }
        else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show :( </td>
            </tr>
            `
        }
        this.view.message(template);
    }

    advancedSearch(cow){
        const foundCows = this.model.cowList.advSearch(cow);

        let template = ""

        if (foundCows.length != 0) {
            foundCows.forEach(found => {
                template += this.buildTemplate(found)
            });
        }
        else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show :( </td>
            </tr>
            `
        }
        this.view.message(template);

    }
    getAllCows(){
        const allCows = this.model.cowList.allCows();

        let template = ""

        if (allCows.length != 0) {
            allCows.forEach(found => {
                template += this.buildTemplate(found)
            });
        }
        else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show :( </td>
            </tr>
            `
        }
        this.view.message(template);
        this.view.showTotal(this.model.cowList.cows.length, this.model.capacity)
    }

    deleteCow(regNumber){
        this.model.cowList.deleteCow(regNumber);
        this.getAllCows()
    }

    addCow(cow){
        if (this.model.cowList.getCow(cow[0]) != null){
            this.view.errorDialog(cow[0] + " is already a registered serial number. Please choose another one.")
            return;
        }
            

        this.model.cowList.addCow(...cow)
        this.getAllCows()
        this.view.errorDialog(cow[0] + " Has been added!")
    }

}