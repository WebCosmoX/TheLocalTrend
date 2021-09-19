const Service = require('../models/service');

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