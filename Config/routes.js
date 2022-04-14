const RobotController = require('../Controllers/RobotController')

function routes(app) {
    app.get('/', RobotController.getAllRobots)

    app.get('/aprons', RobotController.getAprons)

    app.get('/baseball_hats', RobotController.getBaseballHats)

    app.get('/mugs', RobotController.getMugs)

    app.get('/t-shirts', RobotController.getTShirts)
}

module.exports = routes
