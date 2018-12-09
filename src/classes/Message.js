import firebase, { database } from '../firebase'

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
	constructor(id, text, sender, date)
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
			this.#date = new Date(date); 
		}
	}

	getId()
	{
		return this.#id;
	}

	setId(id)
	{
		this.#id = id;
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
		var hours = this.getDate().getHours();
		var minutes = this.getDate().getMinutes();
		var seconds = this.getDate().getSeconds();
		if (this.getId() != null)
		{
			firebase.database().ref('Messages/' + this.getId()).set({
				message : this.#text,
				sender : this.#sender.getId(),
				date : day + "-" + month + "-" + year + " "+ hours + ":" + minutes + ":" + seconds
			});
		}
		else
		{
			let id = firebase.database().ref().child('Messages').push().key
			this.setId(id);
			let postData = {}
			postData[id] = {
				message : this.#text,
				sender : this.#sender.getId(),
				date : day + "/" + month + "/" + year
			}
			firebase.database().ref('Messages/').update(postData);
		}
	}

	/**
	 * Delete the message on firebase
	 */
	delete()
	{
		firebase.database().ref('Messages/' + this.getId()).remove();
	}

}
export default Message