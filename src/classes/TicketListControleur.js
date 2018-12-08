import firebase, {database } from '../firebase'
import User from './User' 
import Ticket from './Ticket'


class TicketListControleur {

	#tickets;

	constructor() {
		this.#tickets = [];
	}

	getTickets()
	{

		return this.#tickets;
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
		return firebase.database().ref('Users/'+id).once('value').then(function(snapshot){
				var { name, nickname, email, surname } = snapshot.val();
				var u = new User(id, name, surname, email, nickname);
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
	searchTickets = (filter = null, page) =>
	{
		var totalTicket = [];
		var query = firebase.database().ref("Tickets").orderByKey();	
		query.once("value").then((snapshot) => 
		{
			snapshot.forEach((childSnapshot) =>
			{
				totalTicket.push(childSnapshot);
			
		
		var min = (totalTicket.length)-12*(page);
		if (min < 0) 
		{
		 		min = 0;
		}
		var max = (totalTicket.length)-12*(page-1) ;
		if (max < 12) 
		{
		 		max = 12;
		}
		if (totalTicket.length > 1)
		{
			var tmpSliced = totalTicket.slice(min,max);
		}
		else
		{
			var tmpSliced = totalTicket;
		}
		//idTicket not used but it is a key to find the ticket in tmpSliced
		for(let [idTicket, dataTicket] of Object.entries(tmpSliced))
		{
			
			
			const { title, description, category, creationDate, idConversation, idRequester } = dataTicket.val()
			
			this.searchUser(idRequester).then((user) => {
				this.getTickets().push(user.createTicket(childSnapshot.key , title , description, category, creationDate, idConversation));
			})
		}
		});
		})
	}	
	 
	/**
	 * get ticket by id and create Ticket
	 * @param {int} id
	 */
	retriveTicket = (id) =>
	{
		return firebase.database().ref('Tickets/'+id).once('value').then((snapshot) => {
			var { category, creationDate, description, idConversation, idRequester, title} = snapshot.val();
			this.searchUser(idRequester).then((user) => {
				if (category === "CarPooling" )
				{
					return firebase.database().ref('TicketsCarPooling/'+id).once('value').then((snapshot) =>{
						var { arrivalLocation, arrivalTime, departurLocation, departurTime, places } = snapshot.val();
						var t = user.createTicket(id , title , description, category, creationDate, idConversation, { arrivalLocation, arrivalTime, departurLocation, departurTime, places } );
						console.log(t)
						return t
					});
				}
				if (category === "Study" )
				{
					return firebase.database().ref('TicketsStudy/'+id).once('value').then((snapshot) =>{
						const { subject, semester, teacher, theme } = snapshot.val();
						var t = user.createTicket(id , title , description, category, creationDate, idConversation, { subject, semester, teacher, theme } );
						return t
					});
				}
				if  (category === "TicketSharing") 		
				{
					return firebase.database().ref('TicketsSharing/'+id).once('value').then((snapshot) => {
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