import firebase, { database } from '../firebase'

class User {

	#id;
	#name;
	#email;
	#surname;
	#nickname;

	constructor(id, name, surname, email, nickname = null)
	{
		this.#id = id;
		this.#name = name;
		this.#email = email;
		this.#surname = surname;
		this.#nickname = nickname;
	}

 	getId()
	{
		return this.#id;
	}

	getName()
	{
		return this.#name;
	}

	getSurname()
	{
		return this.#surname;
	}

	getEmail()
	{
		return this.#email;
	}

	getNickname()
	{
		return this.#nickname;
	}

	setNickname(nickname)
	{
		this.#nickname = nickname;
	}

	//ce qui reste a coder (c.f diagrame de classe)

	//createTicket()

	//editTicket()

	//handleTicket()

	//deleteTicket()

	save()// modification des doner du user en cas de modification du sunon
	{
		// Si l'utilisateur existe déjà dans la base
		// de donnée, celui-ci possède un id
		// Sinon on génère un nouvel id et on enregistre
		// ses infos dans la base de données
		if (this.#id) {
			database.ref('Users/' + this.#id).set({
				name : this.#name,
				surname : this.#surname,
				nickname : this.#nickname,
				email: this.#email
			});
		}
		else {
			let id = firebase.database().ref().child('Users').push().key
			let postData = {}
			postData[id] = {
				name: this.#name,
				surname: this.#surname,
				nickname: this.#nickname,
				email: this.#email
			}
			database.ref('Users/').update(postData)
		}
	}

	//checkRights vraiment utile???

};
export default User