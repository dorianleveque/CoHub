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
		 var users = [];
		return query.once("value").then(function(snapshot) {
   			snapshot.forEach(function(childSnapshot) {
     		var key = childSnapshot.key;
			var childData = childSnapshot.val();

			users.push(new User (key, childData.Name, childData.Surname, childData.Nickname));
			  
			  });
			  return users
		}, function(error) {
			console.error(error);
		}).then(function(values) { 
			//console.log('all done', values); 
			return values
		}); 


		








	}


 
	//searchTicket(filter = null)
	//{
		//var query = database.ref("Ticket").orderByKey();
		//var tmpTickets = [];	
		//return query.once("value").then(function(snapshot) {
			//snapshot.forEach(function(childSnapshot) {
     		 //var key = childSnapshot.key;
			 //var childData = childSnapshot.val();
			 //tmpTickets.push(childData);
			  //});
			//tmpSliced = tmpTickets.slice(tmpTickets.length - 4)// TODO a modifier la valeur 4
			//for (var i = 0; i < tmpSliced.length; i++) {
				//if (tmpSliced.Category ===  "maths")
				
				


				//users.push(new User (key, childData.Name, childData.Surname, childData.Nickname));
			//};
			 //return tmpTickets;
		//}, function(error) {
			//console.error(error);
		//}).then(function(values) { 
			//console.log('all done', values); 
			//return values

		//});


	
	//}

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