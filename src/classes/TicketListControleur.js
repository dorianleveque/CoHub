import {database} from '../firebase/firebase'
import User from './User' 
import Ticket from './Ticket'

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

	getTicket(id)// a tester
	{
		for (var i = 0; i < this.#tickets.length; i++) {
			if (this.#tickets[i].getId() == id) 
			{
				return this.#tickets[i];
			};
		};
	}

	//retriveTickets(id)

	//searchTicket()

	searchUser()
	{	
		// return database.ref('User/').once('value').then(function(snapshot) {
		// 	var user = snapshot.val();
		// 	var u = []
		// 	for (var i = 0; i <= Object.keys(user).length; i++) {
		// 		if (user[Object.keys(user)[i]] != null)
		// 		{
		// 			var id = Object.keys(user)[i];
		// 			u.push(new User (id, user[id].Name, user[id].Surname, user[id].Nickname));
		// 		}
		// 	};
		// 	return u;
		// });
		
		// var query = database.ref("User").orderByKey();
		
		// return query.once("value").then(function(snapshot) {
		// 	 var users = [];
   		// 	 snapshot.forEach(function(childSnapshot) {
     	// 	 var key = childSnapshot.key;
		// 	 var childData = childSnapshot.val();

		// 	  users.push(new User (key, childData.Name, childData.Surname, childData.Nickname));
			  
		// 	  });
			  
		// 	  return users
		// }, function(error) {
		// 	console.error(error);
		// }).then(function(values) { 
		// 	console.log('all done', values); 
		// 	return values
		// });

		var query = database.ref("User").orderByKey();
		
		return query.once("value").then(function(snapshot) {
			 var users = [];
   			 snapshot.forEach(function(childSnapshot) {
     		 var key = childSnapshot.key;
			 var childData = childSnapshot.val();

			  users.push(new User (key, childData.Name, childData.Surname, childData.Nickname));
			  
			  });
			  
			  return users
		}, function(error) {
			console.error(error);
		}).then(function(values) { 
			console.log('all done', values); 
			return values
		}); 


		








	}


 
	// searchTicket(filter)
	// {
	// 	return this.searchUser().then(function(users){
	// 		var tickets = [];
	// 		for(var i=0; i < Object.keys(users).length; i++){
	// 			database.ref('Ticket/').orderByChild('idRequester').equalTo((users[Object.keys(users)[i]].__private_0_id)).once('value').then(function(snapshot) {
	// 				var ticket = snapshot.val();
	// 				for (var i = 0; i < Object.keys(ticket).length; i++) {
	// 						tickets.push(ticket);
	// 				};
	// 				return tickets;
	// 			});
	// 		}
	// 	});
	// }

	displayTickets()
	{
		for (var i = 0; i < this.#tickets.length; i++) {
			this.#tickets[i].display();
		};
	}

	displayTicket(id)//	a tester
	{
		for (var i = 0; i < this.#tickets.length; i++) {
			if (this.#tickets[i].getId() == id) 
			{
				this.#tickets[i].display();
			};
		};
	}

	//save()

	clearTickets()
	{
		for (var i = 0; i < this.#tickets.length; i++) {
			this.#tickets[i] = null;
		};
	}
}
export default TicketListControleur