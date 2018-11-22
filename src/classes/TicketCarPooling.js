import Ticket from './Ticket' 
import {database} from '../firebase/firebase'


class TicketCarPooling extends Ticket{

	#departurLocation;
	#arrivalLocation;
	#departurTime;
	#arrivalTime;
	#places;

	constructor(id, title, description, category, creationDate, requester, departurLocation, arrivalLocation, departurTime, arrivalTime, places)
	{
		super(id, title, description, category, creationDate, requester);
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

	save()
	{
		super.save();
		database.ref('TicketCarPooling/' + this.id).set({//pb de réfrérance?
			DeparturLocation : this.#departurLocation,
			ArrivalLocation : this.#arrivalLocation,
			DeparturTime : this.#departurTime,
			ArrivalTime : this.#arrivalTime,
			Places : this.#places
		});
		
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketCarPooling/' + this.id).remove();
	}

};
export default TicketCarPooling