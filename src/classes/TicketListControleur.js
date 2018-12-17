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
			console.time("F")
			const nbTicket = limit
			var tickets = []

			// récupérations des données du ticket
			var snapshot = (category)
							? await database.ref('Tickets').orderByChild('category').equalTo(category).limitToLast(1000).once('value')
							: await database.ref('Tickets').orderByChild('creationDate').limitToLast(1000).once('value')

			// on récupère un intervalle de ticket
			var idTicketList = []
			snapshot.forEach((childSnapshot) => {
				const idTicket = childSnapshot.key
				const { title, description } = childSnapshot.val()
				
				// application du filtre
				if (title.includes(filter) || description.includes(filter)) {
					idTicketList.push( idTicket )
				}
			})
			const pageCount = parseInt(idTicketList.length / nbTicket)
			idTicketList = idTicketList.reverse()
			idTicketList = idTicketList.slice(nbTicket*page, nbTicket*page+nbTicket)
			
			// création des tickets
			console.time("I")
			for (var idTicket of idTicketList) {
				var ticket = await this.retriveTicket(idTicket)
				tickets.push(ticket)
			}
			console.timeEnd("I")
			//console.log(tickets)
			console.timeEnd("F")
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
