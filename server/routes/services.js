const { Router } = require('express');
const router = Router();

const  ServiceController = require('../controller/services');

router.get('/', ServiceController.get_all_services);
router.post('/add', ServiceController.create_service);
router.get('/:id', ServiceController.get_service_by_id);
router.put('/:id', ServiceController.update_service);

module.exports = router;