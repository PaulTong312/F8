
class FeatureController {
    index(req, res) {
        res.render('feature');
    }

    timer(req, res) {
        res.send('tong duy khang');
    }
};

module.exports = new FeatureController;