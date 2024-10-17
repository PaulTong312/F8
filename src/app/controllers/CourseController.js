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

    create(req, res, next) {
        res.render('course/create');
    }

    store(req, res, next) {
        let formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9QFkahguHM2_ISOBWeVW1UwbaMw`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CourseController();
