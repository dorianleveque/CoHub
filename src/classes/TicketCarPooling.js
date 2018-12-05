import Ticket from './Ticket' 
import {database} from '../firebase/firebase'


class TicketCarPooling extends Ticket{

	#departurLocation;
	#arrivalLocation;
	#departurTime;
	#arrivalTime;
	#places;

	/**
	 * 
	 * @param {int} id 
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} creationDate 
	 * @param {User} requester 
	 * @param {string} departurLocation 
	 * @param {string} arrivalLocation 
	 * @param {string} departurTime 
	 * @param {string} arrivalTime 
	 * @param {int} places 
	 */
	constructor(id, title, description, category, creationDate, requester, departurLocation, arrivalLocation, departurTime, arrivalTime, places, idConversation)
	{
		super(id, title, description, category, creationDate, requester,idConversation);
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
		this.#departurTime = departurTime;
	}

	getArrivalTime()
	{
		return this.#arrivalTime;
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

	/**
	 * Edit ticket parameter
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} departurLocation 
	 * @param {string} arrivalLocation 
	 * @param {string} departurTime 
	 * @param {string} arrivalTime 
	 * @param {int} places 
	 */
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

	/**
	 * Save ticket on firebase
	 */
	save()
	{
		super.save();
		database.ref('TicketCarPooling/' + super.getId()).set({
			departurLocation : this.#departurLocation,
			arrivalLocation : this.#arrivalLocation,
			departurTime : this.#departurTime,
			arrivalTime : this.#arrivalTime,
			places : this.#places
		});
		
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		super.delete()
		database.ref('TicketCarPooling/' + super.getId()).remove();
	}

};
export default TicketCarPooling