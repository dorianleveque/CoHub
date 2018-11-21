import {database} from '../firebase/firebase'

class Conversation{

	constructor(id)
	{
		this.id = id//pas dans le diagrame de classe mais nessesaire
		this.messages = [];
	}

	getId()
	{
		return this.id;
	}

	addMessage(message)
	{
		this.messages.push(message);
	}

	getMessages()
	{
		return this.messages;
	}

	save()
	{
		var idmessage = [];
		for (var i = 0; i < this.messages.length; i++) {
			idmessage[i] =  this.messages[i].getId();
		}
		database.ref('Ticket/' + this.id).set({
			IdMessage : idmessage
		});
	}

}
export default Conversation