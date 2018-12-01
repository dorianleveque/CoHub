import Ticket from './Ticket' 
import { database } from '../firebase'


class TicketSharing extends Ticket{

	#item

	constructor(id, title, description, creationDate, requester, item, idConversation)
	{
		super(id, title, description, "Sharing", creationDate, requester, idConversation);
		this.#item =item;
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
		database.ref('TicketSharing/' + super.getId()).set({//pb de réfrérance?
			Item : this.#item
		});
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketSharing/' + super.getId()).remove();
	}

};
export default TicketSharing