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
	 * @param {string} creationDate 
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
		//verrifier que la categorie existe
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
		if (helper === this.getRequester())
		{
			console.log("On ne peut pas etre aidant et aider en meme temps");
		}
		else
		{
			this.#helper.push(helper);
		}
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
	edit(title, description, category)
	{
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
		var helper = [];
		for (var i = 0; i < this.#helper.length; i++) {
			helper[i] =  this.helper[i].getId();
		}
		database.ref('Ticket/' + this.#id).set({
			title : this.#title,
			description : this.#description,
			category : this.#category,
			creationDate : this.#creationDate,
			idRequester : this.#requester.getId(),
			idHelper : helper,
			idConversation : this.#conversation.getId()
		});
		this.#conversation.save(); // a modifier
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		database.ref('Ticket/' + this.#id).remove();
		this.#conversation.delete();
	}
};
export default Ticket