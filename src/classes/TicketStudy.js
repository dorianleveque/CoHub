import Ticket from './Ticket' 


class TicketStudy extends Ticket{

	constructor(id, title, description, category, creationDate, requester, subject, semester, teacher, theme)
	{
		super(id, title, description, category, creationDate, requester);
		this.subject = subject;
		this.semester = semester;// ne serce pas mieux de metre cette attribu dans la classe User
		this.teacher = teacher;
		this.theme = theme;
	}

	getSubject = function ()
	{
		return this.subject;
	}

	setSubject = function (subject)
	{
		this.subject = subject;
	}

	getSemester = function () // peut-etre a copier coller dans la classe User
	{
		return this.semester;
	}

	setSemester = function (semester) // peut-etre a copier coller dans la classe User
	{
		this.semester = semester;
	}

	getTeacher = function ()
	{
		return this.teacher;
	}

	setTeacher = function (teacher)
	{
		this.teacher = teacher;
	}

	getTheme = function ()
	{
		return this.theme;
	}

	setTheme = function (theme)
	{
		this.theme = theme;
	}

	//display()


	//save()

};
export default TicketStudy