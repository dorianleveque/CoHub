import {database} from '../firebase/firebase'

class Conversation{

	#id;
	#messages;

	constructor(id)
	{
		this.#id = id;//pas dans le diagrame de classe mais nessesaire
		this.#messages = [];
	}

	getId()
	{
		return this.#id;
	}

	addMessage(message)
	{
		this.#messages.push(message);
	}

	getMessages()
	{
		return this.#messages;
	}

	save()
	{
		var idmessage = [];
		for (var i = 0; i < this.#messages.length; i++) {
			idmessage[i] =  this.#messages[i].getId();
			this.#messages[i].save();
		}
		database.ref('Conversation/' + this.id).set({
			IdMessage : idmessage

		});
	}

	delete()
	{
		database.ref('Conversation/' + this.#id).remove();
		for (var i = 0; i < this.#messages.length; i++) {
			this.#messages[i].delete();
		}
	}

}
export default Conversation