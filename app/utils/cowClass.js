export default class Cow {
	constructor(regNumber, booth, race, birth, milkProd) {
		this.regNumber = regNumber;
		this.booth = booth;
		this.race = race.toLowerCase();
		this.birth = birth;
		this.milkProd = milkProd;
	}
	getRegNumber() {
		return this.regNumber;
	}

	getBooth() {
		return this.booth;
	}

	getRace() {
		return this.race;
	}

	getBirth() {
		return this.birth;
	}

	getMilkProd() {
		return this.milkProd;
	}
}


