import Conversation from './Conversation' 
import {database} from '../firebase/firebase'


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
		if (creationDate === null)
		{
			this.#creationDate = new Date();
		}
		else
		{
			this.#creationDate = new Date(creationDate.substring(8),creationDate.substring(3,5),creationDate.substring(0,2)); 
		}
		this.#requester = requester;
		this.#helper = [];
		this.#conversation = new Conversation(idConversation);
	}

	getId()
	{
		return this.#id;
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
	 * Add an helper
	 * @param {User} helper 
	 */
	addHelper(helper)
	{
			this.#helper.push(helper);
	}

	/**
	 * return true if param user is a helper
	 * @param {User} user 
	 */
	isHelper(user)
	{
		for (var i = 0; i < this.#helper.length; i++) 
		{
			if (this.#helper[i] === user) 
			{
					return true;
			}
		}
		return false
	}

	//displayThmbnail() 

	display(){}// methode abstraite
	
	/**
	 * Add a message to the Conversation
	 * @param {Message} message 
	 */
	addMessage(message)
	{
		this.#conversation.addMessage(message);
	} 

	/**
	 * Edit ticket parameter
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 */
	edit(options)
	{
		var {title, description, category} = options;
		if(title != null)
		{
			this.setTitle(title);
		}
		if(description != null)
		{
			this.setDescription(description);
		}
		if(category != null)
		{
			this.setCategory(category);
		}
	}

	/**
	 * Save ticket on firebase
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
		var helper = [];
		for (var i = 0; i < this.#helper.length; i++) {
			helper[i] =  this.helper[i].getId();
		}
		if (this.getId() != null)
		{
			database.ref('Ticket/' + this.#id).set({
				title : this.#title,
				description : this.#description,
				category : this.#category,
				creationDate : day + "/" + month + "/" + year,
				idRequester : this.#requester.getId(),
				idHelper : helper,
				idConversation : this.#conversation.getId()
			});
			this.#conversation.save(); 
		}
		else
		{
			let id = database.ref().child('Ticket').push().key
			let postData = {}
			postData[id] = {
				title : this.#title,
				description : this.#description,
				category : this.#category,
				creationDate : day + "/" + month + "/" + year,
				idRequester : this.#requester.getId(),
				idHelper : helper,
				idConversation : this.#conversation.getId()
			}
			database.ref('Ticket/').update(postData);
		}
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		database.ref('Ticket/' + this.getId()).remove();
		this.#conversation.delete();
	}
};
export default Ticket