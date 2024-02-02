class Task {
	static list = [];
	static listHtml = document.getElementById("tasks");
	static displayedCat = false;

	name;
	category;
	checkedHtml;
	checked = false;

	/**
	 * @param {string} name le nom de la tache
	 * @param {string} category le nom de la categorie
	 */
	constructor(name, category) {
		this.name = name;
		this.category = category;
		this.checkedHtml = document.createElement('span');
		if (!this.checked) {
			this.checkedHtml.classList.add('hidden');
		}
		this.checkedHtml.textContent = '✔️';
	}

	static addTask() {
		const name = document.getElementById('tas').value;
		const cat = document.getElementById('category').value;

		Task.list.push(new Task(name, cat));
		Task.displayTask(Task.displayedCat);
	}

	/**
	 * Affiche toutes les taches ou les taches de la categorie selectionner
	 * @param {string | false} categorie false si on affiche tous, sinon le nom de la categorie a afficher
	 */
	static displayTask(categorie = false) {
		Task.displayedCat = categorie;
		Task.listHtml.innerHTML = "";

		Task.list.sort(function (x, y) {
			return (x.checked === y.checked) ? 0 : x.checked ? 1 : -1;
		})

		for (let index = 0; index < Task.list.length; index++) {
			if (categorie) {
				if (Task.list[index].category == categorie) {
					Task.list[index].display();
				}
			} else {
				Task.list[index].display();
			}
		}
	}

	display = function () {

		const div2 = document.createElement('div');
		div2.setAttribute('class', 'task');

		const label = document.createElement('p');
		label.setAttribute('class', 'todo');
		console.log(this.name);
		label.textContent = this.name;

		const cat = document.createElement('p');
		cat.setAttribute('class', 'todo'),
			cat.textContent = this.category;

		const div3 = document.createElement('div');
		div3.setAttribute('class', 'checkbox');

		const input = document.createElement('input');
		input.type = 'checkbox';
		input.checked = this.checked;

		input.addEventListener('click', () => {
			this.check(input.checked);
		});

		div3.appendChild(input);
		div3.appendChild(this.checkedHtml);
		div2.appendChild(label);
		div2.appendChild(cat);
		div2.appendChild(div3);

		Task.listHtml.appendChild(div2);
	}

	/**
	 * coche ou decoche la case
	 * @param {boolean} checked vraie si la case est cocher sinon faux
	 */
	check = function (checked) {
		this.checked = checked;
		if (checked == true) {
			this.checkedHtml.classList.remove('hidden');
		} else {
			this.checkedHtml.classList.add('hidden');
		}
		Task.displayTask();
	}
}

/*
class Vehicule {
	brand;
	model;


	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}


	drive = function () {

	}
}


class Voiture extends Vehicule {
	static list = [];
	nbPorte;

	constructor(brand, model, is3Porte) {
		super(brand, model);
		this.nbPorte = is3Porte ? 3 : 5;
	}

	openDoor = function () {

	}
}


class Moto extends Vehicule {
	static list = [];
	roueArriere = function () {

	}
}


Voiture.list.push(new Voiture('Peugoet', '306', true));
Voiture.list.push(new Voiture('Renault', 'megane', false));

Voiture.list[0].drive();
Voiture.list[0].openDoor();



Moto.list.push(new Moto('suzuki', 's400'));

Moto.list[0].drive();
Moto.list[0].roueArriere();
*/