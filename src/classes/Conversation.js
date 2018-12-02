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

	getMessage(id)
	{
		for (var i = 0; i < this.#messages.length; i++) {
			if (this.#messages[i].getId() == id)
			{
				return this.#messages[i];
			}
		}
	}

	save()
	{
		var idmessage = [];
		for (var i = 0; i < this.#messages.length; i++) {
			idmessage[i] =  this.#messages[i].getId();
			this.#messages[i].save();
		}
		database.ref('Conversation/' + this.id).set({
			idMessage : idmessage

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