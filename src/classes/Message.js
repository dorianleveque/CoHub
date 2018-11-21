import {database} from '../firebase/firebase'

class Message {

	constructor(id, text, sender, date)
	{
		this.id = id;//pas dans le diagrame de classe mais nessesaire
		this.text = text;
		this.sender = sender;
		this.date = date;//pas prévue mais néssésair pour ordonée les message lors du display
	}

	getId()//pas dans le diagrame de classe mais nessesaire
	{
		return this.id;
	}

	getText()
	{
		return this.text; 
	}

	getSender()
	{
		return this.sender;
	}

	getDate()//pas dans le diagrame de classe mais nessesaire
	{
		return this.date;
	}

	save()
	{
		database.ref('Message/' + this.id).set({
			Message : this.text,//pas dans le diagrame de classe mais nessesaire
			IdSender : this.sender.getId(),
			Date : this.date//pas dans le diagrame de classe mais nessesaire
		});
	}
	

}
export default Message