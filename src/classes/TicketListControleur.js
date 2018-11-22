import {database} from '../firebase/firebase'
import User from './User' 

class TicketListControleur{

	#tickets

	constructor()
	{
		this.#tickets = [];
	}

	getTickets()
	{
		return this.#tickets;
	}

	//getTicket()

	//retriveTickets()

	//searchTicket()

	searchUser()
	{
		return database.ref('User/' ).once('value').then(function(snapshot) {
			var user = snapshot.val();
			var maxId = 0;
			for (var i = 0; i < Object.keys(user).length; i++) {
				if (Object.keys(user)[i]> maxId)
				{
					maxId = Object.keys(user)[i];
				}
			};
			var u = []
			for (var i = 0; i < maxId+1; i++) {
				if (user[i] != null)
				{
					u[i] =  new User (i, user[i].Name, user[i].Surname, user[i].Nickname);
				}
			};
			return u.$promise;
		});
	}

	searchTicket()//pas fini
	{
		this.searchUser().then(function(a){
			return database.ref('Ticket/' ).once('value').then(function(snapshot) {
				var ticket = snapshot.val();
				console.log(ticket)
				var maxId = 0;
				for (var i = 0; i < Object.keys(ticket).length; i++) {
					if (Object.keys(ticket)[i]> maxId)
					{
						maxId = Object.keys(ticket)[i];
					}

				};
			
			});


		});
	}

	displayTickets()
	{
		for (var i = 0; i < this.#tickets.length; i++) {
			this.#tickets[i].display()
		};
	}

	//displayTicket()

	//save()

	//clearTickets()


}
export default TicketListControleur