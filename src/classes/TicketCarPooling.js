import Ticket from './Ticket' 


class TicketCarPooling extends Ticket{

	constructor(id, title, description, category, creationDate, requester, departurLocation, arrivalLocation, departurTime, arrivalTime, places)
	{
		super(id, title, description, category, creationDate, requester);
		this.departurLocation = departurLocation;
		this.arrivalLocation = arrivalLocation;
		this.departurTime = departurTime;//verification du format de l'heure
		this.arrivalTime = arrivalTime;//verification du format de l'heure
		this.places = places;
	}

	getDeparturLocation = function ()
	{
		return this.departurLocation;
	}

	setDeparturLocation = function (departurLocation)
	{
		this.departurLocation = departurLocation;
	}

	getArrivalLocation = function ()
	{
		return  this.arrivalLocation;
	}

	setArrivalLocation = function (arrivalLocation)
	{
		this.arrivalLocation = arrivalLocation;
	}

	getDeparturTime = function ()
	{
		return this.departurTime;
	}

	setDeparturTime = function (departurTime)
	{
		this.departurTime = departurTime;//verification du format de l'heure
	}

	getArrivalTime = function()
	{
		return this.arrivalTime;//verification du format de l'heure
	}

	setArrivalTime = function(arrivalTime)
	{
		this.arrivalTime = arrivalTime;
	}

	getPlaces = function()
	{
		return this.places;
	}

	setPlaces = function(places)
	{
		this.places = places;
	}

	//display()

	//save()

};
export default TicketCarPooling