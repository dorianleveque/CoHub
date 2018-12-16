class Message {

	#id;
	#content;
	#sender;
	#date;

	/**
	 * 
	 * @param {Int} id : unique key
	 * @param {String} content 
	 * @param {User} sender 
	 * @param {Date} date 
	 */
	constructor(id, content, sender, date)
	{
		this.#id = id;
		this.#content = content;
		this.#sender = sender;
		this.#date = date;
	}

	getId()
	{
		return this.#id;
	}

	getContent()
	{
		return this.#content; 
	}

	/**
	 * Ajoute le contenu au message
	 * @param {String} content Contenu du message
	 */
	setContent(content) 
	{
		this.#content = content
	}

	getSender()
	{
		return this.#sender;
	}

	/**
	 * Ajoute l'expéditeur au message
	 * @param {User} sender expéditeur du message
	 */
	setSender(sender)
	{
		this.#sender = sender
	}

	getDate()
	{
		return this.#date;
	}

	/**
	 * Ajoute une date d'envoi au message
	 * @param {Date} date date d'envoi du message
	 */
	setDate(date)
	{
		this.#date = date
	}

	save() {
		let messageData = {}
		messageData[this.getId()] = {
			sender: this.getSender().getId(),
			content: this.getContent(),
			date: this.getDate().toISOString()
		}
		return messageData
	}
}
export default Message