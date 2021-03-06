const { Router } = require('express');
const router = Router();

const ServiceController = require('../controller/services');

const multer = require('multer');

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

const upload = multer({ storage }).single('image');

router.get('/', ServiceController.get_all_services);
router.post('/add-service', ServiceController.create_service);
router.get('/:service_id', ServiceController.get_service_by_id);
router.put('/:service_id', ServiceController.update_service);
router.delete('/:service_id', ServiceController.delete_service);

router.post('/upload-image/:serviceId', upload, ServiceController.upload_image);

router.get('/images/:key', ServiceController.get_image);

module.exports = router;