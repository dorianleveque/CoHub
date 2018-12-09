import firebase, { database } from '../firebase'
import Ticket from './Ticket';
import TicketCarPooling from './TicketCarPooling';
import TicketStudy from './TicketStudy';
import TicketSharing from './TicketSharing';

class User {

	#id;
	#name;
	#email;
	#surname;
	#nickname;

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

	//ce qui reste a coder (c.f diagrame de classe)

	//options = item, subject, semester, teacher, theme,departurLocation, arrivalLocation, departurTime, arrivalTime, places

	createTicket(id, title, description, category, creationDate, idConversation, options = null)
	{
		if (!options)
		{
			var t = new Ticket(id, title, description, category, creationDate, this, idConversation);
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

	//editTicket()

	//handleTicket()

	//deleteTicket()

	save()// modification des doner du user en cas de modification du sunon
	{
		database.ref('Users/' + this.#id).set({
			name : this.#name,
			surname : this.#surname,
			nickname : this.#nickname,
			email: this.#email
		});
	}

	checkRights(curentUser, otherUser)
	{
		if(curentUser.getId()=== otherUser.getId())
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