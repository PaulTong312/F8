const featureRouter = require('./feature');
const siteRouter = require('./site');
const courseRouter = require('./course');
function router(app) {
    app.use('/feature', featureRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = router;
