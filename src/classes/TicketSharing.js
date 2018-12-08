import Ticket from './Ticket' 
import firebase, {database } from '../firebase'


class TicketSharing extends Ticket{

	#item;

	/**
	 * 
	 * @param {int} id  : unique key
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} creationDate 
	 * @param {User} requester 
	 * @param {string} item 
	 */

	constructor(id, title, description, creationDate, requester, item, idConversation)
	{
		super(id, title, description, "Sharing", creationDate, requester, idConversation);
		this.#item = item;
	}

	getItem()
	{
		return this.#item;
	}

	setItem(item)
	{
		this.#item = item;
	}

	//display()
	
	/**
	 * Edit ticket parameter
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} item 
	 */
	edit(options)
	{
		var {item} = options;
		super.edit(options)
		if(item != null)
		{
			this.setItem(item);
		}
	}

	/**
	 * Save ticket on firebase
	 */
	save()
	{
		super.save();
		firebase.database().ref('TicketSharing/' + super.getId()).set({
			item : this.#item
		});
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		super.delete()
		firebase.database().ref('TicketSharing/' + super.getId()).remove();
	}

};
export default TicketSharing