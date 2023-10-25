const {  Round1 } = require('../models'); // Assuming you've defined the Sequelize model

// Import data from the front end response
const getRound1List = async (req, res) => {
    try {
        const data = await Round1.findAll();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(201).json({ error: error.message });
    }
}

module.exports = { getRound1List };