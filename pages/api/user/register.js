import connectDb from "../../../middleware/mongoose";
import Users from "../../../models/Users";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);
        try {
            let temp = new Users({
                userid: req.body.userid,
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password
            })
            const response = await temp.save();
            res.status(201).json(response);
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    } else {
        // Handle any other HTTP method
        res.status(400).json({ message: 'method not allowded' });
    }
}

export default connectDb(handler);