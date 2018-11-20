import {database} from '../firebase/firebase'


class Ticket{//rendre la classe abstarite

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

	getId()
	{
		return this.id;
	}

	getTitle()
	{
		return this.title;
	}

	setTitle(title)
	{
		this.title = title;
	}

	getDescription()
	{
		return this.description;
	}

	setDescription(description)
	{
		this.description = description;
	}

	getCategory()
	{
		return this.category;
	}

	setCategory(category)
	{
		//verrifier que la categorie existe
		this.category = category;
	}

	getCreationDate()
	{
		return this.creationDate;
	}

	getRequester()
	{
		return this.requester;
	}

	getHelper()
	{
		return this.helper;
	}

	addHelper(helper)
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

	isHelper(user)
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

	save()
	{
		var helper = [];
		for (var i = 0; i < this.helper.length; i++) {
			helper[i] =  this.helper[i].getId();
		}
		database.ref('Ticket/' + this.id).set({
			Title : this.title,
			Description : this.description,
			Category : this.category,
			CreationDate : this.creationDate,
			IdRequester : this.requester.getId(),
			IdHelper : helper
		});
	}

	delete()
	{
		database.ref('Ticket/' + this.id).remove();
	}
};
export default Ticket