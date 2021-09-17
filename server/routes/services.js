const { Router } = require('express');
const router = Router();

const  ServiceController = require('../controller/services');

router.get('/', ServiceController.get_all_services);
router.post('/add-service', ServiceController.create_service);
router.get('/:service_id', ServiceController.get_service_by_id);
router.put('/:service_id', ServiceController.update_service);
router.delete('/:service_id', ServiceController.delete_service);

module.exports = router;