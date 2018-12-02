import {database} from '../firebase/firebase'

class Message {

	#id
	#text;
	#sender;
	#date;

	/**
	 * 
	 * @param {int} id : unique key
	 * @param {string} text 
	 * @param {User} sender 
	 * @param {string} date 
	 */
	constructor(id, text, sender, date)
	{
		this.#id = id;
		this.#text = text;
		this.#sender = sender;
		this.#date = date; //TODO utiliser moment ou Date
	}

	getId()
	{
		return this.#id;
	}

	getText()
	{
		return this.#text; 
	}

	getSender()
	{
		return this.#sender;
	}

	getDate()
	{
		return this.#date;
	}

	/**
	 * Save the message on firebase
	 */
	save()
	{
		database.ref('Message/' + this.#id).set({
			message : this.#text,
			sender : this.#sender.getId(),
			date : this.#date
		});
	}

	/**
	 * Delete the message on firebase
	 */
	delete()
	{
		database.ref('Message/' + this.#id).remove();
	}

}
export default Message