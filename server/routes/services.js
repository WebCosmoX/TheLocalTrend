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

const aws = require("aws-sdk");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


router.get('/', ServiceController.get_all_services);
router.post('/add-service', ServiceController.create_service);
router.get('/:service_id', ServiceController.get_service_by_id);
router.put('/:service_id', ServiceController.update_service);
router.delete('/:service_id', ServiceController.delete_service);

router.post('/upload-image/:serviceId', upload, ServiceController.upload_image);

router.get('/images/:key', (req, res) => {
    console.log(req.params);
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
});


const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: process.env.AWS_BUCKET_NAME
    }

    return s3.getObject(downloadParams).createReadStream();
}

module.exports = router;