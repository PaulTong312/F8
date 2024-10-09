const Course = require('../models/courses');
const mongoose = require('../../util/mongoose');
class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('course/show', {
                    course: mongoose.mongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new CourseController();
