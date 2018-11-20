import Ticket from './Ticket' 
import {database} from '../firebase/firebase'

class TicketStudy extends Ticket{

	constructor(id, title, description, category, creationDate, requester, subject, semester, teacher, theme)
	{
		super(id, title, description, category, creationDate, requester);
		this.subject = subject;
		this.semester = semester;// ne serce pas mieux de metre cette attribu dans la classe User
		this.teacher = teacher;
		this.theme = theme;
	}

	getSubject()
	{
		return this.subject;
	}

	setSubject(subject)
	{
		this.subject = subject;
	}

	getSemester() // peut-etre a copier coller dans la classe User
	{
		return this.semester;
	}

	setSemester(semester) // peut-etre a copier coller dans la classe User
	{
		this.semester = semester;
	}

	getTeacher()
	{
		return this.teacher;
	}

	setTeacher(teacher)
	{
		this.teacher = teacher;
	}

	getTheme()
	{
		return this.theme;
	}

	setTheme(theme)
	{
		this.theme = theme;
	}

	//display()


	save()
	{
		super.save();
		database.ref('TicketStudy/' + this.id).set({
			Subject : this.subject,
			Semester : this.semester,
			Teacher : this.teacher,
			Theme : this.theme
		});
	}

	delete()//methode non défini sur le diagrame de classe mais nessesaire
	{
		super.delete()
		database.ref('TicketStudy/' + this.id).remove();
	}

};
export default TicketStudy