import {database} from '../firebase/firebase'

class Conversation{

	#id;
	#messages;
	
	/**
	 * 
	 * @param {int} id : unique key
	 */
	constructor(id)
	{
		this.#id = id;
		this.#messages = [];
	}
	
	getId()
	{
		return this.#id;
	}
	/**
	 * Add a message to a conversation
	 * @param {Message} message 
	 */
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

	/**
	 * Save the converation and messages on firebase
	 */
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

	/**
	 * Delete the converation and messages on firebase
	 */
	delete()
	{
		database.ref('Conversation/' + this.#id).remove();
		for (var i = 0; i < this.#messages.length; i++) {
			this.#messages[i].delete();
		}
	}

}
export default Conversation