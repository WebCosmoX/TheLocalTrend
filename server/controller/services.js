const Service = require('../models/service');

exports.create_service = async (req, res) => {
    try {
        const { title, description } = req.body;
        const service = new Service({
            title, description
        });
        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_all_services = async (req, res) => {
    try {
        const services = await Service.find({});
        return res.status(200).json({ services });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_service_by_id = async (req, res) => {
    try {
        const id = req.params.id;
        const service = await Service.findById(id);
        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.update_service = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        return res.status(200).json({ service });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}