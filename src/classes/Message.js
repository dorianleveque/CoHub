import { database } from '../firebase'

class Message {

	#id
	#text;
	#sender;
	#date;

	constructor(id, text, sender, date)
	{
		this.#id = id;//pas dans le diagrame de classe mais nessesaire
		this.#text = text;
		this.#sender = sender;
		this.#date = date;//pas prévue mais néssésair pour ordonée les message lors du display
	}

	getId()//pas dans le diagrame de classe mais nessesaire
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

	getDate()//pas dans le diagrame de classe mais nessesaire
	{
		return this.#date;
	}

	save()
	{
		database.ref('Message/' + this.#id).set({
			Message : this.#text,
			Sender : this.#sender.getId(),
			Date : this.#date
		});
	}

	delete()
	{
		database.ref('Message/' + this.#id).remove();
	}

}
export default Message