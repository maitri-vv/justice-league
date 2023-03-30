const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const FetchUser = require("../../middleware/FetchUser");

const config = require("../../config/config");
const JWT_SECRET = config.jwt.jwtsecret;

// importing model
const newsletter = require("../../models/newsletter");

// 1.Register a user for newsletter
// validation , try catch , hashing , jsonwebtoken
router.post(
    "/register",
    [
        body("name", "name must be atleast 3 characters").isLength({
            min: 3,
        }),
        body("email", "Invalid Email").isEmail(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(401)
                .json({ success: false, msg: "Email or name Error" });
        }

        //checking if user exists
        let user = await newsletter.findOne({ email: req.body.email });
        if (user) {
            return res
                .status(400)
                .json({ success: false, msg: "User Already Exists With This Email" });
        }

        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedName = await bcrypt.hash(req.body.name, salt);

        try {
            let min = 100000;
            let max = 999999;
            let randomNumber = Math.floor(Math.random() * (max - min)) + min;
            // trying to save the user
            user = new newsletter({
                email: req.body.email,
                name: hashedName,
                complain:req.body.complain
            });
            let newUser = await user.save();
            // creating authtoken and sending the token
            const data = {
                user: {
                    id: newUser.id,
                },
            };

            // sending otp via email
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "saurabhvishwakarma745@gmail.com",
                    // user: config.email.id,
                    pass: "pkydzopaxewngdrp",
                    // pass: config.email.app_password
                },
            });
            console.log(user.email);
            let info = await transporter.sendMail(
                {
                    from: config.email.id,
                    to: user.email,
                    subject: `Welcome to Justice League!!`,
                    text: `We are Happy to see you at Justice League.
                    Your complaint number is : ${user.otp}
                    we will repsong you sortly!`,
                },
                function (error, info) {
                    if (error) {
                        console.log(error.message);
                        return res
                            .status(400)
                            .json({
                                success: false,
                                msg: "We coudn't send you email!",
                                error: error.message,
                            });
                    } else {
                        //   console.log('Mail Sent')
                        // res.status(200).json({success:true,msg:"Email Sent Successfully"});
                        // sending authtoken if user email is valid
                        const authToken = jwt.sign(data, JWT_SECRET);
                        console.log("Email Sent");
                        return res
                            .status(200)
                            .json({ success: true, authToken: authToken });
                    }
                }
            );
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false, msg: "Internal Server Error" });
        }
    }
);


// google authentication

// Google Login
const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = config.oauth.client_id;

const client = new OAuth2Client(CLIENT_ID);

router.post("/googlelogin", async (req, res) => {
    try {
        const tokenId = req.body.tokenId;
        const result = await client.verifyIdToken({
            idToken: tokenId,
            audience: CLIENT_ID,
        });

        const email_verified = result.payload.email_verified;
        const name = result.payload.name;
        const email = result.payload.email;
        const complain = result.payload.complain

        let user;
        success = false;
        if (email_verified) {
            user = await newsletter.findOne({ email: email });
            if (user) {
                // already in database
                const data = {
                    user: {
                        id: user.id,
                    },
                };
                const authToken = jwt.sign(data, JWT_SECRET);
                success = true;
                res.status(200).json({ success, authToken });
            } else {
                // we need to create a user with the same details
                let generateName = email + "12345";
                const salt = await bcrypt.genSalt(10);
                const hashedName = await bcrypt.hash(generateName, salt);
                try {
                    user = new newsletter({
                        email: email,
                        name: hashedName,
                        complain:complain
                    });
                    const newUser = await user.save();
                    const data = {
                        user: {
                            id: user.id,
                        },
                    };
                    const authToken = jwt.sign(data, JWT_SECRET);
                    success = true;
                    res.status(200).json({ success, authToken });
                } catch (error) {
                    res.status(401).json({ success, msg: "Internal Server Error" });
                }
            }
        } else {
            res.status(404).json({ success: false, msg: "Email Not Verified" });
        }
    } catch (error) {
        res
            .status(400)
            .json({ success: false, msg: "Internal Server Error" + error.message });
    }
});

module.exports = router;
