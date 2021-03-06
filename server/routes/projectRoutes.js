const router = require('express').Router();
const projectController = require('../controllers/projectController');
router.post('/addProject', projectController.addProject);
router.get('/getProjects', projectController.getProjects);
router.get('/getProjectKey/:name', projectController.getProjectKey);
router.get('/checkProjectName/:name',projectController.checkProjectName);
module.exports = router;


