import {database} from '../firebase/firebase'

class Message {

	#id;
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
	constructor(id, text, sender, date = null)
	{
		this.#id = id;
		this.#text = text;
		this.#sender = sender;
		if (date === null)
		{
			this.#date = new Date();
		}
		else
		{
			this.#date = new Date(date.substring(8),date.substring(3,5),date.substring(0,2)); 
		}
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
		var year = this.getDate().getFullYear();
		var month =  this.getDate().getMonth();
		var day  =  this.getDate().getDate();
		if (month<10)
		{
			month = "0" + month;
		}
		if (day<10)
		{
			day = "0" + day;
		}
		database.ref('Message/' + this.getId()).set({
			message : this.#text,
			sender : this.#sender.getId(),
			date : day + "/" + month + "/" + year
		});
	}

	/**
	 * Delete the message on firebase
	 */
	delete()
	{
		database.ref('Message/' + this.getId()).remove();
	}

}
export default Message