import {database} from '../firebase/firebase'

class User {

	constructor(id, name, surname, nickname = null)
	{
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.nickname = nickname;
		
	}

 	getId()
	{
		return this.id;
	}

	getName()
	{
		return this.name;
	}

	getSurname()
	{
		return this.surname;
	}

	getNickname()
	{
		return this.nickname;
	}

	setNickname(nickname)
	{
		this.nickname = nickname;
	}

	//ce qui reste a coder (c.f diagrame de classe)

	//createTicket()

	//editTicket()

	//handleTicket()

	//deleteTicket()

	save()
	{
		database.ref('Ticket/' + this.id).set({
			Name : this.name,
			Surname : this.surname,
			Nickname : this.nickname
		});
	}

	//checkRights

};
export default User