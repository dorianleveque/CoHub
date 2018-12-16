import Conversation from './Conversation' 
import { database } from '../firebase'


class Ticket{

	#id
	#title;
	#description;
	#category;
	#creationDate;
	#requester;
	#helper;
	#conversation;

	/**
	 * 
	 * @param {int} id :unique key
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {Date} creationDate 
	 * @param {User} requester 
	 * @param {int} idConversation :unique key of conversation
	 */

	constructor(id, title, description, category, creationDate, requester, idConversation)
	{
		this.#id = id;
		this.#title = title;
		this.#description = description;
		this.#category = category;
		this.#creationDate = creationDate;
		this.#requester = requester;
		this.#helper = [];
		this.#conversation = new Conversation(idConversation);
	}

	getId()
	{
		return this.#id;
	}

	setid(id)
	{
		this.#id = id;
	}

	getTitle()
	{
		return this.#title;
	}

	setTitle(title)
	{
		this.#title = title;
	}

	getDescription()
	{
		return this.#description;
	}

	setDescription(description)
	{
		this.#description = description;
	}

	getCategory()
	{
		return this.#category;
	}

	setCategory(category)
	{
		this.#category = category;
	}

	getCreationDate()
	{
		return this.#creationDate;
	}

	getRequester()
	{
		return this.#requester;
	}

	getHelper()
	{
		return this.#helper;
	}

	getConversation()
	{
		return this.#conversation;
	}


	/**
	 * Edit ticket parameter
	 * @param {*} options : title, description, category
	 */
	edit(options)
	{
		var {title, description} = options;
		if(title != null)
		{
			this.setTitle(title);
		}
		if(description != null)
		{
			this.setDescription(description);
		}
		
	}

	/**
	 * Save ticket on firebase
	 */
	save()
	{
		if (this.getId() != null)
		{
			database.ref('Tickets/' + this.#id).set({
				title : this.getTitle(),
				description : this.getDescription(),
				category : this.getCategory(),
				creationDate : this.getCreationDate().toISOString(),
				idRequester : this.getRequester().getId(),
				idConversation : this.getConversation().getId()
			}); 
		}
		else
		{
			let id = database.ref().child('Tickets').push().key
			this.setid(id);
			let postData = {}
			postData[id] = {
				title : this.getTitle(),
				description : this.getDescription(),
				category : this.getCategory(),
				creationDate : this.getCreationDate().toISOString(),
				idRequester : this.getRequester().getId(),
				idConversation : this.getConversation().getId()
			}
			database.ref('Tickets/').update(postData);
		}
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		database.ref('Tickets/' + this.getId()).remove();
		this.#conversation.delete();
	}
};
export default Ticket