class User {

	constructor(id, name, surname, nickname = null)
	{
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.nickname = nickname;
		
	}

 	getId = function()
	{
		return this.id;
	}

	getName = function()
	{
		return this.name;
	}

	getSurname = function()
	{
		return this.surname;
	}

	getNickname = function()
	{
		return this.nickname;
	}

	setNickname = function(nickname)
	{
		this.nickname = nickname;
	}

	//ce qui reste a coder (c.f diagrame de classe)

	//createTicket()

	//editTicket()

	//handleTicket()

	//deleteTicket()

	//save()

	//checkRights')

};
export default User