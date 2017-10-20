function getData(instituteId, courses, cb){

    console.log('########################################## getData start');
    console.log('start for ## Courses');

    async.each(courses, function(course, cb){
        console.log('#### course');
        console.log('Processing course:', course.courseInstituteId);

            var courseInstituteId = course.courseInstituteId;
            var students = course.students;

                findInstitute(instituteId, courseInstituteId, function(err, institute){
                    console.log('find institute');

                    async.each(students, function(student, cb){
                        console.log('#### student');
                        console.log('Processing student:', student.studentId);


                        findStudent(student.studentId, function(err, std){

                                console.log('find student');
                                console.log('instituteName:', institute.name);
                                console.log('courseName:', institute.courseInstitutes[0].name);
                                console.log('courseKeyCourse:', institute.courseInstitutes[0].keyCourse);
                                console.log('subcategory:', institute.courseInstitutes[0].subcategoryCourse.description);
                                console.log('category:', institute.courseInstitutes[0].subcategoryCourse.categoryCourse.description);



                                // var studentId = student.studentId;
                                var grade = student.grade;
                                console.log('$$$$$$$ student');
                                // console.log('studentId:', studentId);
                                console.log('studentName:', std.name);
                                console.log('studentLastName:', std.lastName);
                                console.log('studentNationalId:', std.nationalId);
                                console.log('grade:', grade);

                                cb(null);
                            });



                    }, function(err){
                         if (err) {
                            console.log('student err:', err);
                            cb(appError.createCertificatesError);
                        } else {
                            console.log('end for ## Student');
                            console.log('students success');
                            cb(null, 'students success');
                        }
                    });


                });




    }, function(err){
        if (err) {
            console.log('course err:', err);
            cb(appError.createCertificatesError);
        } else {
            console.log('end for ## Courses');
            console.log('courses success');
            cb(null, 'courses success');
        }
    });

};
