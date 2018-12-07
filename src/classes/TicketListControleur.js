import { database } from '../firebase/firebase'
import User from './User' 
import Ticket from './Ticket'


class TicketListControleur {

	#tickets;
	#totalTickets;

	constructor() {
		this.#tickets = [];
		this.#totalTickets = [];
	}

	getTickets()
	{

		return this.#tickets;
	}

	getTotalTickets()
	{
		return this.#totalTickets;
	}

	getTicket(id)
	{
		for (var i = 0; i < this.getTickets().length; i++) {
			if (id === this.getTickets()[i].getId())
			{
				return this.getTickets()[i];
			};
		};
	}

	/**
	 * get a user by id in firebase and create User 
	 * @param {int} id 
	 */
	searchUser(id) 
	{
		return database.ref('User/'+id).once('value').then(function(snapshot){
				var { name, nickname, surname } = snapshot.val();
				var u = new User(id, name, surname, nickname);
				return u;
		}, function (error) {
			console.error(error);
		}).then(function (values) {
			return values
		});
	}

	/**
	 * get ticket by page and filter and create Ticket
	 * @param {*} filter not functionnal now
	 * @param {int} page 
	 */
	searchTickets = (filter = null) =>
	{
		var query = database.ref("Ticket").orderByKey();	
		query.once("value").then((snapshot) => 
		{
			
			snapshot.forEach((childSnapshot) =>
			{
				this.getTotalTickets().push(childSnapshot);
			});
		});
	}

	seclectTicket(page)
	{
		var min = (this.getTotalTickets().length)-12*(page);
		if (min < 0) 
		{
		 		min = 0;
		}
		var max = (this.getTotalTickets().length)-12*(page-1) ;
		if (max < 12) 
		{
		 		max = 12;
		}
		var tmpSliced = this.getTotalTickets().slice(min,max);
			
		for(let [idTicket, dataTicket] of Object.entries(tmpSliced))
		{
			const { title, description, category, creationDate, idConversation, idRequester } = dataTicket.val()
			this.searchUser(idRequester).then((user) => {
			this.getTickets().push(user.createTicket(idTicket , title , description, category, creationDate, idConversation));
			})
		}
	}	
	 
	/**
	 * get ticket by id and create Ticket
	 * @param {int} id
	 */
	retriveTicket = (id) =>
	{
		return database.ref('Ticket/'+id).once('value').then((snapshot) => {
			var { category, creationDate, description, idConversation, idRequester, title} = snapshot.val();
			this.searchUser(idRequester).then((user) => {
				if (category === "CarPooling" )
				{
					return database.ref('TicketCarPooling/'+id).once('value').then((snapshot) =>{
						var { arrivalLocation, arrivalTime, departurLocation, departurTime, places } = snapshot.val();
						var t = user.createTicket(id , title , description, category, creationDate, idConversation, { arrivalLocation, arrivalTime, departurLocation, departurTime, places } );
						console.log(t)
						return t
					});
				}
				if (category === "Study" )
				{
					return database.ref('TicketStudy/'+id).once('value').then((snapshot) =>{
						const { subject, semester, teacher, theme } = snapshot.val();
						var t = user.createTicket(id , title , description, category, creationDate, idConversation, { subject, semester, teacher, theme } );
						return t
					});
				}
				if  (category === "TicketSharing") 		
				{
					return database.ref('TicketSharing/'+id).once('value').then((snapshot) => {
						const { Item } = snapshot.val();
						var t = user.createTicket(id , title , description, category, creationDate, idConversation, { Item } );
						console.log(t)
						return t
					});
				}
			});
		});
	}

	/**
	 * Display all tickets
	 */
	displayTickets() 
	{
		for (var i = 0; i < this.#tickets.length; i++) 
		{
			this.#tickets[i].displayThmbnail();
		};
	}

	/**
	 * display a ticket
	 * @param {int} id 
	 */
	displayTicket(id)
	{
		for (var i = 0; i < this.#tickets.length; i++) 
		{
			if (this.#tickets[i].getId() == id)
			{
				this.#tickets[i].display();
			};
		};
	}

	/**
	 * delete ticket from class
	 */
	clearTickets() 
	{
		for (var i = 0; i < this.#tickets.length; i++) 
		{
			this.#tickets[i] = null;
		};
	}

}export default TicketListControleur