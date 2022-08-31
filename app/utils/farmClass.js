import Cow from "../utils/cowClass.js";

export default class Farm {
	constructor() {
		this.cows = [];
	}

	addCow(regNumber, booth, race, birth, milkProd) {
		this.cows.push(
			new Cow(regNumber, booth, race, birth, milkProd)
		);
	}

	getCow(regNumber) {
		for (const cow of this.cows) {
			if (regNumber == cow.getRegNumber()) {
				return cow;
			}
		}
		return null;
	}

	advSearch(cowPrefs) {
		for (const cow of this.cows) {
			cow.searchWeight = 0;
			for (const pref in cowPrefs) {
				if (cowPrefs[pref] == cow[pref]) {
					cow.searchWeight += 1;
				}
			}
		};
		let foundCows = [];
		for (let i = 6; i >= 1; i--) {
			for (const cow of this.cows) {
				if (cow.searchWeight != i) continue;
				delete cow.searchWeight;
				foundCows.push(cow);
			}
		}
		return foundCows;
	}

	allCows(){
		return this.cows;
	}

	deleteCow(regNumber){
		this.cows = this.cows.filter(cow => cow.getRegNumber() != regNumber)
	}
}
