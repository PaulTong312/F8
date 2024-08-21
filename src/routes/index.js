const featureRouter = require('./feature');
const siteRouter = require('./site');
function router(app) {
    app.use('/feature', featureRouter);
    app.use('/', siteRouter);
}

module.exports = router;
