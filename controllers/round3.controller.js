const {  Round3 } = require('../models'); // Assuming you've defined the Sequelize model

// Import data from the front end response
const getRound3List = async (req, res) => {
    try {
        const data = await Round3.findAll();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(201).json({ error: error.message });
    }
}

module.exports = { getRound3List };