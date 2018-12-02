import {database} from '../firebase/firebase'
import Ticket from  './Ticket'
import TicketCarPooling from './TicketCarPooling'
import TicketSharing from './TicketSharing'
import TicketStudy from './TicketStudy'

class User {

	#id;
	#name;
	#surname;
	#nickname;

	/**
	 * 
	 * @param {int} id   : unique key
	 * @param {string} name 
	 * @param {string} surname 
	 * @param {string} nickname 
	 */
	constructor(id, name, surname, nickname = null)
	{
		this.#id = id;
		this.#name = name;
		this.#surname = surname;
		this.#nickname = nickname;	
	}

 	getId()
	{
		return this.#id;
	}

	getName()
	{
		return this.#name;
	}

	getSurname()
	{
		return this.#surname;
	}

	getNickname()
	{
		return this.#nickname;
	}

	setNickname(nickname)
	{
		this.#nickname = nickname;
	}

	/**
	 * create Ticket
	 * @param {int} id 
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} creationDate 
	 * @param {int} idConversation 
	 * @param {*} options :item, subject, semester, teacher, theme,departurLocation, arrivalLocation, departurTime, arrivalTime, places
	 */
	createTicket(id, title, description, category, creationDate, idConversation, options = null)
	{
		if (options != null)
		{
			var t = new Ticket (id, title, description, category, creationDate, this, idConversation);
		}
		else
		{
			if (category === "CarPooling" )
			{
				const { departurLocation, arrivalLocation, departurTime, arrivalTime, places } = options;
				var t = new TicketCarPooling(id, title, description, creationDate, this, departurLocation, arrivalLocation, departurTime, arrivalTime, places, idConversation);
			}
			if (category === "Study" )
			{
				const { subject, semester, teacher, theme } = options;
				var t = new TicketStudy(id, title, description, creationDate, this, subject, semester, teacher, theme, idConversation);
			}
			if  (category === "TicketSharing")
			{
				const { item } = options;
				var t = new TicketSharing(id, title, description, creationDate, this, item, idConversation);
			}
		}
		return t;
	}


	editTicket(ticket, options = null, optionsCarPooling = null, optionsSharing = null, optionsStudy = null)// a voir
	{
		if (ticket instanceof TicketCarPooling && optionsCarPooling != null && optionsSharing === null && optionsStudy === null)
		{
			ticket.edit(options + optionsCarPooling);
			ticket.save();
		}
		else if (ticket instanceof TicketSharing && optionsCarPooling === null && optionsSharing != null && optionsStudy === null)
		{
			ticket.edit(options + optionsSharing);
			ticket.save();
		}
		else if (ticket instanceof TicketStudy && optionsCarPooling === null && optionsSharing === null && optionsStudy != null)
		{
			ticket.edit(options + optionsStudy);
			ticket.save();
		}
	}

	// handleTicket(id)
	// {

	// }

	//deleteTicket(id)
	// {

	// }

	/**
	 * Save user on firebase
	 */
	save()
	{
		database.ref('User/' + this.#id).set({
			name : this.#name,
			surname : this.#surname,
			nickname : this.#nickname
		});
	}

	checkRights(otherUser)
	{
		if(this.getId()=== otherUser.getId())
		{
			return true;
		}
		else
		{
			return false;
		}
	}


};
export default User