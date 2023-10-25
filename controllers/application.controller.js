const { StudentApplication } = require('../models'); // Assuming you've defined the Sequelize model

// Import data from the front end response
const importApplications = async (req, res) => {
    try {
//         const {
//             id,
//             name,
//             email_id,
//             wa_no,
//             date_of_birth,
//             address,
//             diploma_branch,
//             degree_branch,
//             ssc_percentage,
//             diploma_percentage,
//             diploma_appearing,
//             be_percentage,
//             be_appearing,
//             be_passing_year,
//             subject_backlog,
//             college,
//             company_applied,
//             area_of_interest,
//             other_qualification,
//         } = req.body;
//
// // Create an object to insert into the "student_applications" table
//         const studentData = {
//             id : id,
//             name : name,
//             email_id : email_id,
//             wa_no : wa_no,
//             date_of_birth : date_of_birth,
//             address : address,
//             diploma_branch : diploma_branch,
//             degree_branch : degree_branch,
//             ssc_percentage : ssc_percentage,
//             diploma_percentage : diploma_percentage,
//             diploma_appearing : diploma_appearing,
//             be_percentage : be_percentage,
//             be_appearing : be_appearing,
//             be_passing_year : be_passing_year,
//             subject_backlog : subject_backlog,
//             college : college,
//             company_applied : company_applied,
//             area_of_interest : area_of_interest,
//             other_qualification : other_qualification,
//             created_at : new Date(),
//             deleted_at : null,
//             updated_at : new Date(),
//
//         };

        const { data } = req.body;

        // Insert the data into the "student_applications" table
        await StudentApplication.bulkCreate(data);

        return res.status(200).json({ message: 'Data imported successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Error importing data' });
    }
};

module.exports = { importApplications };
