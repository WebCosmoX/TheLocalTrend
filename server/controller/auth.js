/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 */

const users = [{
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD
}];

exports.authenticate_user = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = users.find(user => user.username == username);
        if (result) {
            if (result.password == password) {
                return res.status(200).json({ result });
            } else {
                return res.status(404).json({ message: 'Email and/or password combination wrong!' });
            }
        } else {
            return res.status(404).json({ message: 'Email and/or password combination wrong!' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};