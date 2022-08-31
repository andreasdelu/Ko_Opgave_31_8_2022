import Farm from "../utils/farmClass.js";

export default class Model {
	constructor(){
		this.cowList = new Farm();
		
		this.capacity = 200;

		const races = [
			"Brown Swiss",
			"Fincattle",
			"Pinzgauer"
		]

		for (let i = 0; i < this.capacity; i++) {
			const reg = "042-" + Math.ceil(Math.random()*9999).toString().padStart(4, "0");
			const booth = Math.ceil(Math.random()*1000).toString().padStart(4, "0");
			let race = races[Math.floor(Math.random()*3)]

			if (Math.ceil(Math.random() * 100) >= 95) {
				race = "Minecwaf"
			}

			let newdate = new Date(new Date(2000, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2000, 0, 1).getTime())).toLocaleString().split(" ")[0].split(".")
			let day = newdate[0]
			let month = newdate[1]
			let year = newdate[2]

			let date = `${day}-${month}-${year}`;

			if(day == new Date().getDate().toString() && month == (new Date().getMonth()+1).toString()){
				console.log(reg)
				date += " 🇩🇰"
			}

			const milk = Math.ceil(Math.random()*4000) + 6000 + " L";
			this.cowList.addCow(reg, booth, race, date, milk)
			
		}

	}
}


