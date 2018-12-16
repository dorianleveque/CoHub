import { database } from '../firebase'
import Message from './Message';
import TicketListControleur from './TicketListControleur';
import User from './User';

class Conversation{

	#id;
	#messages;
	
	/**
	 * @param {int} id : unique key
	 */
	constructor(id)
	{
		this.#id = id;
		this.#messages = [];
	}
	
	getId()
	{
		return this.#id;
	}
	
	setId(id)
	{
		this.#id = id;
	}
	
	/**
	 * Ajoute un message à la base de donnée
	 * @param {User} sender 
	 * @param {String} content 
	 * @param {Date} date 
	 */
	async addMessage(sender, content, date)
	{
		try {
			// génération d'un nouvel id pour le message
			let id = database.ref().child('Conversations').push().key
			let message = new Message(id, content, sender, date)
			await this.saveMessage(message)
		}
		catch(error) {
			throw "impossible-to-add-message"
		}
	}

	/**
	 * Modifie le message dans la base de donnée
	 * @param {String} idMessage identifiant du message
	 * @param {String} newContent nouveau contenu
	 */
	async editMessage(idMessage, newContent)
	{
		try {
			let message = this.getMessage(idMessage)
			message.setContent(newContent)
			message.setDate(new Date())
			await this.saveMessage(message)
		}
		catch(error) {
			throw "impossible-to-edit-message"
		}
	}

	/**
	 * Surprime de la base de donnée le message ayant l'id renseigné
	 * @param {String} idMessage 
	 */
	async deleteMessage(idMessage)
	{
		try {
			let message = this.getMessage(idMessage)
			await this.deleteMessage(message)
		}
		catch(error) {
			throw "impossible-to-delete-message"
		}
	}

	/**
	 * Sauvegarde le message de la conversation dans la base de données de firebase 
	 * @param {Message} message
	 */
	async saveMessage(message) {
		await database.ref('Conversations/'+ this.getId()).update(message.save());
	}
	
	/**
	 * Supprimer le message de la conversation dans la base de données de firebase 
	 * @param {Message} message 
	 */
	async deleteMessage(message) {
		await database.ref('Conversations/'+ this.getId()).child(message.getId()).remove()
	}

	/**
	 * Récupérer l'ensembles des messages de l'objet conversation
	 */
	getMessages()
	{
		let messages = this.#messages
		let messagesSort = messages.sort((a, b) => {
			return a.getDate() - b.getDate()
		})
		return messagesSort
	}

	/**
	 * Récupérer l'objet message de l'objet conversation correspondant à l'id renseigné
	 * @param {String} id id message
	 */
	getMessage(idMessage)
	{
		for (var i = 0; i < this.#messages.length; i++) {
			if (this.#messages[i].getId() === idMessage)
			{
				return this.#messages[i];
			}
		}
	}

	/**
	 * Evenement déclenché lorsqu'un message à été ajouté dans la base de données
	 * Permet de mettre à jour la liste messages de la classe Conversation
	 * 
	 * Une fonction callback passé dans les paramètres de l'évênement sera éxecutée
	 * à chaque fois qu'un ticket sera ajouté à la base de données
	 * @param {callback} callbackFunction
	 */
	onMessageAdded(callback=null) {
		// Cette portion de code récupère à l'innitialisation 
		// l'ensembles des messages de la conversation
		// puis les messages ajoutés lorsque des messages
		// sont ajoutés à la base de donnée

		database.ref().child('Conversations/'+this.getId()).on('child_added', (snapshot) => {
			const idMessage = snapshot.key
			const { sender, content, date } = snapshot.val()
			let tlc = new TicketListControleur()
			tlc.searchUser(sender).then((user) => {
				let message = new Message(idMessage, content, user, new Date(date))
				this.#messages.push(message)
				if (callback) {
					callback()
				}
			})
		})
	}

	/**
	 * Evenement déclenché lorsqu'un message à été modifié dans la base de données
	 * Permet de mettre à jour la liste messages de la classe Conversation
	 * 
	 * Une fonction callback passé dans les paramètres de l'évênement sera éxecutée
	 * à chaque fois qu'un ticket sera modifié à la base de données
	 * @param {callback} callbackFunction
	 */
	onMessageChanged(callback=null) {
		database.ref().child('Conversations/'+this.getId()).on('child_changed', (snapshot) => {
			const idMessage = snapshot.key
			const { sender, content, date } = snapshot.val()
			
			let tlc = new TicketListControleur()
			tlc.searchUser(sender).then((user) => {
				const message = this.getMessage(idMessage)
				message.setContent(content)
				message.setDate(new Date(date))
				message.setSender(user)
				if (callback) {
					callback()
				}
			})
		})
	}

	/**
	 * Evenement déclenché lorsqu'un message à été supprimé dans la base de données
	 * Permet de mettre à jour la liste messages de la classe Conversation
	 * 
	 * Une fonction callback passé dans les paramètres de l'évênement sera éxecutée
	 * à chaque fois qu'un ticket sera supprimé à la base de données
	 * @param {callback} callbackFunction
	 */
	onMessageDeleted(callback=null) {
		database.ref().child('Conversations/'+this.getId()).on('child_removed', (snapshot) => {
			const idMessage = snapshot.key
			let messageList = this.getMessages()
			let messageIndex = messageList.indexOf(idMessage)
			messageList.splice(messageIndex, 1)
			if (callback) {
				callback()
			}
		})
	}


	/**
	 * Supprime la conversation avec l'ensemble de ses messages de la base de données de firebase
	 */
	async delete()
	{
		await database.ref('Conversations/' + this.getId()).remove()
	}

}
export default Conversation