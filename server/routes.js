const db = require('./db');

exports.exec = app => {

	app.get('/students', (req, res) => {
		db.findAll()
			.then((data) => res.render('index', { records: data }));
	});

	/**
	 * Retrieves a student's data
	 * @endpoint 
	 */
	app.get('/students/:matric', (req, res) => {
		let matric = req.params.matric;
		db.find({ matric })
			.then(({ matric, firstName, lastName, age }) => {
				res.end(`${firstName} ${lastName}, ${age} years`);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Retrieves a student's first name
	 * @endpoint
	 */
	app.get('/students/:matric/firstName', (req, res) => {
		let matric = req.params.matric;
		db.find({ matric })
			.then(({ firstName }) => {
				res.end(`${age} years`);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Retrieves a student's last name
	 * @endpoint
	 */
	app.get('/students/:matric/lastName', (req, res) => {
		let matric = req.params.matric;
		db.find({ matric })
			.then(({ lastName }) => {
				res.end(lastName);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Retrieves a student's age
	 * @endpoint
	 */
	app.get('/students/:matric/age', (req, res) => {
		let matric = req.params.matric;
		db.find({ matric })
			.then(({ age }) => {
				res.end(age);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Edit a student's first name
	 * @endpoint
	 */
	app.get('/students/edit/:matric/firstName/:new', (req, res) => {
		let matric = req.params.matric;
		let newInfo = req.params.new;
		db.update({ matric }, { firstName: newInfo})
			.then(() => {
				res.end(`Student's profile updated. View new data with /students/${matric}`);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Edit a student's last name
	 * @endpoint
	 */
	app.get('/students/edit/:matric/lastName/:new', (req, res) => {
		let matric = req.params.matric;
		let newInfo = req.params.new;
		db.update({ matric }, { lastName: newInfo})
			.then(() => {
				res.end(`Student's profile updated. View new data with /students/${matric}`);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Edit a student's age
	 * @endpoint
	 */
	app.get('/students/edit/:matric/age/:new', (req, res) => {
		let matric = req.params.matric;
		let newInfo = req.params.new;
		db.update({ matric }, { age: newInfo})
			.then(() => {
				res.end(`Student's profile updated. View new data with /students/${matric}`);
			})
			.catch(() => {
				res.end(`Student with matric number ${matric} does not exist!`);
			});
	});

	/**
	 * Creates a new student's data
	 * @endpoint
	 */
	app.get('/students/create/:matric/:fname/:lname/:age', (req, res) => {
		let matric = req.params.matric;
		let fname = req.params.fname;
		let lname = req.params.lname;
		let age = req.params.age;
		db.find({ matric })
			.then(() => {
				res.end(`Student with matric number ${matric} exists!`);
			})
			.catch(() => {
				db.create({
					matric: matric,
					firstName: fname,
					lastName: lname,
					age: age
				})
				.then(() => res.end('Student successfully created.'));
			});
	});

};