const adminModel = require("../models/admin.model")
const jwt = require('jsonwebtoken');


const createAdmin = async (req, res) => {
    try {
        const user = new adminModel({ ...req.body })
        await user.save()
        res.send(user)
    } catch (error) {
        res.send('Internal server error: ' + error)
    }
}



const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const adminData = await adminModel.findOne({ email: email })
        if (!adminData) {
            return res.send('no admin found',)
        }
        if (adminData.password === password) {
            const token = jwt.sign({ userId: adminData._id, email: adminData.email }, 'yourSecretKey', {
                expiresIn: '1h', // Token expiration time
              });
            

            return  res.json({ token,name:adminData.name });
        } else {
            // console.log(adminData);
            return res.send('login failed')
        }
    } catch (error) {
        res.send('internal server error: ' + error)
    }
}

module.exports = { createAdmin, adminLogin }