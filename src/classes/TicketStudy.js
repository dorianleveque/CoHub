import Ticket from './Ticket' 
import firebase, {database } from '../firebase'

class TicketStudy extends Ticket{

	#subject;
	#semester;
	#teacher;
	#theme;

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
	constructor(id, title, description, creationDate, requester, subject, semester, teacher, theme, idConversation)
	{
		super(id, title, description, "Study", creationDate, requester, idConversation);
		this.#subject = subject;
		this.#semester = semester;
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

	getSemester() 
	{
		return this.#semester;
	}

	setSemester(semester) 
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
	edit(options)
	{
		var {subject, semester, teacher, theme} = options;
		super.edit(options)
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
		firebase.database().ref('TicketStudy/' + super.getId()).set({
			subject : this.#subject,
			semester : this.#semester,
			teacher : this.#teacher,
			theme : this.#theme
		});
	}

	/**
	 * Delete ticket from firebase
	 */
	delete()
	{
		super.delete()
		firebase.database().ref('TicketStudy/' + super.getId()).remove();
	}

};
export default TicketStudy