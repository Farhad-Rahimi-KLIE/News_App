const User = require("../Models/user")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    static Register = async (req, res) => {
        const { username, email, password } = req.body;
        try {
            if (username && email && password) {
                const isUser = await User.findOne({ email: email });
                if (!isUser) {
                    const genSalt = await bcryptjs.genSalt(10);
                    const HashPassword = await bcryptjs.hash(password, genSalt);
                    const register = await User.create({
                        username: username,
                        email: email,
                        password: HashPassword,
                    })
                    if (register) {
                        return res.status(200).json({ message: "User Registered.", register })
                    }
                } else {
                    return res.status(400).json({ message: "Email Already ben Exist." })
                }
            } else {
                return res.status(400).json({ message: "All Fields are Required." })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static Login = async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const iseEmail = await User.findOne({ email: email });
                if (iseEmail) {
                    if (iseEmail.email === email && (await bcryptjs.compare(password, iseEmail.password))) {
                        const token = await jwt.sign({ userID: iseEmail._id }, "pleaseSubscribe", {
                            expiresIn: "3d",
                        })
                        if (iseEmail) {
                            return res.status(200).json({ message: "User Log den.", token, name: iseEmail.username })
                        }
                    } else {
                        return res.status(400).json({ message: "Wrong Credentials." })
                    }
                } else {
                    return res.status(400).json({ message: "Email address Not Found." })
                }
            } else {
                return res.status(400).json({ message: "All Fields are Required." })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}
module.exports = UserController;