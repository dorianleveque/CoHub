import Ticket from './Ticket' 
import {database} from '../firebase/firebase'

class TicketStudy extends Ticket{

	#subject
	#semester
	#teacher
	#theme

	/**
	 * 
	 * @param {int} id : unique key
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} creationDate 
	 * @param {User} requester 
	 * @param {string} subject 
	 * @param {string} semester 
	 * @param {string} teacher 
	 * @param {string} theme 
	 */
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

	/**
	 * Edit ticket parameter
	 * @param {string} title 
	 * @param {string} description 
	 * @param {string} category 
	 * @param {string} subject 
	 * @param {string} semester 
	 * @param {string} teacher 
	 * @param {string} theme 
	 */
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

	/**
	 * Save ticket on firebase
	 */
	save()
	{
		super.save();
		database.ref('TicketStudy/' + super.getId()).set({
			subject : this.#subject,
			semester : this.#semester,
			seacher : this.#teacher,
			theme : this.#theme
		});
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		super.delete()
		database.ref('TicketStudy/' + super.getId()).remove();
	}

};
export default TicketStudy