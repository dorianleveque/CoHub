import Ticket from './Ticket' 
import {database} from '../firebase/firebase'


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

	constructor(id, title, description, category, creationDate, requester, item)
	{
		super(id, title, description, category, creationDate, requester);
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
	edit(title, description, category, item)
	{
		super.edit(title, description, category)
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
		database.ref('TicketSharing/' + super.getId()).set({//pb de réfrérance?
			item : this.#item
		});
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketSharing/' + super.getId()).remove();
	}

};
export default TicketSharing