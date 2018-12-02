import Ticket from './Ticket' 
import {database} from '../firebase/firebase'

class TicketStudy extends Ticket{

	#subject
	#semester
	#teacher
	#theme

	constructor(id, title, description, category, creationDate, requester, subject, semester, teacher, theme)
	{
		super(id, title, description, category, creationDate, requester);
		this.#subject = subject;
		this.#semester = semester;// ne serce pas mieux de metre cette attribu dans la classe User
		this.#teacher = teacher;
		this.#theme = theme;
	}

	getSubject()
	{
		return this.#subject;
	}

	setSubject(subject)
	{
		this.#subject = subject;
	}

	getSemester() // peut-etre a copier coller dans la classe User
	{
		return this.#semester;
	}

	setSemester(semester) // peut-etre a copier coller dans la classe User
	{
		this.#semester = semester;
	}

	getTeacher()
	{
		return this.#teacher;
	}

	setTeacher(teacher)
	{
		this.#teacher = teacher;
	}

	getTheme()
	{
		return this.#theme;
	}

	setTheme(theme)
	{
		this.#theme = theme;
	}

	//display()


	edit(title, description, category, subject, semester, teacher, theme)
	{
		super.edit(title, description, category)
		if(subject != null)
		{
			this.setSubject(subject);
		}
		if(semester != null)
		{
			this.setSemester(semester);
		}
		if(teacher != null)
		{
			this.setTeacher(teacher);
		}
		if(theme != null)
		{
			this.setTheme(theme);
		}
	}


	save()
	{
		super.save();
		database.ref('TicketStudy/' + this.id).set({//pb de réfrérance?
			subject : this.#subject,
			semester : this.#semester,
			seacher : this.#teacher,
			theme : this.#theme
		});
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketStudy/' + this.id).remove();
	}

};
export default TicketStudy