import Ticket from './Ticket' 
import { database } from '../firebase'


class TicketCarPooling extends Ticket{

	#departurLocation;
	#arrivalLocation;
	#departurTime;
	#arrivalTime;
	#places;

	constructor(id, title, description, creationDate, requester, departurLocation, arrivalLocation, departurTime, arrivalTime, places, idConversation)
	{
		super(id, title, description, "CarPooling", creationDate, requester, idConversation);
		this.#departurLocation = departurLocation;
		this.#arrivalLocation = arrivalLocation;
		this.#departurTime = departurTime;
		this.#arrivalTime = arrivalTime;
		this.#places = places;
	}

	getDeparturLocation()
	{
		return this.#departurLocation;
	}

	setDeparturLocation(departurLocation)
	{
		this.#departurLocation = departurLocation;
	}

	getArrivalLocation()
	{
		return  this.#arrivalLocation;
	}

	setArrivalLocation(arrivalLocation)
	{
		this.#arrivalLocation = arrivalLocation;
	}

	getDeparturTime()
	{
		return this.#departurTime;
	}

	setDeparturTime(departurTime)
	{
		this.#departurTime = departurTime;//verification du format de l'heure
	}

	getArrivalTime()
	{
		return this.#arrivalTime;//verification du format de l'heure
	}

	setArrivalTime(arrivalTime)
	{
		this.#arrivalTime = arrivalTime;
	}

	getPlaces()
	{
		return this.#places;
	}

	setPlaces(places)
	{
		this.#places = places;
	}

	//display()

	edit(title, description, category, departurLocation, arrivalLocation, departurTime, arrivalTime, places)
	{
		super.edit(title, description, category)
		if(departurLocation != null)
		{
			this.setDeparturLocation(departurLocation);
		}
		if(arrivalLocation != null)
		{
			this.setArrivalLocation(arrivalLocation);
		}
		if(departurTime != null)
		{
			this.setDeparturTime(departurTime);
		}
		if(arrivalTime != null)
		{
			this.setArrivalTime(arrivalTime);
		}
		if(places != null)
		{
			this.setPlaces(places);
		}
	}


	save()
	{
		super.save();
		database.ref('TicketCarPooling/' + super.getId()).set({//pb de réfrérance?
			departurLocation : this.#departurLocation,
			arrivalLocation : this.#arrivalLocation,
			departurTime : this.#departurTime,
			arrivalTime : this.#arrivalTime,
			places : this.#places
		});
		
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketCarPooling/' + super.getId()).remove();
	}

};
export default TicketCarPooling