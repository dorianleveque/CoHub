import {database} from '../firebase/firebase'

class User {

	#id;
	#name;
	#surname;
	#nickname;

	constructor(id, name, surname, nickname = null)
	{
		this.#id = id;
		this.#name = name;
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
		database.ref('User/' + this.#id).set({
			Name : this.#name,
			Surname : this.#surname,
			Nickname : this.#nickname
		});
	}

	//checkRights vraiment utile???

};
export default User