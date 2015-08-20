var student = require('./../controllers/student');
var teachers = require('./../controllers/teachers');


	module.exports = function(router){
		router.route('/students')
			.get(student.find);
			
		router.route('/teachers')
			.get(teachers.view)
			
			.post(teachers.add)
			
			.put(teachers.update)
			
			.delete(teachers.delete);
		
		return router;
	
	};
