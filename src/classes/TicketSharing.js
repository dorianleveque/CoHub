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

	save()
	{
		super.save();
		database.ref('TicketSharing/' + this.id).set({//pb de réfrérance?
			Item : this.#item
		});
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketSharing/' + this.id).remove();
	}

};
export default TicketSharing