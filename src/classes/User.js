import { database } from '../firebase'
import Ticket from './Ticket';
import TicketCarPooling from './TicketCarPooling';
import TicketStudy from './TicketStudy';
import TicketSharing from './TicketSharing';
import Message from './Message';

class User {

	#id;
	#name;
	#email;
	#surname;
	#nickname;

	/**
	 * 
	 * @param {int} id   : unique key
	 * @param {string} name 
	 * @param {string} surname 
	 * @param {string} nickname 
	 */
	constructor(id, name, surname, email, nickname = null)
	{
		this.#id = id;
		this.#name = name;
		this.#email = email;
		this.#surname = surname;
		this.#nickname = nickname;
	}

 	getId()
	{
		return this.#id;
	}

	setId(id)
	{
		this.#id = id;
	}

	getName()
	{
		return this.#name;
	}

	getSurname()
	{
		return this.#surname;
	}

	getEmail()
	{
		return this.#email;
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
	 * @param {Date} creationDate 
	 * @param {int} idConversation 
	 * @param {*} options :item, subject, semester, teacher, theme,departurLocation, arrivalLocation, departurTime, arrivalTime, places
	 */
	createTicket(id, title, description, category, creationDate, idConversation, options = null)
	{
		let idConv = (idConversation) ? idConversation : database.ref().child('Conversations').push().key
		var t = null
		if (options === null)
		{
			t = new Ticket (id, title, description, category, creationDate, this, idConv);
		}
		else
		{
			if (category === "CarPooling" )
			{
				const { departurLocation, arrivalLocation, departurTime, arrivalTime, places } = options;
				t = new TicketCarPooling(id, title, description, creationDate, this, departurLocation, arrivalLocation, departurTime, arrivalTime, places, idConv);
			}
			if (category === "Study" )
			{
				const { subject, semester, teacher, theme } = options;
				t = new TicketStudy(id, title, description, creationDate, this, subject, semester, teacher, theme, idConv);
			}
			if  (category === "Sharing")
			{
				const { item } = options;
				t = new TicketSharing(id, title, description, creationDate, this, item, idConv);
			}
		}
		return t;
	}

	editTicket(ticket, options)
	{
		ticket.edit(options);
		return ticket;
	}

	handleTicket(ticket, message)
	{
		if(ticket.isHelpe(this)=== false)
		{
			ticket.addHelper(this);
		}
		var m = new Message(null, message, this, null);
		ticket.addMessage(m);

	}

	deleteTicket(ticket)
	{
		ticket.delete();
		ticket = null;
	}

	/**
	 * Save user on firebase
	 */
	save()
	{
		database.ref('Users/' + this.#id).set({
			name : this.#name,
			surname : this.#surname,
			nickname : this.#nickname,
			email: this.#email
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