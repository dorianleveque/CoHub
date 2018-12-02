import Ticket from './Ticket' 
import {database} from '../firebase/firebase'


class TicketSharing extends Ticket{

	#item

	constructor(id, title, description, category, creationDate, requester, item)
	{
		super(id, title, description, category, creationDate, requester);
		this.item = #item;
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

	edit(title, description, category, item)
	{
		super.edit(title, description, category)
		if(item != null)
		{
			this.setItem(item);
		}
	}

	save()
	{
		super.save();
		database.ref('TicketSharing/' + this.id).set({//pb de réfrérance?
			item : this.#item
		});
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketSharing/' + this.id).remove();
	}

};
export default TicketSharing