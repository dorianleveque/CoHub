import Ticket from './Ticket' 
import {database} from '../firebase/firebase'


class TicketSharing extends Ticket{

	constructor(id, title, description, category, creationDate, requester, item)
	{
		super(id, title, description, category, creationDate, requester);
		this.item = item;
	}

	getItem()
	{
		return this.item;
	}

	setItem(item)
	{
		this.item = item;
	}

	//display()

	save()
	{
		super.save();
		database.ref('TicketSharing/' + this.id).set({
			Item : this.item
		});
	}

};
export default TicketSharing