class Ticket{

	constructor(id, title, description, category, creationDate, requester)
	{
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.creationDate = creationDate;
		this.requester = requester;
		this.helper = [];
	}

	getId = function()
	{
		return this.id;
	}

	getTitle = function ()
	{
		return this.title;
	}

	setTitle = function (title)
	{
		this.title = title;
	}

	getDescription = function ()
	{
		return this.description;
	}

	setDescription = function (description)
	{
		this.description = description;
	}

	getCategory = function ()
	{
		return this.category;
	}

	setCategory = function (category)
	{
		//verrifier que la categorie existe
		this.category = category;
	}

	getCreationDate = function ()
	{
		return this.creationDate;
	}

	getRequester = function ()
	{
		return this.requester;
	}

	getHelper = function ()
	{
		return this.helper;
	}

	addHelper = function (helper)
	{
		if (helper === this.requester)
		{
			console.log("On ne peut pas etre aidant et aider en meme temps");
		}
		else
		{
			this.helper.push(helper);
		}
	}

	isHelper = function (user)
	{
		for (var i = 0; i < this.helper.length; i++) {
			if (this.helper[i] === user) 
			{
					return true;
			}
			else
			{
				return false;
			}
		}
	}

	//ce qui reste a coder (c.f diagrame de classe)

	//displayThumbnail()

	//display()

	//addMessage()

	//edit()

	//save()

	//delete()
};
export default Ticket