const Service = require('../models/service');
const aws = require("aws-sdk");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

exports.create_service = async (req, res) => {
    try {
        const { title, description } = req.body;
        const service = new Service({
            title, description
        });
        await service.save();
        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_all_services = async (req, res) => {
    try {
        const services = await Service.find({});
        console.log(services);
        return res.status(200).json({ services });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_service_by_id = async (req, res) => {
    try {
        const id = req.params.service_id;
        const service = await Service.findById(id);
        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.update_service = async (req, res) => {
    try {
        const _id = req.params.service_id;
        const { title, description } = req.body;

        console.log({ _id, title, description });

        const service = await Service.findByIdAndUpdate({ _id }, {
            $set: { title, description }
        }, { new: true });

        console.log({ service });

        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.delete_service = async (req, res) => {
    try {
        const _id = req.params.service_id;

        await Service.findOneAndDelete({ _id });

        return res.status(200).json({ message: 'Service deleted successfully!' });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.upload_image = async (req, res) => {
    let myFile = req.file.originalname.split(".");
    const serviceId = req.params.serviceId;
    const extName = myFile[myFile.length - 1];

    let service = await Service.findById(serviceId);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${(new Date()).getTime()}.${extName}`,
        Body: req.file.buffer
    }

    service.image = params.Key;

    await service.save();

    console.log({ service });

    s3.upload(params, (error, data) => {
        if (error) {
            return res.status(500).send(error)
        }

        return res.status(200).json({ data, service });
    });
}

exports.get_image = async (req, res) => {
    console.log(req.params);
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
}


const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: process.env.AWS_BUCKET_NAME
    }

    return s3.getObject(downloadParams).createReadStream();
}