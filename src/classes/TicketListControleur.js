import { database } from '../firebase'
import User from './User'


class TicketListControleur {

	/**
	 * get a user by id in firebase and create User 
	 * @param {int} id
	 * @returns User
	 */
	async searchUser(id) 
	{
		try {
			var snapshot = await database.ref('Users/'+id).once('value')
			var { name, nickname, email, surname } = snapshot.val();
			return new User(id, name, surname, email, nickname);
		}
		catch(error) {
			throw error
		}
	}

	/**
	 * get ticket by page and filter and create Ticket
	 * @param {Int} page page à afficher
	 * @param {Int} limit nombre de ticket par page
	 * @param {String} category (optional) catégorie du ticket
	 * @param {String} filter (optional) mot clé présent dans le titre ou dans la description du ticket
	 * @returns un objet contenant une liste de Ticket et le nombre total de page
	 */
	async searchTickets(page, limit, category=null, filter='') {
		try {

			const nbTicket = limit
			var tickets = []

			// récupérations des données du ticket
			var snapshot = (category)
							? await database.ref('Tickets').orderByChild('category').equalTo(category).limitToLast(1000).once('value')
							: await database.ref('Tickets').orderByChild('creationDate').limitToLast(1000).once('value')

			// on récupère un intervalle de ticket
			var TicketsDescr = [] // garde la description du ticket
			var ticketsPromises = [] // garde les promaise de ticekt

			snapshot.forEach((childSnapshot) => {
				var idTicket = childSnapshot.key
				var { category, creationDate, description, idConversation, idRequester, title } = childSnapshot.val()
				
				// application du filtre
				if (title.includes(filter) || description.includes(filter)) {
					TicketsDescr.push({idTicket : idTicket ,cat : category, creationDate : creationDate, description : description, idConversation : idConversation, idRequester : idRequester, title : title})
				}
			})

			var pageCount = 0
			if (TicketsDescr.length / nbTicket === parseInt(TicketsDescr.length / nbTicket) ){ // besoin de simplifier ici 
				pageCount = parseInt(TicketsDescr.length / nbTicket)
			}
			else {
				pageCount = parseInt(TicketsDescr.length / nbTicket)+1
			}

			TicketsDescr = TicketsDescr.reverse()
			TicketsDescr = TicketsDescr.slice(nbTicket*page, nbTicket*page+nbTicket)
			for (var i = 0, l = TicketsDescr.length; i < l; i++) {
				var {idTicket, cat, description, idRequester, title} = TicketsDescr[i]
				ticketsPromises.push(this.createTickets(idTicket,cat, description, idRequester, title))
				}

			tickets =  await Promise.all(ticketsPromises)
			return { tickets, pageCount }
		}
		catch (error) {
			throw error
		}
	}
	 

	/**
	 * get ticket by id and create Ticket
	 * @param {int} id
	 * @returns Ticket
	 */
	async createTickets(idTicket,cat, description, idRequester, title)
	{
		try {
			var user = await this.searchUser(idRequester)
			var ticket = user.createTicket(idTicket , title , description, cat)
			 
			return ticket;
		}
		catch (error) {
			throw error
		}
	}





	/**
	 * get ticket by id and create Ticket
	 * @param {int} id
	 * @returns Ticket
	 */
	async retriveTicket(id)
	{
		try {
			var snapshot = await database.ref('Tickets/'+id).once('value')
			var { category, creationDate, description, idConversation, idRequester, title} = snapshot.val();

			var user = await this.searchUser(idRequester)
			
			var ticket = null
			if (category === "CarPooling" )
			{
				await database.ref('TicketsCarPooling/'+id).once('value').then((snapshot) =>{
					var { arrivalLocation, arrivalTime, departurLocation, departurTime, places } = snapshot.val();
					ticket = user.createTicket(id , title , description, category, new Date(creationDate), idConversation, { arrivalLocation, arrivalTime: new Date(arrivalTime), departurLocation, departurTime: new Date(departurTime), places } );
				});
			}
			if (category === "Study" )
			{
				await database.ref('TicketsStudy/'+id).once('value').then((snapshot) =>{
					const { subject, semester, teacher, theme } = snapshot.val();
					ticket = user.createTicket(id , title , description, category, new Date(creationDate), idConversation, { subject, semester, teacher, theme } );
				});
			}
			if  (category === "Sharing") 		
			{
				await database.ref('TicketsSharing/'+id).once('value').then((snapshot) => {
					const { item } = snapshot.val();
					ticket = user.createTicket(id , title , description, category, new Date(creationDate), idConversation, { item } );
				});
			}
			return ticket;
		}
		catch (error) {
			throw error
		}
	}

}export default TicketListControleur
