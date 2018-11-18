import Ticket from './Ticket' 


class TicketSharing extends Ticket{

	constructor(id, title, description, category, creationDate, requester, item)
	{
		super(id, title, description, category, creationDate, requester);
		this.item = item;
	}

	getItem = function()
	{
		return this.item;
	}

	setItem = function(item)
	{
		this.item = item;
	}

	//display()

	//save()

};
export default TicketSharing