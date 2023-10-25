const { TestResult } = require('../models'); // Assuming you've defined the Sequelize model

// Import data from the front end response
const submitTest = async (req, res) => {
    try {
        let data  = req.body;
        // Insert the data into the "student_applications" table
        await TestResult.create({
            name: data?.name,
            email: data?.email,
            contact: data?.contact,
            q1: data?.q1,
            q2: data?.q2,
            q3: data?.q3,
            q4: data?.q4,
            q5: data?.q5,
            q6: data?.q6,
            q7: data?.q7,
            q8: data?.q8,
            q9: data?.q9,
            q10: data?.q10,
            time: data?.time,
            result: data?.result
        });

        return res.status(200).json({ message: 'Test submitted Successfully' });
    } catch (error) {
        return res.status(201).json({ error: error.message });
    }
};

module.exports = { submitTest };
